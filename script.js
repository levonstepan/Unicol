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

// Close mobile menu when clicking outside of it
document.addEventListener('click', (e) => {
    const isClickInsideMenu = navMenu.contains(e.target);
    const isClickOnMenuButton = mobileMenuBtn.contains(e.target);
    const isMenuActive = navMenu.classList.contains('active');
    
    if (isMenuActive && !isClickInsideMenu && !isClickOnMenuButton) {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
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

// Translations object
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.partnership': 'Partnership',
        'nav.applications': 'Applications',
        'nav.products': 'Products',
        'nav.workshops': 'Workshops',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.badge': 'Since 1977 • Italian Excellence',
        'hero.title': 'The Power of Bonding',
        'hero.description1': 'Roots LLC - Official representative of Unicol industrial adhesives in Armenia.',
        'hero.description2': 'Your trusted partner for high-quality bonding solutions.',
        'hero.description3': '',
        'hero.btnProducts': 'Discover Products',
        'hero.btnContact': 'Contact Us',
        
        // About Section
        'about.title': 'About Unicol and Roots',
        'about.text1': 'Unicol S.r.l. has been producing industrial adhesives in Italy since 1977. We offer a vast range of products capable of satisfying multiple requests from various industrial sectors such as wood processing, panels, construction, textile, and tissue.',
        'about.certified': 'Certified Partnership',
        'about.text2': 'Roots LLC is the official representative of Unicol products in Armenia, providing professional support, technical expertise, and reliable supply of high-quality industrial adhesives for the Armenian market.',
        'about.text3': 'Beyond distribution, Roots, with its "Acobian Furniture" brand is one of Armenia\'s leading furniture manufacturers with decades of experience in precision woodworking, machinery automation, and modern production methods.',
        
        // Certifications
        'certifications.title': 'Our Certifications',
        'certifications.download': 'Download',
        
        // Applications
        'applications.title': 'Applications',
        'applications.pageTitle': 'All Applications',
        'applications.pageSubtitle': 'Complete range of industrial adhesive applications',
        'applications.hardwood': 'Hard woods and assembly',
        'applications.veneer': 'Veneer panels',
        'applications.edgeBanding': 'Edge banding',
        'applications.vacuum': '3D Vacuum press',
        'applications.curved': 'Curved panels',
        'applications.kitchen': 'Kitchen counter tops',
        'applications.auxiliary': 'Auxiliary products',
        'applications.parquet': 'Parquette production and installation',
        'applications.seeMore': 'See More',
        'applications.backHome': 'Back to Home',
        
        // Products
        'products.title': 'Our Products',
        'products.subtitle': 'Find the right adhesive for your needs',
        'products.pageTitle': 'All Products',
        'products.pageSubtitle': 'Complete range of industrial adhesives',
        'products.seeMore': 'See More',
        'products.backHome': 'Back to Home',
        
        // Workshops
        'workshops.title': 'Workshops',
        'workshops.subtitle': 'Professional training and technical support',
        'workshops.text1': 'Roots LLC offers comprehensive workshops and training sessions to help you get the most out of Unicol industrial adhesives. Our expert technicians provide hands-on training covering product selection, application techniques, and best practices for optimal bonding results.',
        'workshops.text2': 'Whether you\'re working with wood processing, panel manufacturing, or specialized applications, our workshops are designed to enhance your technical knowledge and improve your production efficiency.',
        'workshops.feature1.title': 'Hands-On Training',
        'workshops.feature1.desc': 'Practical sessions with real-world applications',
        'workshops.feature2.title': 'Technical Expertise',
        'workshops.feature2.desc': 'Learn from experienced professionals',
        'workshops.feature3.title': 'Best Practices',
        'workshops.feature3.desc': 'Industry-proven techniques and methods',
        'workshops.btnContact': 'Contact Us for Workshops',
        
        // R&D Section
        'rd.title': 'R&D and Innovation',
        'rd.subtitle': 'Innovation Bonds',
        'rd.text1': 'The beating heart of our company is the research and development division that, in our highly specialized internal laboratories, designs, tests, and develops new products and solutions to respond to market and customer requests.',
        'rd.text2': 'For this reason, we establish a direct relationship with our customers and external research institutes, thus creating always innovative and personalized formulas.',
        'rd.text3': 'Our technicians will be able to advise you best at all times, setting up production plants always in step with new technologies and your needs.',
        'rd.btnLearnMore': 'History and Facts',
        
        // Sustainability
        'sustainability.title': 'We Bond with the Environment',
        'sustainability.subtitle': 'Quality Bonding and Environmental Respect',
        'sustainability.text1': 'Unicol is committed to sustainability, not only environmental but also social - developing products that respect the environment while maintaining the highest quality standards. We invest in eco-friendly formulas, reducing solvents wherever possible and developing products with lower VOC emissions to minimize environmental impact.',
        'sustainability.text2': 'Our production processes follow strict European standards, ensuring reduced waste, energy efficiency, and maximum safety for both workers and end users. Sustainability also means innovation: we design adhesives that extend product lifespan, reduce material waste, and support modern circular-economy principles.',
        
        // Contact
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Get in touch with Roots LLC - Unicol Armenia',
        'contact.representative': 'Official Representative of Unicol in Armenia',
        'contact.emailLabel': 'Email',
        'contact.phoneLabel': 'Phone',
        'contact.addressLabel': 'Address',
        'contact.address': '20/1 Ter-Gabrielyan Street, Vagharshapat',
        
        // Footer
        'footer.representative': 'Official representative of Unicol industrial adhesives in Armenia',
        'footer.quickLinks': 'Quick Links',
        'footer.contact': 'Contact',
        'footer.legal': 'Legal',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.legalNotes': 'Legal Notes',
        'footer.copyright': '© 2025 Unicol Armenia - Roots LLC. All rights reserved.',
        'footer.madeWith': 'Made with ❤️ in Armenia'
    },
    hy: {
        // Navigation
        'nav.home': 'Գլխավոր',
        'nav.partnership': 'Մեր մասին',
        'nav.applications': 'Կիրառություններ',
        'nav.products': 'Ապրանքներ',
        'nav.workshops': 'Վարպետաց դասեր',
        'nav.contact': 'Կապ',
        
        // Hero Section
        'hero.badge': '1977-ից • Իտալական Գերազանցություն',
        'hero.title': 'Միացման ուժը',
        'hero.description1': 'Roots LLC - Unicol արդյունաբերական սոսինձների',
        'hero.description2': 'պաշտոնական ներկայացուցիչը Հայաստանում:',
        'hero.description3': 'Ձեր վստահելի գործընկերը բարձրորակ կապակցման լուծումների համար:',
        'hero.btnProducts': 'Բացահայտել մեր արտադրանքը',
        'hero.btnContact': 'Կապ մեզ հետ',
        
        // About Section
        'about.title': 'Unicol-ի և Roots-ի մասին',
        'about.text1': 'Unicol S.r.l.-ը 1977 թվականից ի վեր արտադրում է արդյունաբերական սոսինձներ Իտալիայում: Մենք առաջարկում ենք արտադրանքի լայն տեսականի տարբեր արդյունաբերական սեկտորների համար, ինչպիսիք են փայտամշակումը, վահանակների արտադրությունը, շինարարությունը, տեքստիլի և թղթային արտադրանքների ստացումը:',
        'about.certified': 'Հավաստագրված Գործընկերություն',
        'about.text2': 'Roots-ը իր "Acobian Furniture" ապրանքանիշով Հայաստանի առաջատար կահույքի արտադրողներից մեկն է՝ տասնամյակների փորձառությամբ ճշգրիտ փայտամշակման, մեքենայացման ավտոմատացման և ժամանակակից արտադրական մեթոդների ոլորտում:',
        'about.text3': 'Roots LLC-ն Unicol արտադրանքի պաշտոնական ներկայացուցիչն է Հայաստանում, ապահովելով մասնագիտական աջակցություն, տեխնիկական փորձագիտություն և բարձրորակ արդյունաբերական սոսինձների հուսալի մատակարարում Հայաստանի շուկայի համար:',
        
        // Certifications
        'certifications.title': 'Մեր Հավաստագրերը',
        'certifications.download': 'Ներբեռնել',
        
        // Applications
        'applications.title': 'Կիրառություններ',
        'applications.pageTitle': 'Բոլոր Կիրառությունները',
        'applications.pageSubtitle': 'Արդյունաբերական սոսինձների կիրառությունների ամբողջական տեսականի',
        'applications.hardwood': 'Փայտանյութի սոսնձում և հավաքման պրոցեսներ',
        'applications.veneer': 'Վենիրային վահանակներ',
        'applications.edgeBanding': 'Եզրային երեսպատում',
        'applications.vacuum': '3D Վակուումային մամլիչ',
        'applications.curved': 'Կորացված/շերտավոր վահանակներ',
        'applications.kitchen': 'Խոհանոցի հակառակ հատակներ',
        'applications.auxiliary': 'Օժանդակ արտադրանքներ',
        'applications.parquet': 'Պարկետների արտադրություն և տեղադրում',
        'applications.seeMore': 'Տեսնել ավելին',
        'applications.backHome': 'Վերադառնալ Գլխավոր Էջ',
        
        // Products
        'products.title': 'Մեր Ապրանքները',
        'products.subtitle': 'Գտեք ձեր կարիքներին համապատասխան սոսինձ',
        'products.pageTitle': 'Բոլոր Ապրանքները',
        'products.pageSubtitle': 'Արդյունաբերական սոսինձների ամբողջական տեսականի',
        'products.seeMore': 'Տեսնել ավելին',
        'products.backHome': 'Վերադառնալ Գլխավոր Էջ',
        
        // Workshops
        'workshops.title': 'Վարպետաց դասեր',
        'workshops.subtitle': 'Մասնագիտական վերապատրաստում և տեխնիկական աջակցություն',
        'workshops.text1': 'Roots LLC-ն առաջարկում է վարպետաց դասեր և վերապատրաստումներ՝ օգնելու ձեզ առավելագույնս օգտագործել Unicol արդյունաբերական սոսինձները: Մեր փորձագետ տեխնիկները ձեզ կսովորեցնեն կատարել արտադրանքի ճիշտ ընտրություն, կիրառել լավագույն տեխնիկաներն ու պրակտիկաները՝ կապակցման օպտիմալ արդյունքներ ստանալու համար:',
        'workshops.text2': 'Անկախ նրանից, թե դուք աշխատում եք փայտամշակման, վահանակների արտադրության, թե մասնագիտացված այլ կիրառությունների հետ, մեր վարպետաց դասերը նախագծված են ձեր տեխնիկական գիտելիքները բարելավելու և արտադրական արդյունավետությունը բարձրացնելու համար:',
        'workshops.feature1.title': 'Գործնական Վերապատրաստում',
        'workshops.feature1.desc': 'Գործնական դասեր՝ իրական արտադրական կիրառություններով',
        'workshops.feature2.title': 'Տեխնիկական Փորձագիտություն',
        'workshops.feature2.desc': 'Սովորեք փորձառու մասնագետներից',
        'workshops.feature3.title': 'Լավագույն Պրակտիկաներ',
        'workshops.feature3.desc': 'Արդյունաբերության մեջ ապացուցված տեխնիկաներ և մեթոդներ',
        'workshops.btnContact': 'Ավելին իմանալու համար',
        
        // R&D Section
        'rd.title': 'Հետազոտություն, Մշակում և Նորարարություն',
        'rd.subtitle': 'Նորարարական Կապեր',
        'rd.text1': 'Մեր ընկերության միջուկը հետազոտությունների և զարգացման բաժինն է։ Այնտեղ՝ մեր բարձր մասնագիտացված ներքին լաբորատորիաներում, մշակվում, փորձարկվում և զարգացնում են նոր արտադրանքներ և լուծումներ՝ ըստ շուկայի և հաճախորդների պահանջարկների:',
        'rd.text2': 'Անմիջական հարաբերություններ հաստելով մեր հաճախորդների և արտաքին հետազոտական ինստիտուտների հետ՝ մենք ստեղծում ենք մշտապես նորարարական և անհատականացված բանաձևեր:',
        'rd.btnLearnMore': 'Պատմություն և փաստեր',
        
        // Sustainability
        'sustainability.title': 'Մենք Կապվում ենք Բնությանը',
        'sustainability.subtitle': 'Որակյալ Կապակցում և Բնապահպանական Մոտեցում',
        'sustainability.text1': 'Unicol-ը նվիրված է կայունությանը ոչ միայն սոցիալական, այլև բնապահպանական, տեսանկյունից՝ մշակելով արտադրանքներ, որոնք չեն վնասում բնությանը և պահպանում են բարձրագույն որակի չափանիշները: Մենք ներդնում ենք էկոլոգիապես մաքուր բանաձևեր, նվազեցնելով լուծիչները և զարգացնելով արտադրանքներ՝ ավելի ցածր VOC արտանետումներով:',
        'sustainability.text2': 'Մեր արտադրական գործընթացները կատարվում են ըստ խիստ եվրոպական չափանիշների՝ ապահովելով մինիմալ թափոններ, էներգաարդյունավետություն և առավելագույն անվտանգություն՝ ինչպես աշխատողների, այնպես էլ սպառողների  համար: "Կայունություն" նաև նշանակում է նորարարություն. մենք նախագծում ենք սոսինձներ, որոնք երկարացնում են արտադրանքի կյանքի տևողությունը, նվազեցնում նյութական թափոնները և աջակցում ժամանակակից "շրջանաձև տնտեսության" սկզբունքներին:',
        
        // Contact
        'contact.title': 'Կապ Մեզ Հետ',
        'contact.subtitle': 'Կապ հաստատեք Roots LLC - Unicol Armenia-ի հետ',
        'contact.representative': 'Unicol-ի պաշտոնական ներկայացուցիչը Հայաստանում',
        'contact.emailLabel': 'Էլ. փոստ',
        'contact.phoneLabel': 'Հեռախոս',
        'contact.addressLabel': 'Հասցե',
        'contact.address': 'Վաղարշապատ, Տեր-Գաբրիելյան փողոց 20/1',
        
        // Footer
        'footer.representative': 'Unicol արդյունաբերական սոսինձների պաշտոնական ներկայացուցիչը Հայաստանում',
        'footer.quickLinks': 'Արագ Հղումներ',
        'footer.contact': 'Կապ',
        'footer.legal': 'Իրավական',
        'footer.privacy': 'Գաղտնիության քաղաքականություն',
        'footer.terms': 'Ծառայության պայմաններ',
        'footer.legalNotes': 'Իրավական նշումներ',
        'footer.copyright': '© 2025 Unicol Armenia - Roots LLC. Բոլոր իրավունքները պաշտպանված են:',
        'footer.madeWith': 'Ստեղծված է ❤️-ով Հայաստանում'
    }
};

// Language Switcher
let currentLanguage = 'en'; // Default language is English

const langButtons = document.querySelectorAll('.lang-btn');

// Function to translate the page
function translatePage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Show/hide third hero description based on language
    const heroDesc3 = document.querySelector('.hero-description-3');
    if (heroDesc3) {
        if (lang === 'hy' && translations[lang]['hero.description3']) {
            heroDesc3.style.display = 'block';
        } else {
            heroDesc3.style.display = 'none';
        }
    }
    
    // Hide rd.text3 for Armenian version
    const rdText3 = document.querySelector('[data-i18n="rd.text3"]');
    if (rdText3) {
        if (lang === 'hy') {
            rdText3.style.display = 'none';
        } else {
            rdText3.style.display = 'block';
        }
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update page title and meta description based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const metaDesc = document.querySelector('meta[name="description"]');
    
    if (currentPage === 'applications.html') {
        if (lang === 'hy') {
            document.title = 'Բոլոր Կիրառությունները - Unicol Հայաստան | Roots LLC';
            if (metaDesc) metaDesc.setAttribute('content', 'Unicol արդյունաբերական սոսինձների կիրառությունների ամբողջական տեսականի:');
        } else {
            document.title = 'All Applications - Unicol Armenia | Roots LLC';
            if (metaDesc) metaDesc.setAttribute('content', 'Complete range of industrial adhesive applications available from Unicol.');
        }
    } else if (currentPage === 'products.html') {
        if (lang === 'hy') {
            document.title = 'Բոլոր Ապրանքները - Unicol Հայաստան | Roots LLC';
            if (metaDesc) metaDesc.setAttribute('content', 'Unicol արդյունաբերական սոսինձների ամբողջական տեսականի Հայաստանում:');
        } else {
            document.title = 'All Products - Unicol Armenia | Roots LLC';
            if (metaDesc) metaDesc.setAttribute('content', 'Complete range of Unicol industrial adhesives products available in Armenia.');
        }
    } else {
        // Default to index page
        if (lang === 'hy') {
            document.title = 'Unicol Հայաստան - Արդյունաբերական Սոսինձներ | Roots LLC';
            if (metaDesc) metaDesc.setAttribute('content', 'Unicol արդյունաբերական սոսինձների պաշտոնական ներկայացուցիչ Հայաստանում: Roots LLC - ձեր վստահելի գործընկերը բարձրորակ կապակցման լուծումների համար:');
        } else {
            document.title = 'Unicol Armenia - Industrial Adhesives | Roots LLC';
            if (metaDesc) metaDesc.setAttribute('content', 'Official representative of Unicol industrial adhesives in Armenia. Roots LLC - Your trusted partner for high-quality bonding solutions.');
        }
    }
}

// Language button click handlers
langButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = button.getAttribute('data-lang');
        
        // Remove active class from all buttons
        langButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Translate the page
        translatePage(lang);
        
        // Store language preference
        localStorage.setItem('preferredLanguage', lang);
    });
});

// Load preferred language on page load
document.addEventListener('DOMContentLoaded', () => {
    const preferredLang = localStorage.getItem('preferredLanguage') || 'en'; // Default to English
    
    // Set active button
        langButtons.forEach(button => {
            if (button.getAttribute('data-lang') === preferredLang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    
    // Translate page if not English
    if (preferredLang !== 'en') {
        translatePage(preferredLang);
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
});

