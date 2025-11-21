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
        'products.nunivil1000': '<strong>FOR LAMINATION</strong><br>Vinyl dispersion D3, used for the hot and cold lamination of wood-based products with paper. It is suitable for Class D4 bonding, used with a hardener.<br><br><strong>Packaging:</strong> 25 kg bucket, 1000 kg tank<br><br>• Class D3<br>• Resistant to water, solvents and temperature<br>• Medium-high viscosity',
        'products.unibord694': '<strong>FOR SOFT-FORMING</strong><br>EVA hot melt adhesive for soft-forming is used for gluing solid wood and plastic laminate edges with automatic edge banding machines.<br><br><strong>Packaging:</strong> 25 kg bag<br><br>• Natural<br>• For soft-forming',
        'products.resina401': '<strong>UREA-BASED GLUE</strong><br>Urea-based glue in powder form, self-hardening, with high yield, excellent solubility, high specific adhesion and low exudation. For the production of Class E1 panels.<br><br><strong>Packaging:</strong> 25 kg bag<br><br>• For class E1 articles<br>• Self-hardening<br>• High yield<br>• Low exudation<br>• For hot and high-frequency presses',
        'products.nunipur7031': '<strong>SINGLE COMPONENT</strong><br>Water-based single-component polyurethane glue for gluing PVC sheets with membrane press (3D).<br><br>• Single-component<br>• For PVC<br>• For 3D membrane press',
        'products.nunivil165': '<strong>TRANSPARENT</strong><br>Vinyl dispersion, with very fast setting; when assembling furniture, it allows you to remove the clamp after just a short time.<br><br><strong>Packaging:</strong> 25 kg bucket, 1000 kg tank<br><br>• Transparent<br>• Ultra-fast setting',
        'products.unipren1070': '<strong>CONTACT ADHESIVE</strong><br>Contact adhesive for spatula application.<br><br><strong>Packaging:</strong> box of 12 tins x 1.75 kg, 24 tins x 0.85 kg',
        'products.nunivil25': '<strong>FOR HARD WOODS</strong><br>Vinyl dispersion specifically for bonding hard and resinous woods. It is popular due to its fast bonding and transparent glue line. Tested by the CATAS laboratory for the production of chairs (CREEP TEST).<br><br><strong>Packaging:</strong> 25 kg bucket, 1000 kg tank<br><br>• For hard woods<br>• High penetration in wood<br>• Transparent<br>• For the production of chairs and tables',
        'products.unibord607m': '<strong>SEMI-TRANSPARENT</strong><br>EVA-based hot melt adhesive, featuring excellent specific adhesion, allows you to obtain a virtually seamless glue line. The melting speed, low viscosity and open time make this product extremely versatile.<br><br><strong>Packaging:</strong> 25 kg bag<br><br>• Semi-transparent<br>• Excellent adhesion<br>• High yield',
        'products.unibord625': '<strong>TRANSPARENT</strong><br>EVA transparent hot melt glue for automatic edge banding machines, with high yield, good resistance to water and solvents. Used to glue edges in solid wood, polyester, melamine and plastic laminate, treated with PVC and ABS. Suitable for soft-forming and for BAZ machining centres.<br><br><strong>Packaging:</strong> 20 kg bag<br><br>• Transparent<br>• For soft-forming and BAZ as well',
        
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
        'footer.madeWith': 'Made with ❤️ in Armenia',
        
        // Privacy Policy
        'privacy.title': 'Privacy Policy',
        'privacy.subtitle': 'How we handle your information',
        'privacy.lastUpdated': 'Last Updated:',
        'privacy.commitment': 'Our Commitment to Privacy',
        'privacy.commitmentText': 'At Unicol Armenia (Roots LLC), we respect your privacy. This website does not collect, store, or process any personal data from visitors.',
        'privacy.dataCollection': 'Data Collection',
        'privacy.dataCollectionText': 'We do not use cookies for tracking purposes, and we do not share any information with third parties. Any information you voluntarily provide through contact forms or email communications is used solely for the purpose of responding to your inquiries.',
        'privacy.contactInfo': 'Contact Information',
        'privacy.contactInfoText': 'If you have any questions about this privacy policy, please contact us at:',
        'privacy.contactEmail': 'Email: info@roots.am',
        'privacy.contactPhone': 'Phone: +374 91 665520',
        'privacy.contactAddress': 'Address: 20/1 Ter-Gabrielyan Street, Vagharshapat, Armenia',
        'privacy.backHome': '← Back to Home',
        
        // Terms of Service
        'terms.title': 'Terms of Service',
        'terms.subtitle': 'Terms and conditions for using our website',
        'terms.lastUpdated': 'Last Updated:',
        'terms.agreement': 'Agreement to Terms',
        'terms.agreementText': 'By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.',
        'terms.useOfWebsite': 'Use of Website',
        'terms.useOfWebsiteText': 'This website is provided for informational purposes only. The content is subject to change without notice. You may use this website for lawful purposes only and in accordance with these Terms of Service.',
        'terms.intellectualProperty': 'Intellectual Property',
        'terms.intellectualPropertyText': 'All content, including text, images, logos, and other materials on this website, is the property of Unicol Armenia and Roots LLC and is protected by copyright laws. You may not reproduce, distribute, or use any content from this website without prior written permission.',
        'terms.limitation': 'Limitation of Liability',
        'terms.limitationText': 'We are not liable for any damages arising from the use of this website or the information contained herein. The information on this website is provided "as is" without warranty of any kind.',
        'terms.contactUs': 'Contact Us',
        'terms.contactUsText': 'If you have any questions about these Terms of Service, please contact us at:',
        'terms.backHome': '← Back to Home',
        
        // Legal Notes
        'legal.title': 'Legal Notes',
        'legal.subtitle': 'Important legal information about our company',
        'legal.companyInfo': 'Company Information',
        'legal.companyName': 'Company Name:',
        'legal.representative': 'Representative:',
        'legal.representativeText': 'Official representative of Unicol S.r.l. in Armenia',
        'legal.representation': 'Representation',
        'legal.representationText': 'Roots LLC is the official and exclusive representative of Unicol S.r.l. in Armenia. The supply of Unicol industrial adhesives and bonding solutions in Armenia is carried out by Roots LLC.',
        'legal.brandInfo': 'Brand Information',
        'legal.brandInfoText': 'Roots LLC is represented in the market by the Acobian Furniture brand. Acobian is the brand name, while Roots is the company name. Beyond distribution, Roots, with its "Acobian Furniture" brand, is one of Armenia\'s leading furniture manufacturers with decades of experience in precision woodworking, machinery automation, and modern production methods.',
        'legal.disclaimer': 'Disclaimer',
        'legal.disclaimerText': 'Product specifications and information are subject to change. Please contact us for the most current information regarding our products and services. All product images and descriptions are for illustrative purposes only.',
        'legal.unicolInfo': 'Unicol S.r.l. is an Italian company that has been producing industrial adhesives since 1977. The company offers a vast range of products capable of satisfying multiple requests from various industrial sectors such as wood processing, panels, construction, textile, and tissue. With over 45 years of experience, Unicol has distribution in many countries and offers a wide catalogue of high-quality bonding solutions.',
        'legal.backHome': '← Back to Home'
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
        'applications.kitchen': 'Խոհանոցային սեղանների մակերեսներ',
        'applications.auxiliary': 'Օժանդակ արտադրանքներ',
        'applications.parquet': 'Պարկետների արտադրություն և տեղադրում',
        'applications.seeMore': 'Տեսնել ավելին',
        'applications.backHome': 'Վերադառնալ գլխավոր էջ',
        
        // Products
        'products.title': 'Մեր ապրանքները',
        'products.subtitle': 'Գտեք ձեր կարիքներին համապատասխան սոսինձ',
        'products.pageTitle': 'Բոլոր Ապրանքները',
        'products.pageSubtitle': 'Արդյունաբերական սոսինձների ամբողջական տեսականի',
        'products.seeMore': 'Տեսնել ավելին',
        'products.backHome': 'Վերադառնալ գլխավոր էջ',
        'products.nunivil1000': '<strong>ԼԱՄԻՆԱՑԻԱՅԻ ՀԱՄԱՐ</strong><br>Վինիլային D3 դիսպերսիա, նախատեսված փայտային հիմքով արտադրանքների՝ թղթով տաք և սառը լամինացման համար։ Հարմար է նաև D4 դասի սոսնձման համար՝ դաբաղանյութի կիրառման դեպքում։<br><br><strong>Փաթեթավորում․</strong> 25 կգ տարրա, 1000 կգ տարրա<br><br>• D3 դաս<br>• Բարձր դիմացկունություն ջրի, լուծիչների և ջերմաստիճանի նկատմամբ<br>• Միջինից բարձր մածուցիկություն',
        'products.unibord694': '<strong>ՓԱՅՏԻՑ ԿՈՐԵՐԻ ՁԵՎԱՎՈՐՄԱՆ ՀԱՄԱՐ</strong><br>EVA հիմքով տաք հալվող սոսինձ՝ նախատեսված փայտի և պլաստիկ լամինատի եզրաշերտերի ավտոմատ ծածկման համար՝ soft-forming տեխնոլոգիայով։<br><br><strong>Փաթեթավորում․</strong> 25 կգ տարրա<br><br>• Բնական բաղադրություն<br>• Soft-forming տեխնիկայի համար',
        'products.resina401': '<strong>ՅՈՒՐԵԱՅԻ ՀԻՄՔՈՎ ՍՈՍԻՆՁ</strong><br>Փոշեյին յուրեայի հիմքով սոսինձ՝ ինքնակոփում, բարձր արտադրողականություն, գերազանց լուծելիություն, հատուկ կպչունություն և ցածր արտահոսք։ Օգտագործվում է E1 դասի սալերի արտադրության մեջ։<br><br><strong>Փաթեթավորում․</strong> 25 կգ տարրա<br><br>• E1 դասի արտադրատեսակների համար<br>• Ինքնակոփում<br>• Բարձր արտադրողականություն<br>• Ցածր արտահոսք<br>• Հարմար տաք և բարձր հաճախականությամբ մամլիչների համար',
        'products.nunipur7031': '<strong>ՄԻԱՅՆԱԲԱՂԱԴՐՈՂ</strong><br>Ջրային հիմքով միաբաղադրիչ պոլիուրեթանային սոսինձ՝ նախատեսված PVC թաղանթների համար՝ մեմբրանային մամլիչներով (3D)։<br><br>• Միայնաբաղադրիչ<br>• PVC-ի համար<br>• 3D մեմբրանային մամլիչների համար',
        'products.nunivil165': '<strong>ԹԱՓԱՆԿ</strong><br>Վինիլային դիսպերսիոն սոսինձ շատ արագ կոփմամբ․ կահույքի հավաքման դեպքում թղթապնակների սեղմակները հնարավոր է հեռացնել կարճ ժամանակում։<br><br><strong>Փաթեթավորում․</strong> 25 կգ տարրա, 1000 կգ տարրա<br><br>• Թափանցիկ<br>• Սուպեր արագ կոփում',
        'products.unipren1070': '<strong>ԿՈՆՏԱԿՏԱՅԻՆ ՍՈՍԻՆՁ</strong><br>Կոնտակտային սոսինձ՝ նախատեսված սպաթուլայով (spatula) կիրառման համար։<br><br><strong>Փաթեթավորում․</strong> 12 տարրա × 1.75 կգ, 24 տարրա × 0.85 կգ',
        'products.nunivil25': '<strong>ԿՈՇՏ ՓԱՅՏԵՐԻ ՀԱՄԱՐ</strong><br>Վինիլային դիսպերսիոն սոսինձ՝ հատուկ կոշտ և խեժային փայտատեսակների սոսնձման համար։ Գնահատված է իր արագ կապով և թափանցիկ սոսնձագծով։ Ստուգված է CATAS լաբորատորիայում՝ աթոռների արտադրության համար (CREEP TEST)։<br><br><strong>Փաթեթավորում․</strong> 25 կգ տարրա, 1000 կգ տարրա<br><br>• Կոշտ փայտերի համար<br>• Բարձր ներթափանցում փայտի մեջ<br>• Թափանցիկ<br>• Հարմար աթոռների և սեղանների արտադրության համար',
        'products.unibord607m': '<strong>ԿԵՍԱԹԱՓԱՆԿ</strong><br>EVA հիմքով տաք հալվող սոսինձ՝ բարձր կպչունությամբ և գրեթե անտեսանելի սոսնձագծով։ Արագ հալում, ցածր մածուցիկություն և երկար բաց ժամանակ՝ բազմաֆունկցիոնալ կիրառման համար։<br><br><strong>Փաթեթավորում․</strong> 25 կգ տարրա<br><br>• Կեսաթափանցիկ<br>• Բարձր կպչունություն<br>• Բարձր արտադրողականություն',
        'products.unibord625': '<strong>ԹԱՓԱՆԿ</strong><br>Թափանցիկ EVA տաք հալվող սոսինձ՝ եզրագոտիների ավտոմատ սոսնձման համար, բարձր արտադրողականություն, ջրի և լուծիչների նկատմամբ դիմացկուն։ Հարմար փայտի, պոլիեսթերի, մելամինի, պլաստիկի, PVC և ABS եզրաշերտերի համար։ Հարմար է soft-forming և BAZ կենտրոնների (մեքենաներ CNC) համար։<br><br><strong>Փաթեթավորում․</strong> 20 կգ տարրա<br><br>• Թափանցիկ<br>• Soft-forming և BAZ կենտրոնների համար',
        
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
        'rd.title': 'Հետազոտություն, մշակում և նորարարություն',
        'rd.subtitle': 'Նորարարական կապեր',
        'rd.text1': 'Մեր ընկերության միջուկը հետազոտությունների և զարգացման բաժինն է։ Այնտեղ՝ մեր բարձր մասնագիտացված ներքին լաբորատորիաներում, մշակվում, փորձարկվում և զարգացնում են նոր արտադրանքներ և լուծումներ՝ ըստ շուկայի և հաճախորդների պահանջարկների:',
        'rd.text2': 'Անմիջական հարաբերություններ հաստելով մեր հաճախորդների և արտաքին հետազոտական ինստիտուտների հետ՝ մենք ստեղծում ենք մշտապես նորարարական և անհատականացված բանաձևեր:',
        'rd.btnLearnMore': 'Պատմություն և փաստեր',
        
        // Sustainability
        'sustainability.title': 'Մենք կապվում ենք բնությանը',
        'sustainability.subtitle': 'Որակյալ կապակցում և բնապահպանական մոտեցում',
        'sustainability.text1': 'Unicol-ը նվիրված է կայունությանը ոչ միայն սոցիալական, այլև բնապահպանական, տեսանկյունից՝ մշակելով արտադրանքներ, որոնք չեն վնասում բնությանը և պահպանում են բարձրագույն որակի չափանիշները: Մենք ներդնում ենք էկոլոգիապես մաքուր բանաձևեր, նվազեցնելով լուծիչները և զարգացնելով արտադրանքներ՝ ավելի ցածր VOC արտանետումներով:',
        'sustainability.text2': 'Մեր արտադրական գործընթացները կատարվում են ըստ խիստ եվրոպական չափանիշների՝ ապահովելով մինիմալ թափոններ, էներգաարդյունավետություն և առավելագույն անվտանգություն՝ ինչպես աշխատողների, այնպես էլ սպառողների  համար: "Կայունություն" նաև նշանակում է նորարարություն. մենք նախագծում ենք սոսինձներ, որոնք երկարացնում են արտադրանքի կյանքի տևողությունը, նվազեցնում նյութական թափոնները և աջակցում ժամանակակից "շրջանաձև տնտեսության" սկզբունքներին:',
        
        // Contact
        'contact.title': 'Կապ մեզ հետ',
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
        'footer.madeWith': 'Ստեղծված է ❤️-ով Հայաստանում',
        
        // Privacy Policy
        'privacy.title': 'Գաղտնիության Քաղաքականություն',
        'privacy.subtitle': 'Ինչպես ենք մենք վերաբերվում ձեր տեղեկատվությանը',
        'privacy.lastUpdated': 'Վերջին թարմացում:',
        'privacy.commitment': 'Գաղտնիությունը մեզ համար',
        'privacy.commitmentText': 'Մենք հարգում ենք ձեր գաղտնիությունը․ այս կայքը չի հավաքում, չի պահում կամ չի մշակում այցելուներից անձնական տվյալներ:',
        'privacy.dataCollection': 'Տվյալների Հավաքագրում',
        'privacy.dataCollectionText': 'Մենք չենք օգտագործում cookies  և չենք կիսվում որևէ տեղեկատվությամբ երրորդ կողմերի հետ: Կոնտակտային ձևերի կամ էլեկտրոնային փոստի հաղորդագրությունների միջոցով կամավոր տրամադրած ցանկացած տեղեկատվություն օգտագործվում է բացառապես ձեր հարցումներին պատասխանելու նպատակով:',
        'privacy.contactInfo': 'Կոնտակտային Տեղեկատվություն',
        'privacy.contactInfoText': 'Եթե ունեք հարցեր այս գաղտնիության քաղաքականության վերաբերյալ, խնդրում ենք կապ հաստատել մեզ հետ:',
        'privacy.contactEmail': 'Էլ. փոստ info@roots.am',
        'privacy.contactPhone': 'Հեռախոս +374 91 665520',
        'privacy.contactAddress': 'Հասցե Վաղարշապատ, Տեր-Գաբրիելյան փողոց 20/1',
        'privacy.backHome': '← Վերադառնալ գլխավոր էջ',
        
        // Terms of Service
        'terms.title': 'Ծառայությունների Մատուցման Պայմաններ',
        'terms.subtitle': 'Մեր կայքը օգտագործելու պայմաններ և կանոններ',
        'terms.lastUpdated': 'Վերջին թարմացում:',
        'terms.agreement': 'Պայմանների Համաձայնություն',
        'terms.agreementText': 'Այս կայք մուտք գործելով և օգտագործելով, դուք համաձայնում եք հետևել և պարտավորվում եք հետևյալ պայմաններին և կանոններին:',
        'terms.useOfWebsite': 'Կայքի Օգտագործում',
        'terms.useOfWebsiteText': 'Այս կայքը ստեղծվել է բացառապես տեղեկատվական նպատակներով: Բովանդակությունը կարող է փոխվել առանց նախապես ծանուցման: Դուք կարող եք օգտագործել այս կայքը միայն օրինական նպատակներով և այս Ծառայությունների Մատուցման Պայմաններին համապատասխան:',
        'terms.intellectualProperty': 'Ինտելեկտուալ Սեփականություն',
        'terms.intellectualPropertyText': 'Այս կայքի ամբողջ բովանդակությունը, ներառյալ տեքստերը, պատկերները, լոգոները և այլ նյութեր, Unicol Հայաստանի և Roots LLC-ի սեփականությունն են և պաշտպանված են հեղինակային իրավունքների օրենքներով: Դուք չեք կարող վերարտադրել, տարածել կամ օգտագործել այս կայքի որևէ բովանդակություն առանց նախապես գրավոր թույլտվության:',
        'terms.limitation': 'Պատասխանատվության Սահմանափակում',
        'terms.limitationText': 'Մենք պատասխանատվություն չենք կրում այս կայքը կամ դրա մեջ պարունակվող տեղեկատվությունը օգտագործելուց առաջացած որևէ վնասի համար: Այս կայքի տեղեկատվությունը տրամադրվում է "ինչպես կա"՝ առանց որևէ երաշխիքի:',
        'terms.contactUs': 'Կապ Մեզ Հետ',
        'terms.contactUsText': 'Եթե ունեք հարցեր այս Ծառայությունների Մատուցման Պայմանների վերաբերյալ, խնդրում ենք կապ հաստատել մեզ հետ:',
        'terms.backHome': '← Վերադառնալ գլխավոր էջ',
        
        // Legal Notes
        'legal.title': 'Իրավական Նշումներ',
        'legal.subtitle': 'Կարևոր իրավական տեղեկատվություն մեր ընկերության մասին',
        'legal.companyInfo': 'Ընկերության Տեղեկատվություն',
        'legal.companyName': 'Ընկերության Անվանում:',
        'legal.representative': 'Ներկայացուցիչ:',
        'legal.representativeText': 'Unicol S.r.l.-ի պաշտոնական ներկայացուցիչը Հայաստանում',
        'legal.representation': 'Ներկայացում',
        'legal.representationText': 'Roots LLC-ն Unicol S.r.l.-ի պաշտոնական և բացառիկ ներկայացուցիչն է Հայաստանում: Unicol արդյունաբերական սոսինձների և կապակցման լուծումների մատակարարումը Հայաստանում իրականացվում է Roots LLC-ի կողմից:',
        'legal.brandInfo': 'Ապրանքանիշի Տեղեկատվություն',
        'legal.brandInfoText': 'Roots LLC-ն շուկայում ներկայացված է Acobian Furniture ապրանքանիշով: Roots-ը Հայաստանի առաջատար կահույքի արտադրողներից մեկն է՝ տասնամյակների փորձառությամբ ճշգրիտ փայտամշակման, մեքենայացման ավտոմատացման և ժամանակակից արտադրական մեթոդների ոլորտում:',
        'legal.disclaimer': 'Հրաժարում',
        'legal.disclaimerText': 'Արտադրանքի բնութագրերը և տեղեկատվությունը կարող են փոխվել: Խնդրում ենք կապ հաստատել մեզ հետ մեր արտադրանքների և ծառայությունների վերաբերյալ ամենավերջին տեղեկատվության համար: Բոլոր արտադրանքի պատկերները և նկարագրությունները նախատեսված են միայն նկարագրական նպատակների համար:',
        'legal.unicolInfo': 'Unicol S.r.l.-ը իտալական ընկերություն է, որը 1977 թվականից ի վեր արտադրում է արդյունաբերական սոսինձներ: Ընկերությունը առաջարկում է արտադրանքի լայն տեսականի, որը կարող է բավարարել տարբեր արդյունաբերական սեկտորների բազմաթիվ հարցումներ, ինչպիսիք են փայտամշակումը, վահանակների արտադրությունը, շինարարությունը, տեքստիլը և թղթային արտադրանքները: 45 տարուց ավելի փորձառությամբ Unicol-ը ունի բաշխում շատ երկրներում և առաջարկում է բարձրորակ կապակցման լուծումների լայն կատալոգ:',
        'legal.backHome': '← Վերադառնալ գլխավոր էջ'
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
            // Use innerHTML for product descriptions to preserve HTML formatting
            if (element.classList.contains('product-description')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
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
    } else if (currentPage === 'privacy-policy.html') {
        if (lang === 'hy') {
            document.title = 'Գաղտնիության Քաղաքականություն - Unicol Հայաստան | Roots LLC';
            if (metaDesc) metaDesc.setAttribute('content', 'Unicol Հայաստանի գաղտնիության քաղաքականություն:');
        } else {
            document.title = 'Privacy Policy - Unicol Armenia | Roots LLC';
            if (metaDesc) metaDesc.setAttribute('content', 'Privacy Policy for Unicol Armenia website.');
        }
    } else if (currentPage === 'terms-of-service.html') {
        if (lang === 'hy') {
            document.title = 'Ծառայությունների Մատուցման Պայմաններ - Unicol Հայաստան | Roots LLC';
            if (metaDesc) metaDesc.setAttribute('content', 'Unicol Հայաստանի կայքի օգտագործման պայմաններ:');
        } else {
            document.title = 'Terms of Service - Unicol Armenia | Roots LLC';
            if (metaDesc) metaDesc.setAttribute('content', 'Terms and conditions for using Unicol Armenia website.');
        }
    } else if (currentPage === 'legal-notes.html') {
        if (lang === 'hy') {
            document.title = 'Իրավական Նշումներ - Unicol Հայաստան | Roots LLC';
            if (metaDesc) metaDesc.setAttribute('content', 'Unicol Հայաստանի իրավական նշումներ և ընկերության տեղեկատվություն:');
        } else {
            document.title = 'Legal Notes - Unicol Armenia | Roots LLC';
            if (metaDesc) metaDesc.setAttribute('content', 'Legal notes and company information for Unicol Armenia.');
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

