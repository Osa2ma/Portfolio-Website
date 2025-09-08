// build-env.js
// This script runs during the Vercel build process to replace placeholders in env-config.js with actual environment variables

const fs = require('fs');
const path = require('path');

// Path to the env-config.js file
const envConfigPath = path.join(__dirname, 'js', 'env-config.js');

// Read the file
let envConfigContent = fs.readFileSync(envConfigPath, 'utf8');

// Replace placeholders with environment variables
envConfigContent = envConfigContent.replace('{{EMAILJS_SERVICE_ID}}', process.env.EMAILJS_SERVICE_ID || '');
envConfigContent = envConfigContent.replace('{{EMAILJS_TEMPLATE_ID}}', process.env.EMAILJS_TEMPLATE_ID || '');


// Write the updated content back to the file
fs.writeFileSync(envConfigPath, envConfigContent);

console.log('Environment variables injected into env-config.js');

