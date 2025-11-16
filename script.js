// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.product-card, .application-card, .certification-card, .about-highlight');
    animateElements.forEach(el => observer.observe(el));
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        console.log('Form submitted:', data);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.style.cssText = `
            background: #10b981;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            text-align: center;
            font-weight: 500;
        `;
        successMessage.textContent = 'Thank you! Your message has been sent. We will get back to you soon.';
        
        contactForm.appendChild(successMessage);
        contactForm.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}

// Language Switcher (prepared for future Armenian implementation)
const langButtons = document.querySelectorAll('.lang-btn');

langButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = button.getAttribute('data-lang');
        
        // Remove active class from all buttons
        langButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Store language preference
        localStorage.setItem('preferredLanguage', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // For now, just log the language change
        // In the future, this will load the Armenian version
        if (lang === 'hy') {
            console.log('Armenian version coming soon!');
            // TODO: Implement language switching
        }
    });
});

// Load preferred language on page load
document.addEventListener('DOMContentLoaded', () => {
    const preferredLang = localStorage.getItem('preferredLanguage');
    if (preferredLang) {
        langButtons.forEach(button => {
            if (button.getAttribute('data-lang') === preferredLang) {
                button.classList.add('active');
                document.documentElement.lang = preferredLang;
            } else {
                button.classList.remove('active');
            }
        });
    }
});

// Product card hover effects
const productCards = document.querySelectorAll('.product-card, .application-card, .certification-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Scroll to top functionality (optional - can be added if needed)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button if needed
// This can be uncommented and styled if you want a scroll-to-top button
/*
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--highlight-color);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    box-shadow: var(--shadow-lg);
    z-index: 999;
    display: none;
    transition: var(--transition);
`;
scrollTopBtn.addEventListener('click', scrollToTop);
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});
*/

// Form validation enhancement
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = '#ef4444';
        } else {
            this.style.borderColor = '';
        }
    });
    
    input.addEventListener('input', function() {
        if (this.style.borderColor === 'rgb(239, 68, 68)') {
            this.style.borderColor = '';
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active nav link
    highlightNavLink();
    
    // Add loading animation removal
    document.body.classList.add('loaded');
    
    // Initialize Products section dynamic background after libraries load
    if (typeof jQuery !== 'undefined') {
        jQuery(document).ready(function() {
            // Wait a bit for all libraries to be fully loaded
            setTimeout(function() {
                initProductsBackground();
            }, 100);
        });
    } else {
        // Fallback: try again after window loads
        window.addEventListener('load', function() {
            setTimeout(function() {
                initProductsBackground();
            }, 500);
        });
    }
});

// Products Section Dynamic Background with Trianglify
function initProductsBackground() {
    // Check if jQuery and Trianglify are available
    if (typeof jQuery === 'undefined' || typeof Trianglify === 'undefined' || typeof Velocity === 'undefined') {
        console.warn('jQuery, Trianglify, or Velocity.js not loaded. Dynamic background disabled.');
        console.log('jQuery:', typeof jQuery, 'Trianglify:', typeof Trianglify, 'Velocity:', typeof Velocity);
        return;
    }

    var $ = jQuery;
    var productsSection = $('#products');
    var container = $('#products-background-container');
    var bg1 = $('#products-background-1');
    var bg2 = $('#products-background-2');

    if (container.length === 0 || productsSection.length === 0) {
        console.warn('Products section or background container not found.');
        return;
    }

    console.log('Initializing Products background...');

    // Set container and backgrounds to section height
    function setDimensions() {
        var sectionHeight = productsSection.outerHeight();
        var sectionWidth = productsSection.outerWidth();
        
        container.css({
            'min-width': sectionWidth,
            'min-height': sectionHeight
        });
        
        bg1.css({
            'min-width': sectionWidth,
            'min-height': sectionHeight
        });
        
        bg2.css({
            'min-width': sectionWidth,
            'min-height': sectionHeight
        });
    }

    // Global svg object
    var svg = {};
    var draw = 1;

    // Create new svg
    var svgNew = function() {
        svg.t = new Trianglify({
            noiseIntensity: 0,
        });
        svg.width = productsSection.outerWidth();
        svg.height = productsSection.outerHeight();
        svg.pattern = svg.t.generate(svg.width, svg.height);

        if (draw === 1) {
            svgDraw1();
        } else {
            svgDraw2();
        }
    };

    // Draw svg on bg1
    var svgDraw1 = function(resize) {
        draw = 2;
        if (resize === 'resize') {
            svg.pattern = svg.t.generate(svg.width, svg.height);
            bg1.css({
                'min-width': svg.width,
                'min-height': svg.height,
                'background': svg.pattern.dataUrl
            });
        } else {
            bg1.css({
                'background': svg.pattern.dataUrl
            });
            fade1();
        }
    };

    // Draw svg on bg2
    var svgDraw2 = function(resize) {
        draw = 1;
        if (resize === 'resize') {
            svg.pattern = svg.t.generate(svg.width, svg.height);
            bg2.css({
                'min-width': svg.width,
                'min-height': svg.height,
                'background': svg.pattern.dataUrl
            });
        } else {
            bg2.css({
                'background': svg.pattern.dataUrl
            });
            fade2();
        }
    };

    // Fade animations
    var fade1 = function() {
        bg1.velocity("fadeIn", { duration: 3000 });
        bg2.velocity("fadeOut", { duration: 4000 });
    };

    var fade2 = function() {
        bg2.velocity("fadeIn", { duration: 3000 });
        bg1.velocity("fadeOut", { duration: 4000 });
    };

    // Initialize dimensions and start animation
    setDimensions();
    
    // Wait a moment for dimensions to be set, then start
    setTimeout(function() {
        svgNew();
        
        // Recreate svg every 5 seconds
        window.setInterval(svgNew, 5000);
    }, 200);

    // Handle window resize
    $(window).resize(function() {
        svg.width = productsSection.outerWidth();
        svg.height = productsSection.outerHeight();
        container.css({
            'min-width': svg.width,
            'min-height': svg.height
        });
        svgDraw1('resize');
        svgDraw2('resize');
    });
}

