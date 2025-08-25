import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY environment variable is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { from_name, from_email, message } = req.body;

    // Validate required fields
    if (!from_name || !from_email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from_email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Get recipient email from environment variable or use default
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'osamamohamedhajaj@gmail.com';

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // You can customize this domain later
      to: [recipientEmail],
      subject: `New Portfolio Contact from ${from_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #8B4513; margin-bottom: 20px; border-bottom: 2px solid #8B4513; padding-bottom: 10px;">
              📧 New Portfolio Contact Message
            </h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #5D4037; margin-bottom: 5px;">From:</h3>
              <p style="margin: 5px 0; font-size: 16px;"><strong>${from_name}</strong></p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #5D4037; margin-bottom: 5px;">Email:</h3>
              <p style="margin: 5px 0; font-size: 16px;">
                <a href="mailto:${from_email}" style="color: #8B4513; text-decoration: none;">${from_email}</a>
              </p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #5D4037; margin-bottom: 5px;">Message:</h3>
              <div style="background-color: #f5f5dc; padding: 15px; border-radius: 8px; border-left: 4px solid #8B4513;">
                <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
              <p style="margin: 0;">Sent from your portfolio website contact form</p>
              <p style="margin: 5px 0 0 0;">⚽ Reply to continue the conversation (and maybe discuss Real Madrid vs Barcelona! 😉)</p>
            </div>
          </div>
        </div>
      `,
      reply_to: from_email, // Allows you to reply directly to the sender
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ error: 'Failed to send email' });
    }

    console.log('Email sent successfully:', data);
    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      id: data.id 
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
