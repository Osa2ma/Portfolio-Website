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

// Navbar scroll behavior and active links
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    
    // Navbar hide/show logic - purely direction-based
    if (currentScrollY > 100) { // Start hiding after scrolling 100px
        if (currentScrollY > lastScrollY) {
            // Scrolling down - hide navbar
            navbar.classList.add('navbar-hidden');
        } else {
            // Scrolling up - show navbar
            navbar.classList.remove('navbar-hidden');
        }
        // Add scrolled class for enhanced background
        navbar.classList.add('navbar-scrolled');
    } else {
        // At top of page - always show navbar and remove scrolled class
        navbar.classList.remove('navbar-hidden', 'navbar-scrolled');
    }
    
    lastScrollY = currentScrollY;

    // Add active class to navigation links based on scroll position
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
        'call-center-analysis': {
            title: 'Call Center Performance Analysis',
            description: 'Comprehensive analysis of call center operations using Tableau to track customer satisfaction, agent performance, and operational efficiency. This dashboard provides insights into service quality metrics and identifies opportunities for improvement in customer service delivery.',
            image: 'projects/Tableau/Call Center/call_center_picCard.png',
            dashboardImage: 'projects/Tableau/Call Center/Call_center1.png',
            technologies: ['Tableau', 'Data Visualization', 'KPI Tracking', 'Performance Analytics'],
            features: [
                'Comprehensive call center dashboard with interactive filters by call center, month, and state',
                'Total call volume tracking with 32,941 calls analyzed across multiple locations',
                'Customer satisfaction (CSAT) score monitoring with average rating of 4.7/5',
                'Call duration analysis showing average call time of 25 minutes',
                'Peak call volume identification with October 2020 showing highest activity (20,978 calls)',
                'Geographic distribution analysis across major US cities including Washington, Houston, NYC',
                'Sentiment analysis breakdown showing customer feedback distribution',
                'Response time performance tracking with 87.3% meeting SLA standards'
            ],
            keyInsights: [
                'Peak call volume occurred in October 2020 with 20,978 calls, indicating seasonal patterns',
                'Washington leads in call volume with 1,110 calls, followed by Houston (657) and NYC (564)',
                'Customer satisfaction maintained at 4.7/5 rating, indicating strong service quality',
                'Billing Questions identified as the primary call reason across all centers',
                'Weekday call patterns show consistent volume with Tuesday/Thursday peaks',
                'Call-Center channel handles majority of interactions (10,639) vs Chatbot (8,256)',
                'Sentiment analysis reveals 11,063 negative vs 3,170 very positive responses',
                'Response time performance shows 87.3% within acceptable SLA with 12.7% exceeding targets'
            ],
            kpis: {
                'Total Calls': '32,941',
                'Avg CSAT Score': '4.7/5',
                'Avg Call Duration': '25 Min',
                'Peak Month': 'October 2020',
                'Top Location': 'Washington (1,110)',
                'SLA Performance': '87.3%',
                'Primary Issue': 'Billing Questions',
                'Response Rate': '12.7% Above SLA'
            },
            recommendations: [
                'Address billing process issues to reduce the high volume of billing-related calls',
                'Implement targeted training for negative sentiment reduction (11,063 negative responses)',
                'Optimize staffing for October peaks and Tuesday/Thursday call volume patterns',
                'Enhance chatbot capabilities to handle more routine inquiries and reduce call center load',
                'Develop proactive communication strategies for high-volume cities like Washington and Houston',
                'Improve response time processes to reduce the 12.7% of calls exceeding SLA',
                'Analyze the 25-minute average call duration for potential efficiency improvements'
            ],
            conclusion: 'The call center analysis of 32,941 calls reveals strong customer satisfaction (4.7/5) but highlights opportunities for improvement in billing processes, sentiment management, and response time optimization to enhance overall operational efficiency.',
            liveDemo: '#',
            github: '#'
        },
        'superstore-analysis': {
            title: 'Superstore Analysis',
            description: 'Comprehensive business intelligence analysis of a retail superstore using Tableau to analyze sales performance, customer segments, and product profitability. This dashboard provides insights into regional performance, seasonal trends, and identifies opportunities for revenue optimization.',
            image: 'projects/Tableau/Superstore/superstore.png',
            dashboardImage: 'projects/Tableau/Superstore/ss.png',
            technologies: ['Tableau', 'Business Intelligence', 'Sales Analytics', 'Data Visualization'],
            features: [
                'Interactive sales performance dashboard with regional breakdown',
                'Customer segmentation analysis across consumer, corporate, and home office segments',
                'Product category and sub-category profitability analysis',
                'Geographic sales distribution with state and city-level insights',
                'Seasonal trends and time-series analysis of sales patterns',
                'Shipping mode analysis and delivery performance metrics',
                'Profit margin analysis with discount impact assessment',
                'Top customers and products identification for strategic focus'
            ],
            keyInsights: [
                'Product Dominance: Revenue overwhelmingly driven by high-value technology hardware. Robots ($2,469,966) and Drones ($1,820,585) are the clear superstars, accounting for vast majority of total sales',
                'Geographic Concentration: Morocco alone drives 57.7% of all sales. North African region (Morocco, Algeria, Egypt) is the primary revenue source',
                'Revenue Volatility: Sales show extreme volatility with sharp peaks (April 2018) followed by significant drops, suggesting sales driven by large irregular events',
                'Informational products like "Blueprints" and "eBooks" are very low-performing categories in terms of revenue',
                'North African region dominates while Middle Eastern markets (Saudi Arabia, Iraq, Kuwait) represent small fraction of sales',
                'Revenue patterns suggest bulk orders or specific projects rather than steady consumer purchases'
            ],
            kpis: {
                'Total Sales': '$6,899,236',
                'Total Orders': '4,976',
                'Total Quantities Sold': '55,271',
                'Total Discounted Amount': '$71,501',
                'Top Product': 'Robots ($2.47M)',
                'Top Market': 'Morocco (57.7%)'
            },
            recommendations: [
                'Investigate the Spikes: Understand what caused major revenue peaks (especially April 2018) - marketing campaign, B2B contract, or new product launch',
                'Double-Down on Core Business: Prioritize marketing, inventory, and R&D for Robots and Drones categories',
                'Nurture Moroccan Market: Protect and understand success factors in Morocco as disruption would be catastrophic',
                'Geographic Diversification: Use Moroccan market insights to develop targeted growth plan for Algeria (12.7%) and Egypt (11.4%)',
                'Product Strategy: Bundle low-performing categories like "Training Videos" or "eBooks" with "Robot Kit" and "Drone Kit" purchases',
                'Revenue Stabilization: Develop strategies to create steady revenue streams rather than relying on irregular large orders'
            ],
            conclusion: 'The Superstore shows strong top-line sales of nearly $6.9 million, but performance is highly dependent on robotics/drone products and the Moroccan market. The key to future stability and growth lies in understanding and replicating the drivers of major sales peaks while strategically expanding into adjacent markets.',
            liveDemo: '#',
            github: '#'
        },
        'adventure-works-analysis': {
            title: 'Adventure Works Analysis',
            description: 'Comprehensive business analytics dashboard for Adventure Works cycling company using Power BI. This analysis covers sales performance, customer demographics, product analysis, and executive-level insights to drive strategic decision making in the cycling industry.',
            image: 'projects/Power BI/AdventureWorks.png',
            dashboardImage: 'projects/Power BI/tab1.png',
            technologies: ['Power BI', 'DAX', 'Data Modeling', 'Executive Reporting'],
            features: [
                'Executive summary dashboard with high-level KPIs and trend analysis',
                'Detailed sales performance tracking across product categories',
                'Customer demographic analysis with geographic and behavioral insights',
                'Product performance analysis including bikes, accessories, and clothing',
                'Interactive filtering capabilities across multiple dimensions',
                'Time-series analysis with monthly, quarterly, and yearly trends',
                'Customer lifetime value and retention metrics',
                'Comprehensive data modeling with optimized DAX calculations'
            ],
            keyInsights: [
                'Average Revenue Per Customer in Sharp Decline: ARPC fell from nearly £3K in early 2020 to well under £1K by 2022',
                'Shift to Low-Value Orders: Order volume dominated by Accessories (34K orders) vs Bikes (14K) and Clothing (9K combined)',
                'Product Mix Challenge: Most-ordered product is "Water Bottle - 30 oz." indicating revenue growth from low-value transactions',
                'Return Problem: "Shorts" are highest-returned subcategory, indicating sizing, quality, or description issues',
                'Target Misses: Key items like "All-Purpose Bike Stand" underperforming monthly targets for Orders, Revenue, and Profit',
                'Defined Customer Base: Primary audience is Professionals (43.6%) and Skilled Manual (32.3%) workers with Average (46%) and Low (40.7%) income'
            ],
            kpis: {
                'Total Revenue': '£24.9 Million',
                'Total Profit': '£10.5 Million',
                'Total Orders': '56,000',
                'Return Rate': '2.17%',
                'Monthly Revenue': '£1.83M (+3.31%)',
                'Monthly Orders': '5.43K (+0.26%)'
            },
            recommendations: [
                'Address ARPC Collapse: Implement bundle offers encouraging customers to add accessories to bike purchases rather than buying separately',
                'Strategic Up-selling: Use "Predicted Profit" tool to identify smart price adjustments or promotions for high-margin items',
                'Fix Shorts Return Problem: Investigate return reasons - sizing, material quality, or misleading photos to improve profit margins',
                'Segmented Marketing: Target Professionals with high-end bikes and performance gear campaigns',
                'Target Skilled Manual segment with durability, reliability, and "Tires and Tubes" focused campaigns',
                'Customer Retention: Create loyalty program for top customers (like Maurice Shan) to increase lifetime value and retention'
            ],
            conclusion: 'AdventureWorks shows strong order volume and revenue growth (£24.9M), but faces a critical challenge with declining average customer value. The strategic priority is reversing the ARPC trend by focusing on bike sales, bundling strategies, and fixing product-specific profit drains like returns.',
            liveDemo: '#',
            github: '#'
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
                } else if (projectId === 'call-center-analysis') {
                    // Show single dashboard with additional image below for Call Center
                    singleDashboard.style.display = 'block';
                    multiDashboard.style.display = 'none';
                    document.getElementById('modalDashboardImage').src = project.dashboardImage || project.image;
                    
                    // Add the second dashboard image below the first one
                    const dashboardContainer = document.querySelector('.dashboard-image-container');
                    let secondImage = dashboardContainer.querySelector('.second-dashboard-image');
                    if (!secondImage) {
                        secondImage = document.createElement('img');
                        secondImage.className = 'second-dashboard-image';
                        secondImage.style.cssText = 'width: 100%; margin-top: 20px; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); cursor: pointer;';
                        dashboardContainer.appendChild(secondImage);
                    }
                    secondImage.src = 'projects/Tableau/Call Center/call_center2.png';
                    secondImage.alt = 'Call Center Dashboard 2';
                } else {
                    // Show single dashboard for other projects
                    singleDashboard.style.display = 'block';
                    multiDashboard.style.display = 'none';
                    document.getElementById('modalDashboardImage').src = project.dashboardImage || project.image;
                    
                    // Remove second image if it exists from previous call center view
                    const dashboardContainer = document.querySelector('.dashboard-image-container');
                    const secondImage = dashboardContainer.querySelector('.second-dashboard-image');
                    if (secondImage) {
                        secondImage.remove();
                    }
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
                // Update key insights and KPIs for Agency Performance, Fashion Retail, and Call Center projects
                } else if ((projectId === 'agency-performance' || projectId === 'fashion-retail-sales' || projectId === 'call-center-analysis' || projectId === 'superstore-analysis' || projectId === 'adventure-works-analysis') && project.keyInsights) {
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
        
        // Hide the main modal temporarily if it's open
        const mainModal = document.getElementById('projectModal');
        if (mainModal.style.display === 'block') {
            mainModal.style.visibility = 'hidden';
        }
        
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Function to close lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        
        // Restore the main modal visibility if it was open
        const mainModal = document.getElementById('projectModal');
        if (mainModal.style.display === 'block') {
            mainModal.style.visibility = 'visible';
            // Keep overflow hidden since main modal is still open
            document.body.style.overflow = 'hidden';
        } else {
            // If main modal wasn't open, restore normal scrolling
            document.body.style.overflow = 'auto';
        }
    }

    // Certification Cards Lightbox Functionality
    const certCards = document.querySelectorAll('.cert-card:not(.no-certificate)');
    certCards.forEach(card => {
        card.addEventListener('click', () => {
            const imageSrc = card.getAttribute('data-cert-image');
            const title = card.getAttribute('data-cert-title');
            openLightbox(imageSrc, title);
        });
    });

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
                const title = document.getElementById('modalProjectTitleHeader').textContent + ' - Performance Overview';
                openLightbox(singleDashboardImg.src, title);
            });
        }

        // Add listener to second dashboard image (for Call Center)
        const secondDashboardImg = document.querySelector('.second-dashboard-image');
        if (secondDashboardImg) {
            secondDashboardImg.style.cursor = 'pointer';
            secondDashboardImg.addEventListener('click', () => {
                const title = document.getElementById('modalProjectTitleHeader').textContent + ' - Call Records & Feedback Details';
                openLightbox(secondDashboardImg.src, title);
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
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-block';
        formStatus.style.display = 'none';

        // Send email using EmailJS
        emailjs.sendForm(
            'service_x5qn7rm',  // Your Service ID
            'template_ywkcqhw', // Your Template ID
            this
        ).then(
            function() {
                console.log('Email successfully sent!');
                showFormStatus('success', '✅ Message sent successfully! I\'ll get back to you soon.');
                contactForm.reset();
                
                // Reset button state
                submitBtn.disabled = false;
                btnText.style.display = 'inline-block';
                btnLoader.style.display = 'none';
            },
            function(error) {
                console.error('EmailJS error:', error);
                showFormStatus('error', '❌ Failed to send message. Please try again or contact me directly at osamamohamedhajaj@gmail.com');
                
                // Reset button state
                submitBtn.disabled = false;
                btnText.style.display = 'inline-block';
                btnLoader.style.display = 'none';
            }
        );
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
