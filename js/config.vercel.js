// EmailJS Configuration - Environment Variable Version
// Read values from window.* which are set by env-config.js (generated at build time)
window.CONFIG = window.CONFIG || {
    emailjs: {
        serviceID: (window.EMAILJS_SERVICE_ID !== undefined && window.EMAILJS_SERVICE_ID !== '{{EMAILJS_SERVICE_ID}}') ? window.EMAILJS_SERVICE_ID : '',
        templateID: (window.EMAILJS_TEMPLATE_ID !== undefined && window.EMAILJS_TEMPLATE_ID !== '{{EMAILJS_TEMPLATE_ID}}') ? window.EMAILJS_TEMPLATE_ID : '',
        publicKey: (window.EMAILJS_PUBLIC_KEY !== undefined && window.EMAILJS_PUBLIC_KEY !== '{{EMAILJS_PUBLIC_KEY}}') ? window.EMAILJS_PUBLIC_KEY : ''
    }
};
