// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight - 20; // 20px extra spacing
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.project-card, .timeline-item, .cert-card, .interest-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
});

// Legacy contact form handler removed to avoid conflicts with EmailJS handler below

// Add typing effect to hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
});

// Scroll effect for better performance
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    // Removed parallax effect to prevent layout issues
});

// Theme switcher (optional feature)
function createThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌙';
    themeToggle.style.cssText = `
        position: fixed;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1001;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
    `;
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeToggle.innerHTML = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });
    
    document.body.appendChild(themeToggle);
}

// Initialize theme toggle
document.addEventListener('DOMContentLoaded', createThemeToggle);

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #CD853F 100%);
        background-size: 400% 400%;
        animation: gradientShift 3s ease-in-out infinite;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    loader.innerHTML = `
        <div style="text-align: center; color: white; position: relative;">
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 200px; height: 200px; border: 2px solid rgba(255,255,255,0.1); border-radius: 50%; animation: pulse 2s ease-in-out infinite;"></div>
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 150px; height: 150px; border: 1px solid rgba(255,255,255,0.05); border-radius: 50%; animation: pulse 2s ease-in-out infinite 0.5s;"></div>
            <img src="assets/images/profile/logopa.png" alt="Loading Logo" style="width: 120px; height: auto; animation: bounce 1.5s ease-in-out infinite; margin: 0 auto; display: block; position: relative; z-index: 10; filter: drop-shadow(0 0 20px rgba(255,255,255,0.3));">
        </div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-30px);
            }
            60% {
                transform: translateY(-15px);
            }
        }
        @keyframes gradientShift {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
        @keyframes pulse {
            0%, 100% {
                opacity: 0.3;
                transform: translate(-50%, -50%) scale(1);
            }
            50% {
                opacity: 0.8;
                transform: translate(-50%, -50%) scale(1.1);
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1500);
});

// Project Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectModal');
    const viewBtns = document.querySelectorAll('.view-btn');
    const closeBtn = document.querySelector('.close-btn');

    // Project data
    const projectData = {
        'titanic-dashboard': {
            title: 'Titanic Survival Analysis',
            description: 'Inspired by the iconic line from the Titanic movie — "Step back, sir! Women and children only!" Our goal was to investigate whether survival on the Titanic was truly based on humanity and selflessness, or if other factors like social class, age, and gender played a bigger role.',
            image: 'assets/images/projects/sinking2.jpg',
            dashboardImage: 'assets/images/projects/dashboard-preview.png',
            features: [
                'Cabin column dropped due to a high percentage of missing values',
                'Missing Age values were filled based on passengers\' honorifics (Mr, Mrs, Miss) using the average age of each group',
                'Age groups were created: Children (1–12), Teenagers (13–18), Adults (19–59), Elderly (60+)',
                'Comprehensive data analysis done entirely in Microsoft Excel',
                'Statistical analysis of survival patterns across different demographics',
                'Interactive dashboard with multiple visualizations and insights'
            ],
            keyFindings: {
                stats: [
                    'Total passengers analyzed: 1000',
                    'Survivors: 492',
                    'Women aboard: 394',
                    'Children aboard: 164'
                ],
                survivalRates: [
                    'Female survival rate: ~58.6%',
                    'Male survival rate: ~43.1%'
                ],
                observations: [
                    'Women in 1st and 2nd class had the highest survival chances',
                    'Men who survived were mostly from 2nd class',
                    'Children had a decent survival rate, but not as high as Hollywood suggests',
                    'Class had a major impact on survival outcomes'
                ]
            },
            conclusion: 'While gender did influence survival, class was a stronger predictor. The popular narrative of "women and children first" holds some truth — but the full story is much more complex.',
            liveDemo: '#',
            github: 'https://github.com/Osa2ma/Titanic-Dashboard/tree/main'
        },
        'agency-performance': {
            title: 'Agency Performance Analysis',
            description: 'Analysis of sales data across Egyptian governorates to find why some regions like Alexandria and Cairo sell more than others and how to make the business run better. Uses charts and numbers to spot opportunities for growth in underperforming areas like Sainai and Upper Egypt.',
            image: 'projects/creativa/Home Tab.png',
            dashboardImage: 'projects/creativa/Sales Tab.png',
            technologies: ['Excel', 'Power BI', 'Data Analysis', 'KPI Tracking'],
            features: [
                'Comprehensive sales performance tracking across Egyptian regions',
                'Financial KPI analysis: £7.92M gross sales, £6.172M net sales',
                'Regional performance analysis covering Alex, Cairo, Canal, Delta, Giza, Sainai, Upper',
                'Product category breakdown: Components (£4.8M), Clothing (£729K), Accessories (£400K)',
                'Sales team performance tracking with individual transaction volumes',
                'Return rate analysis (33% return rate) and quality improvement recommendations',
                'Temporal trend analysis showing seasonal patterns and monthly performance',
                'Interactive dashboard with multi-dimensional filtering capabilities'
            ],
            keyInsights: [
                'Alexandria and Cairo dominate sales performance',
                'Components category generates highest revenue (£4.8M)',
                'High return rate (33%) indicates quality control opportunities',
                'January shows peak seasonal performance',
                'Road bikes outsell mountain bikes significantly',
                'Business segment drives primary revenue'
            ],
            kpis: {
                'Gross Sales': '£7.92M',
                'Net Sales': '£6.172M',
                'Total Orders': '137,662',
                'Return Rate': '33%',
                'Top Region': 'Alexandria',
                'Best Month': 'January'
            },
            recommendations: [
                'Implement quality control measures to reduce 33% return rate',
                'Invest in marketing for underperforming regions (Sainai, Upper Egypt)',
                'Analyze mountain bike underperformance and adjust strategy',
                'Leverage top sales performer strategies across team',
                'Develop customer feedback systems to improve satisfaction'
            ],
            conclusion: 'The analysis reveals strong overall performance with £7.92M in gross sales, but highlights critical areas for improvement including quality control and regional expansion opportunities.',
            liveDemo: '#',
            github: '#'
        },
        'fashion-retail-sales': {
            title: 'Fashion Retail Sales Analysis',
            description: 'Comprehensive fashion retail business analysis covering £1.337M in sales across 2019-2020, demonstrating exceptional 200% growth and 67.8% profit margin during challenging market conditions.',
            image: 'projects/Fashion/How a B2B Ecommerce Platform Can Transform Your Business Operations.jpg',
            dashboardImage: 'projects/Fashion/Screenshot 2025-08-18 160419.png',
            technologies: ['Excel', 'Power BI', 'Financial Analysis', 'Retail Analytics'],
            features: [
                'Financial performance tracking across 2019-2020 period',
                'Product category analysis covering 10+ fashion categories',
                'Exceptional 200% year-over-year growth analysis',
                'Profit margin optimization achieving 67.8% profitability',
                'Seasonal trend analysis with peak summer performance',
                'Discount strategy analysis across product categories',
                'Monthly profit pattern identification and forecasting',
                'Product portfolio diversification assessment'
            ],
            keyInsights: [
                '200% growth from 2019 to 2020 despite market challenges',
                'Exceptional 67.8% profit margin indicates premium positioning',
                'Fragrances dominate volume sales, Apparel leads profit generation',
                'Summer months (July-August) show consistent peak performance',
                '£363.60 average order value suggests premium customer base',
                'Balanced product portfolio across 10+ categories reduces risk'
            ],
            kpis: {
                'Total Sales': '£1.337M',
                'Total Profit': '£907.2K',
                'Profit Margin': '67.8%',
                'Total Orders': '3,678',
                'Average Order Value': '£363.60',
                'Growth Rate': '200%'
            },
            recommendations: [
                'Leverage 2020 digital transformation success for further expansion',
                'Optimize summer inventory management for peak season performance',
                'Explore geographic expansion to replicate successful model',
                'Enhance premium brand positioning to maintain high margins',
                'Develop customer retention programs for high-value customer base',
                'Consider expanding successful product categories'
            ],
            conclusion: 'The fashion retail business demonstrates exceptional resilience and growth with a 200% increase in 2020, achieving industry-leading profit margins through premium positioning and operational excellence.',
            liveDemo: '#',
            github: '#'
        },
        'customer-segmentation': {
            title: 'Customer Segmentation Analysis',
            description: 'Machine learning-powered customer segmentation using clustering algorithms to identify distinct customer groups and behaviors. This analysis helps businesses understand their customer base and develop targeted marketing strategies.',
            image: 'assets/images/projects/chatgpt-image.png',
            technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly'],
            features: [
                'K-means and hierarchical clustering implementation',
                'Customer lifetime value prediction',
                'Behavioral pattern analysis',
                'Automated segment profiling',
                'Interactive cluster visualization',
                'Business recommendations generation'
            ],
            liveDemo: '#',
            github: '#'
        },
        'market-research': {
            title: 'Market Research Analytics',
            description: 'Comprehensive market research analysis using R and advanced statistical methods. This project provides insights into market trends, competitor analysis, and consumer behavior patterns.',
            image: 'assets/images/projects/chatgpt-image.png',
            technologies: ['R', 'Tableau', 'SQL', 'ggplot2', 'dplyr', 'shiny'],
            features: [
                'Statistical hypothesis testing',
                'Market trend analysis and forecasting',
                'Competitor benchmarking dashboard',
                'Consumer survey data analysis',
                'Interactive market intelligence reports',
                'Automated insights generation'
            ],
            liveDemo: '#',
            github: '#'
        },
        'predictive-analytics': {
            title: 'Predictive Analytics Model',
            description: 'Advanced machine learning model for predicting customer churn using TensorFlow and deep learning techniques. The model includes feature engineering, model optimization, and deployment strategies.',
            image: 'assets/images/projects/chatgpt-image.png',
            technologies: ['TensorFlow', 'Python', 'Keras', 'Pandas', 'Scikit-Learn', 'Docker'],
            features: [
                'Deep neural network architecture',
                'Advanced feature engineering pipeline',
                'Model performance optimization',
                'Real-time prediction API',
                'Model monitoring and drift detection',
                'Containerized deployment solution'
            ],
            liveDemo: '#',
            github: '#'
        },
        'nlp-sentiment': {
            title: 'NLP Sentiment Analysis',
            description: 'Natural language processing model for sentiment analysis using PyTorch and transformer architectures. This project processes text data to determine sentiment polarity and emotional context.',
            image: 'assets/images/projects/chatgpt-image.png',
            technologies: ['PyTorch', 'HuggingFace', 'NLTK', 'Transformers', 'spaCy', 'FastAPI'],
            features: [
                'BERT-based transformer implementation',
                'Multi-language sentiment detection',
                'Real-time text processing API',
                'Custom model fine-tuning',
                'Batch processing capabilities',
                'Web interface for interactive analysis'
            ],
            liveDemo: '#',
            github: '#'
        }
    };

    // Open modal when view button is clicked
    viewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project');
            const project = projectData[projectId];
            
            if (project) {
                // Update modal content
                document.getElementById('modalProjectTitleHeader').textContent = project.title;
                document.getElementById('modalProjectDescription').textContent = project.description;
                
                // Handle dashboard display based on project type
                const singleDashboard = document.querySelector('.dashboard-image-container');
                const multiDashboard = document.getElementById('multiDashboardGrid');
                
                if (projectId === 'agency-performance') {
                    // Show multi-dashboard grid for Agency Performance
                    singleDashboard.style.display = 'none';
                    multiDashboard.style.display = 'grid';
                } else {
                    // Show single dashboard for other projects
                    singleDashboard.style.display = 'block';
                    multiDashboard.style.display = 'none';
                    document.getElementById('modalDashboardImage').src = project.dashboardImage || project.image;
                }
                
                // Update features
                const featuresContainer = document.getElementById('modalProjectFeatures');
                featuresContainer.innerHTML = '';
                project.features.forEach(feature => {
                    const listItem = document.createElement('li');
                    listItem.textContent = feature;
                    featuresContainer.appendChild(listItem);
                });

                // Update key findings for Titanic project
                if (projectId === 'titanic-dashboard' && project.keyFindings) {
                    const findingsContainer = document.getElementById('modalKeyFindings');
                    findingsContainer.innerHTML = `
                        <div class="stats-section">
                            <h4>Project Statistics:</h4>
                            <ul>
                                ${project.keyFindings.stats.map(stat => `<li><strong>${stat}</strong></li>`).join('')}
                            </ul>
                        </div>
                        <div class="survival-rates">
                            <h4>Survival Rates by Gender:</h4>
                            <ul>
                                ${project.keyFindings.survivalRates.map(rate => `<li>${rate}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="observations">
                            <h4>Other Observations:</h4>
                            <ul>
                                ${project.keyFindings.observations.map(obs => `<li>${obs}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                // Update key insights and KPIs for Agency Performance and Fashion Retail projects
                } else if ((projectId === 'agency-performance' || projectId === 'fashion-retail-sales') && project.keyInsights) {
                    const findingsContainer = document.getElementById('modalKeyFindings');
                    findingsContainer.innerHTML = `
                        <div class="kpis-section">
                            <h4>Key Performance Indicators:</h4>
                            <div class="kpi-grid">
                                ${Object.entries(project.kpis).map(([key, value]) => `
                                    <div class="kpi-item">
                                        <span class="kpi-label">${key}:</span>
                                        <span class="kpi-value">${value}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="insights-section">
                            <h4>Key Insights:</h4>
                            <ul>
                                ${project.keyInsights.map(insight => `<li>${insight}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="recommendations-section">
                            <h4>Strategic Recommendations:</h4>
                            <ul>
                                ${project.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                } else {
                    document.getElementById('modalKeyFindings').innerHTML = '';
                }

                // Update conclusion
                const conclusionElement = document.getElementById('modalConclusion');
                if (project.conclusion) {
                    conclusionElement.textContent = project.conclusion;
                } else {
                    conclusionElement.parentElement.style.display = 'none';
                }
                
                // Show modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal when close button is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Image Lightbox Functionality
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxClose = document.querySelector('.lightbox-close');

    // Function to open lightbox
    function openLightbox(imageSrc, title) {
        lightboxImage.src = imageSrc;
        lightboxTitle.textContent = title;
        
        // Hide the main modal temporarily
        const mainModal = document.getElementById('projectModal');
        mainModal.style.visibility = 'hidden';
        
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Function to close lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        
        // Restore the main modal visibility
        const mainModal = document.getElementById('projectModal');
        mainModal.style.visibility = 'visible';
        
        // Keep overflow hidden since main modal is still open
        document.body.style.overflow = 'hidden';
    }

    // Add click event listeners to dashboard images
    function addLightboxListeners() {
        const dashboardImages = document.querySelectorAll('.dashboard-img');
        dashboardImages.forEach(img => {
            img.addEventListener('click', () => {
                const title = img.parentElement.querySelector('h4').textContent;
                openLightbox(img.src, title);
            });
        });

        // Also add listener to single dashboard image
        const singleDashboardImg = document.getElementById('modalDashboardImage');
        if (singleDashboardImg) {
            singleDashboardImg.style.cursor = 'pointer';
            singleDashboardImg.addEventListener('click', () => {
                const title = document.getElementById('modalProjectTitleHeader').textContent + ' - Dashboard';
                openLightbox(singleDashboardImg.src, title);
            });
        }
    }

    // Close lightbox when close button is clicked
    lightboxClose.addEventListener('click', closeLightbox);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            closeLightbox();
        }
    });

    // Initialize lightbox listeners
    addLightboxListeners();

    // Re-add lightbox listeners when modal content changes
    const originalShowModal = modal.style.display;
    const observer = new MutationObserver(() => {
        if (modal.style.display === 'block') {
            setTimeout(addLightboxListeners, 100); // Small delay to ensure DOM is updated
        }
    });
    
    observer.observe(modal, { 
        attributes: true, 
        attributeFilter: ['style'],
        childList: true,
        subtree: true 
    });
});

// EmailJS Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');
    const btnText = document.querySelector('.btn-text');
    const btnLoader = document.querySelector('.btn-loader');
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-block';
        formStatus.style.display = 'none';
        
        // Prepare template parameters
        const templateParams = {
            from_name: contactForm.querySelector('input[name="from_name"]').value,
            from_email: contactForm.querySelector('input[name="from_email"]').value,
            message: contactForm.querySelector('textarea[name="message"]').value,
            to_name: "Osama Alashkar",
            reply_to: contactForm.querySelector('input[name="from_email"]').value
        };

        // Debug logs to help trace missing config
        console.log('EmailJS CONFIG (window.CONFIG):', window.CONFIG);
        console.log('EmailJS globals:', {
            SERVICE: window.EMAILJS_SERVICE_ID,
            TEMPLATE: window.EMAILJS_TEMPLATE_ID,
            PUBLIC: window.EMAILJS_PUBLIC_KEY
        });

        // Determine IDs and public key with fallbacks
        const serviceID = (window.CONFIG && window.CONFIG.emailjs && window.CONFIG.emailjs.serviceID) ? window.CONFIG.emailjs.serviceID : (window.EMAILJS_SERVICE_ID || '');
        const templateID = (window.CONFIG && window.CONFIG.emailjs && window.CONFIG.emailjs.templateID) ? window.CONFIG.emailjs.templateID : (window.EMAILJS_TEMPLATE_ID || '');
        const publicKey = (window.CONFIG && window.CONFIG.emailjs && window.CONFIG.emailjs.publicKey) ? window.CONFIG.emailjs.publicKey : (window.EMAILJS_PUBLIC_KEY || '');

        // Validate public key before attempting to send
        if (!publicKey) {
            console.error('EmailJS public key is missing.');
            showFormStatus('error', '❌ Email service is not configured. Please contact me directly at osamamohamedhajaj@gmail.com');
            submitBtn.disabled = false;
            btnText.style.display = 'inline-block';
            btnLoader.style.display = 'none';
            return;
        }

        // Ensure emailjs is initialized with the public key
        try {
            if (!window.emailjs || typeof emailjs.init !== 'function') {
                console.warn('EmailJS SDK not loaded or init not available');
            } else {
                emailjs.init(publicKey);
                console.log('EmailJS initialized at submit time with public key');
            }
        } catch (initErr) {
            console.warn('emailjs.init error:', initErr);
        }

        try {
            // Send email using EmailJS with configuration (with fallbacks)
            const result = await emailjs.send(
                serviceID,
                templateID,
                templateParams
            );
            console.log('Email successfully sent!', result);

            // Show success message
            showFormStatus('success', '✅ Message sent successfully! I\'ll get back to you soon.');
            contactForm.reset();

        } catch (error) {
            console.error('Email error:', error);
            // Extract readable message if available
            const errMsg = (error && (error.text || error.message || error.status)) ? (error.text || error.message || error.status) : 'unknown error';
            showFormStatus('error', `❌ Failed to send message (${errMsg}). Please try again or contact me directly at osamamohamedhajaj@gmail.com`);
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'inline-block';
            btnLoader.style.display = 'none';
        }
    });
    
    function showFormStatus(type, message) {
        formStatus.className = `form-status ${type}`;
        formStatus.textContent = message;
        formStatus.style.display = 'block';
        
        // Hide status after 10 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 10000);
    }
});
