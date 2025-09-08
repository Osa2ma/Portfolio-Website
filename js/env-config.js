// This script will be used in the Vercel deployment to inject environment variables
// It should be referenced before config.vercel.js

// These values will be replaced by Vercel during build time
window.EMAILJS_SERVICE_ID = '{{EMAILJS_SERVICE_ID}}';
window.EMAILJS_TEMPLATE_ID = '{{EMAILJS_TEMPLATE_ID}}';
window.EMAILJS_PUBLIC_KEY = '{{EMAILJS_PUBLIC_KEY}}';

