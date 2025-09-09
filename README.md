# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript, featuring smooth animations, dark/light theme toggle, and interactive elements.

## Features

- **Responsive Design**: Mobile-first approach with seamless adaptation to all screen sizes
- **Dark/Light Theme**: Toggle between brown aesthetic (light) and teal/cyan (dark) themes
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Interactive Navigation**: Auto-hide navbar on scroll with smooth transitions
- **Project Showcase**: Modal-based project gallery with detailed information
- **Certificate Display**: Clickable certification cards with lightbox view
- **Contact Form**: EmailJS integration for direct messaging
- **Loading Animation**: Custom loader with brand logo
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Animations**: CSS Transitions, Keyframe Animations
- **Icons**: Font Awesome 6.0
- **Email Service**: EmailJS
- **Deployment**: Vercel 

## Project Structure

```
Portfolio/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Complete styling with responsive design
├── js/
│   └── script.js           # Interactive functionality and animations
├── assets/
│   └── images/
│       ├── profile/        # Profile images and logos
│       ├── projects/       # Project screenshots
│       └── certifications/ # Certificate images
├── projects/               # Project-specific assets
│   ├── creativa/          # Agency performance analysis assets
│   └── Fashion/           # Fashion retail analysis assets
└── vercel.json            # Vercel deployment configuration
```

## ⚙️ Customization Guide

### Theme Customization

The website uses CSS custom properties for easy theme customization. Colors are defined in `:root` for light theme and `body.dark-theme` for dark theme.

### Content Customization

#### Personal Information
Update the following sections in `index.html`:

1. **Meta Tags** (Lines 4-6):
```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your professional description">
<meta name="keywords" content="your, relevant, keywords">
```

2. **Hero Section** (Lines 47-52):
```html
<h1>Welcome to My World</h1>
<p>My name is [Your Name], and I'm a [Your Profession].</p>
```

3. **About Section** (Lines 55-85):
- Replace the Arabic greeting and personal story
- Update the Unique Selling Point section
- Change the profile image path

4. **Contact Information** (Lines 494-505):
```html
<span>your-email@domain.com</span>
<span>+your-phone-number</span>
```

#### Social Links
Update social media links in the contact section (Lines 506-511):
```html
<a href="https://github.com/yourusername" class="social-link" target="_blank">
<a href="https://linkedin.com/in/yourprofile" class="social-link" target="_blank">
<a href="https://freelancer.com/u/yourprofile" class="social-link" target="_blank">
<a href="https://khamsat.com/user/yourprofile" class="social-link" target="_blank">
<a href="https://upwork.com/freelancers/yourprofile" class="social-link" target="_blank">
```

### 🖼️ Image Customization

#### Logo and Profile Images
Replace the following images in `assets/images/profile/`:
- `BrightLogo.png` - Light theme logo
- `DarkLogo.png` - Dark theme logo  
- `profile.png` - Profile picture
- `logopa.png` - Loading screen logo

#### Project Images
Add your project screenshots to:
- `assets/images/projects/` - General project images
- `projects/[project-name]/` - Project-specific assets

#### Certification Images
Add certificate images to `assets/images/certifications/`:
- Use `.jpg` or `.png` format
- Recommended size: 1200x800px for best quality

### Skills & Services Customization

#### Skills Section (Lines 87-196)
Update skill categories and items:
```html
<div class="skill-category">
    <div class="skill-category-header">
        <i class="fas fa-your-icon"></i>
        <h3>Your Skill Category</h3>
    </div>
    <div class="skills-list">
        <div class="skill-item">
            <span class="skill-name">Your Skill</span>
        </div>
    </div>
</div>
```

#### Services Section (Lines 243-290)
Customize service offerings:
```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-your-service-icon"></i>
    </div>
    <h3 class="service-title">Your Service Title</h3>
    <p class="service-description">Your service description</p>
    <ul class="service-features">
        <li>Feature 1</li>
        <li>Feature 2</li>
    </ul>
</div>
```

### Projects Customization

#### Adding New Projects
1. **Update HTML** (Lines 296-364) - Add new project cards
2. **Update JavaScript** (Lines 249-430 in `script.js`) - Add project data:

```javascript
const projectData = {
    'your-project-id': {
        title: 'Your Project Title',
        description: 'Detailed project description...',
        image: 'path/to/project/image.jpg',
        dashboardImage: 'path/to/dashboard/image.jpg',
        features: [
            'Feature 1',
            'Feature 2',
            'Feature 3'
        ],
        keyInsights: [
            'Insight 1',
            'Insight 2'
        ],
        kpis: {
            'Metric 1': 'Value 1',
            'Metric 2': 'Value 2'
        },
        conclusion: 'Project conclusion...',
        liveDemo: 'https://your-demo-link.com',
        github: 'https://github.com/your-repo'
    }
};
```

### 🎓 Education & Experience Customization

#### Education Section (Lines 198-217)
```html
<div class="education-item">
    <div class="education-year">Year Range</div>
    <div class="education-content">
        <div class="education-header">
            <h3>Your Degree</h3>
            <div class="education-institution">
                <img src="path/to/institution/logo.png" alt="Institution Logo">
                <span>Institution Name</span>
            </div>
        </div>
        <p class="education-description">Location</p>
    </div>
</div>
```

#### Experience Section (Lines 423-450)
Update work experience and achievements following the same pattern.

### 🏆 Certifications Customization

#### Adding Certificates (Lines 452-480)
```html
<div class="cert-card" data-cert-image="path/to/certificate.jpg" data-cert-title="Certificate Title">
    <div class="cert-icon">
        <i class="fas fa-your-icon"></i>
        <!-- OR use an image logo -->
        <img src="path/to/logo.png" alt="Certification Logo" class="cert-logo">
    </div>
    <h3><strong>Certificate Name</strong></h3>
    <p>Issuing Organization</p>
    <span class="cert-date">Year</span>
</div>
```

### 📧 Email Configuration

#### EmailJS Setup
1. Create an account at [EmailJS](https://emailjs.com)
2. Update the configuration in `index.html` (Line 20):
```javascript
emailjs.init("YOUR_PUBLIC_KEY");
```
3. Update service and template IDs in `script.js` (Lines 705-706):
```javascript
'your_service_id',  // Your Service ID
'your_template_id', // Your Template ID
```

### 🎯 Navbar Customization

#### Navigation Links (Lines 32-42)
Update navigation menu items:
```html
<div class="nav-menu" id="nav-menu">
    <a href="#section1" class="nav-link">Section 1</a>
    <a href="#section2" class="nav-link">Section 2</a>
    <!-- Add more navigation links -->
</div>
```

#### Navbar Behavior
The navbar auto-hides when scrolling down and appears when scrolling up. To modify this behavior, edit the scroll event listener in `script.js` (Lines 35-71).

### 🎨 Animation Customization

#### Scroll Animations
Elements with these classes will animate on scroll:
- `.project-card`
- `.timeline-item` 
- `.cert-card`
- `.interest-item`

To add animations to other elements, add them to the observer in `script.js` (Lines 78-86).

#### Loading Animation
Customize the loading screen in `script.js` (Lines 155-223):
- Change colors in the gradient
- Update the logo image path
- Modify animation duration

### 📱 Responsive Design

The website uses CSS Grid and Flexbox for responsive layouts. Breakpoints are defined at:
- **Mobile**: `max-width: 480px`
- **Tablet**: `max-width: 768px` 
- **Desktop**: `min-width: 769px`

To customize breakpoints, update the media queries in `styles.css`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to use it as a template for your own portofolio website.

---

**Need help with customization?** Feel free to reach out or create an issue in the repository.
