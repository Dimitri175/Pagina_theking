// ============================================
// THE KING TRAVELS — MAIN JAVASCRIPT
// ============================================

console.log('🌿 The King Travels — Premium Experience Loaded');

// ============================================
// TRANSLATIONS (ES/EN)
// ============================================
const translations = {
    es: {
        // Nav
        'nav.home': 'Inicio',
        'nav.experiences': 'Experiencias',
        'nav.destinations': 'Destinos',
        'nav.gallery': 'Galería',
        'nav.pricing': 'Paquetes',
        'nav.services': 'Servicios',
        'nav.book': 'Reservar',

        // Destinations
        'dest.title': 'Nuestros Destinos',
        'dest.subtitle': 'Descubre los lugares más impresionantes de la Amazonía peruana — desde la selva profunda de Pacaya Samiria hasta los íconos de Iquitos.',
        'dest.pacaya.title': 'Reserva Nacional Pacaya Samiria',
        'dest.pacaya.desc': 'La reserva natural más grande del Perú con 2 millones de hectáreas. Hogar de delfines rosados, caimanes, guacamayos y una biodiversidad extraordinaria.',
        'dest.monos.title': 'Isla de los Monos',
        'dest.monos.desc': 'Centro de rescate y hábitat natural de primates amazónicos. Interactúa con ellos a orillas del río Nanay.',
        'dest.serpentario.title': 'Serpentario',
        'dest.serpentario.desc': 'Exhibición educativa de reptiles amazónicos. Conoce boas, anacondas y caimanes con guías especializados.',
        'dest.cruce.title': 'Cruce Río Nanay y Marañón',
        'dest.cruce.desc': 'Punto de encuentro de dos grandes ríos amazónicos donde las aguas de diferente color se fusionan.',
        'dest.allpahuayo.title': 'Reserva Allpahuayo Mishana',
        'dest.allpahuayo.desc': 'Bosque de arena blanca con la mayor concentración de aves endémicas del Perú. Hogar de especies únicas.',
        'dest.omaguas.title': 'San Joaquín de Omaguas',
        'dest.omaguas.desc': 'Comunidad ribereña ancestral con rica historia colonial y cultura viva. Conoce las tradiciones locales.',
        'dest.sapisapi.title': 'El Sapi Sapi — Nauta',
        'dest.sapisapi.desc': 'Balneario natural y punto de partida hacia Pacaya Samiria desde la ciudad de Nauta.',
        'dest.crea.title': 'CREA — Centro de Rescate Amazónico',
        'dest.crea.desc': 'Centro de rehabilitación de fauna silvestre rescatada. Manatíes, nutrias gigantes y tortugas en recuperación.',
        'dest.huayo.title': 'Bosque de Huayo',
        'dest.huayo.desc': 'Bosque primario con senderos interpretativos y árboles centenarios. Ideal para caminatas y observación.',
        'dest.casafierro.title': 'Casa de Fierro — Iquitos',
        'dest.casafierro.desc': 'Icónica construcción de hierro diseñada por Gustave Eiffel. Monumento histórico en la Plaza de Armas.',
        'dest.boulevard.title': 'Boulevard — Iquitos',
        'dest.boulevard.desc': 'Malecón Tarapacá con vista al río Itaya. Restaurantes, bares y las mejores puestas de sol.',
        'dest.tags.nature': '🏞️ Naturaleza',
        'dest.tags.wildlife': '🦜 Fauna',
        'dest.tags.education': '📚 Educativo',
        'dest.tags.scenic': '📸 Escénico',
        'dest.tags.culture': '🎭 Cultura',
        'dest.tags.historic': '🏛️ Histórico',
        'dest.tags.urban': '🌆 Urbano',

        // Hero
        'hero.title': 'Amazonía Majestuosa',
        'hero.subtitle': 'Descubra el alma de la selva virgen a través de una experiencia exclusiva y legendaria.',
        'hero.cta': 'Vivir la Experiencia',

        // Experiences
        'experiences.title': 'Experiencias Únicas',
        'exp.ayahuasca.title': 'Ceremonia de Ayahuasca',
        'exp.ayahuasca.desc': 'Conexión espiritual y sanación ancestral con chamanes locales.',
        'exp.ayahuasca.btn': 'Descubrir Más →',
        'exp.trekking.title': 'Caminata en la Selva',
        'exp.trekking.desc': 'Explora la flora y fauna exótica en rutas inexploradas.',
        'exp.trekking.btn': 'Ver Rutas →',
        'exp.camping.title': 'Camping Nocturno',
        'exp.camping.desc': 'Duerme bajo las estrellas rodeado de los sonidos de la naturaleza.',
        'exp.camping.btn': 'Reservar Espacio →',
        'exp.fishing.title': 'Pesca Deportiva',
        'exp.fishing.desc': '14 Fotos Exclusivas',
        'exp.fishing.btn': 'Ver Galería Completa →',
        'exp.adventure.title': 'Aventura Extrema',
        'exp.adventure.desc': 'Rutas desafiantes para los verdaderos amantes de la adrenalina.',
        'exp.adventure.btn': 'Atreverse →',

        // Gallery
        'gallery.title': 'Galería Fotográfica',
        'gallery.subtitle': 'Imágenes reales de nuestras expediciones en Pacaya Samiria',
        'gallery.all': 'Todas',
        'gallery.landscape': 'Paisajes',
        'gallery.fishing': 'Pesca',
        'gallery.adventure': 'Aventura',
        'gallery.labels.aerial1': 'Vista Aérea del Río',
        'gallery.labels.aerial2': 'Selva desde el Cielo',
        'gallery.labels.aerial3': 'Río Pacaya',
        'gallery.labels.aerial4': 'Paisaje Amazónico',
        'gallery.labels.aerial5': 'Atardecer en la Selva',
        'gallery.labels.aerial6': 'Vista Panorámica',
        'gallery.labels.fish1': 'Pesca en el Río',
        'gallery.labels.fish2': 'Pesca Artesanal',
        'gallery.labels.fish3': 'Gran Captura',
        'gallery.labels.fish4': 'Expedición de Pesca',
        'gallery.labels.fish5': 'Pesca en la Selva',
        'gallery.labels.adv1': 'Aventura en la Selva',
        'gallery.labels.adv2': 'Expedición Nocturna',

        // Pricing
        'pricing.title': 'Paquetes de Expedición',
        'pricing.subtitle': 'Elige la aventura perfecta para ti. Todos los precios incluyen guía, transporte y equipo.',
        'pricing.perPerson': 'por persona / 1 día',
        'pricing.perPerson3': 'por persona / 3 días',
        'pricing.perPerson5': 'por persona / 5 días',
        'pricing.basic.name': 'Expedición Express',
        'pricing.basic.f1': 'Caminata guiada (4 hrs)',
        'pricing.basic.f2': 'Transporte fluvial ida y vuelta',
        'pricing.basic.f3': 'Almuerzo típico incluido',
        'pricing.basic.f4': 'Avistamiento de fauna',
        'pricing.basic.f5': 'Equipo básico proporcionado',
        'pricing.basic.btn': 'Consultar',
        'pricing.basic.usd': '≈ $65 USD',
        'pricing.popular.badge': '⭐ Más Popular',
        'pricing.popular.name': 'Aventura Completa',
        'pricing.popular.usd': '≈ $170 USD',
        'pricing.popular.f1': 'Todo lo del plan Express',
        'pricing.popular.f2': 'Camping 2 noches en la selva',
        'pricing.popular.f3': 'Pesca deportiva artesanal',
        'pricing.popular.f4': 'Avistamiento de delfines rosados',
        'pricing.popular.f5': 'Todas las comidas incluidas',
        'pricing.popular.f6': 'Sesión fotográfica con drone',
        'pricing.popular.btn': 'Reservar Ahora',
        'pricing.premium.name': 'Expedición Premium',
        'pricing.premium.usd': '≈ $315 USD',
        'pricing.premium.f1': 'Todo lo del plan Completo',
        'pricing.premium.f2': 'Ceremonia de Ayahuasca',
        'pricing.premium.f3': 'Caminata nocturna guiada',
        'pricing.premium.f4': 'Visita a comunidades nativas',
        'pricing.premium.f5': 'Video profesional del viaje',
        'pricing.premium.f6': 'Transporte desde Iquitos incluido',
        'pricing.premium.f7': 'Guía privado exclusivo',
        'pricing.premium.btn': 'Consultar',

        // Services
        'services.title': 'Servicios Incluidos',
        'services.transport.title': 'Transporte Fluvial',
        'services.transport.desc': 'Lanchas rápidas y seguras dentro de la reserva.',
        'services.equipment.title': 'Equipo Completo',
        'services.equipment.desc': 'Carpas, botas y todo lo necesario para la expedición.',
        'services.guides.title': 'Guías Certificados',
        'services.guides.desc': 'Expertos locales conocedores de cada rincón.',

        // About
        'about.subtitle': 'Guía Oficial de Turismo',
        'about.title': 'Hola, soy Rey',
        'about.text1': '"Bienvenidos a mi hogar. He dedicado más de 20 años a recorrer y proteger la Reserva Nacional Pacaya Samiria. Como guía certificado, mi misión es mostrarte los secretos de la selva que solo los locales conocemos."',
        'about.text2': 'Te ofrezco una experiencia segura, auténtica y respetuosa con la naturaleza. No solo verás la selva, la vivirás.',
        'about.stat1': 'Años de Experiencia',
        'about.stat2': 'Seguridad Garantizada',

        // Testimonials
        'testimonials.title': 'Lo que dicen nuestros viajeros',
        'testimonials.t1.text': 'Al llegar al aeropuerto nos recogieron dos personas del hotel. Nos dieron una bolsa con una mandarina y chifles. Al llegar al lodge nos recibieron con un jugo de camu camu. Estuve en la habitación Mukuika; las camas tenían mosquitero. Hicimos caminatas, paseos en bote y vimos cinco especies de monos y delfines rosados, pero lo más divertido fue pescar pirañas. Nuestro guía se llamaba Rey. ¡Gracias, Rey! Consejo: llevar repelente, ir a las excursiones con leggings y llevar cámara.',
        'testimonials.t2.text': 'Escribo esta opinión un poco tarde, pero quería dedicar unas palabras a la increíble experiencia que vivimos en Pacaya Samiria. Elegimos este lodge por ser sustentable, con acceso directo a la reserva y por su apoyo a la comunidad local. No pudimos estar más felices con nuestra elección. Durante nuestra estancia de 4 días nos acompañó nuestro guía Rey: un ser humano increíble, con una gran sonrisa y un conocimiento vasto de las plantas y animales. El albergue es un paraíso donde vimos el nacimiento de tortugas, caimanes y perezosos. Aunque no hay agua caliente, es comprensible por estar en la selva y no se echa de menos. ¡El personal fue muy servicial y la comida increíble! Tuvimos tiempo para descansar y disfrutar, que era justo lo que necesitábamos tras dos semanas de tour por Perú. 10/10, ¡esperamos volver pronto!',
        'testimonials.t3.text': '¡Acabamos de regresar de unos días increíbles en nuestra expedición por la Amazonía! Estamos emocionados por la experiencia. El lodge es hermoso, está súper bien cuidado y las habitaciones son impecables. Solo hay electricidad por 4 horas al día, pero es suficiente ya que pasas el día en excursiones. No hay wifi, lo cual permite una inmersión total en la selva. ¡El personal es espectacular! Sobre la comida: ¡INCREÍBLE! Todo delicioso y preparado con esmero. Nuestro guía, Rey, nos hizo pasar una experiencia espectacular desde que nos recogió en Iquitos. Es muy profesional, sabe muchísimo de la selva, animales y plantas. Quedamos fascinados con Rey y lo extrañaremos mucho. ¡Esperamos regresar pronto para acampar en la reserva! ¡Gracias Rey por todo!',
        'testimonials.readMore': 'Leer más',
        'testimonials.readLess': 'Leer menos',

        // Footer
        'footer.title': 'Empieza tu Viaje',
        'footer.btn': 'Consultar Disponibilidad',
        'footer.rights': 'Todos los derechos reservados.',
    },
    en: {
        // Nav
        'nav.home': 'Home',
        'nav.experiences': 'Experiences',
        'nav.destinations': 'Destinations',
        'nav.gallery': 'Gallery',
        'nav.pricing': 'Packages',
        'nav.services': 'Services',
        'nav.book': 'Book Now',

        // Destinations
        'dest.title': 'Our Destinations',
        'dest.subtitle': 'Discover the most impressive places in the Peruvian Amazon — from the deep jungle of Pacaya Samiria to the icons of Iquitos.',
        'dest.pacaya.title': 'Pacaya Samiria National Reserve',
        'dest.pacaya.desc': 'The largest natural reserve in Peru with 2 million hectares. Home to pink dolphins, caimans, macaws and extraordinary biodiversity.',
        'dest.monos.title': 'Monkey Island',
        'dest.monos.desc': 'Rescue center and natural habitat for Amazonian primates. Interact with them on the banks of the Nanay River.',
        'dest.serpentario.title': 'Snake House',
        'dest.serpentario.desc': 'Educational exhibition of Amazonian reptiles. Meet boas, anacondas, and caimans with specialized guides.',
        'dest.cruce.title': 'Nanay and Marañón River Junction',
        'dest.cruce.desc': 'Meeting point of two great Amazonian rivers where waters of different colors merge.',
        'dest.allpahuayo.title': 'Allpahuayo Mishana Reserve',
        'dest.allpahuayo.desc': 'White sand forest with the highest concentration of endemic birds in Peru. Home to unique species.',
        'dest.omaguas.title': 'San Joaquín de Omaguas',
        'dest.omaguas.desc': 'Ancestral riverside community with rich colonial history and living culture. Learn about local traditions.',
        'dest.sapisapi.title': 'El Sapi Sapi — Nauta',
        'dest.sapisapi.desc': 'Natural swimming spot and gateway to Pacaya Samiria from the city of Nauta.',
        'dest.crea.title': 'CREA — Amazon Rescue Center',
        'dest.crea.desc': 'Rehabilitation center for rescued wildlife. Manatees, giant otters, and turtles in recovery.',
        'dest.huayo.title': 'Huayo Forest',
        'dest.huayo.desc': 'Primary forest with interpretive trails and centuries-old trees. Ideal for hiking and observation.',
        'dest.casafierro.title': 'Iron House — Iquitos',
        'dest.casafierro.desc': 'Iconic iron construction designed by Gustave Eiffel. Historical monument in the heart of Iquitos.',
        'dest.boulevard.title': 'Boulevard — Iquitos',
        'dest.boulevard.desc': 'Tarapacá boardwalk with panoramic views of the Itaya River. Restaurants, bars and the best sunsets.',
        'dest.tags.nature': '🏞️ Nature',
        'dest.tags.wildlife': '🦜 Wildlife',
        'dest.tags.education': '📚 Educational',
        'dest.tags.scenic': '📸 Scenic',
        'dest.tags.culture': '🎭 Culture',
        'dest.tags.historic': '🏛️ Historic',
        'dest.tags.urban': '🌆 Urban',

        // Hero
        'hero.title': 'Majestic Amazonia',
        'hero.subtitle': 'Discover the soul of the virgin jungle through an exclusive and legendary experience.',
        'hero.cta': 'Live the Experience',

        // Experiences
        'experiences.title': 'Unique Experiences',
        'exp.ayahuasca.title': 'Ayahuasca Ceremony',
        'exp.ayahuasca.desc': 'Spiritual connection and ancestral healing with local shamans.',
        'exp.ayahuasca.btn': 'Discover More →',
        'exp.trekking.title': 'Jungle Trekking',
        'exp.trekking.desc': 'Explore exotic flora and fauna on unexplored trails.',
        'exp.trekking.btn': 'View Routes →',
        'exp.camping.title': 'Night Camping',
        'exp.camping.desc': 'Sleep under the stars surrounded by the sounds of nature.',
        'exp.camping.btn': 'Reserve Spot →',
        'exp.fishing.title': 'Sport Fishing',
        'exp.fishing.desc': '14 Exclusive Photos',
        'exp.fishing.btn': 'View Full Gallery →',
        'exp.adventure.title': 'Extreme Adventure',
        'exp.adventure.desc': 'Challenging routes for true adrenaline lovers.',
        'exp.adventure.btn': 'Dare to Try →',

        // Gallery
        'gallery.title': 'Photo Gallery',
        'gallery.subtitle': 'Real images from our expeditions in Pacaya Samiria',
        'gallery.all': 'All',
        'gallery.landscape': 'Landscapes',
        'gallery.fishing': 'Fishing',
        'gallery.adventure': 'Adventure',
        'gallery.labels.aerial1': 'Aerial River View',
        'gallery.labels.aerial2': 'Jungle from the Sky',
        'gallery.labels.aerial3': 'Pacaya River',
        'gallery.labels.aerial4': 'Amazon Landscape',
        'gallery.labels.aerial5': 'Jungle Sunset',
        'gallery.labels.aerial6': 'Panoramic View',
        'gallery.labels.fish1': 'River Fishing',
        'gallery.labels.fish2': 'Artisan Fishing',
        'gallery.labels.fish3': 'Big Catch',
        'gallery.labels.fish4': 'Fishing Expedition',
        'gallery.labels.fish5': 'Jungle Fishing',
        'gallery.labels.adv1': 'Jungle Adventure',
        'gallery.labels.adv2': 'Night Expedition',

        // Pricing
        'pricing.title': 'Expedition Packages',
        'pricing.subtitle': 'Choose the perfect adventure for you. All prices include guide, transport, and equipment.',
        'pricing.perPerson': 'per person / 1 day',
        'pricing.perPerson3': 'per person / 3 days',
        'pricing.perPerson5': 'per person / 5 days',
        'pricing.basic.name': 'Express Expedition',
        'pricing.basic.f1': 'Guided trek (4 hrs)',
        'pricing.basic.f2': 'Round-trip river transport',
        'pricing.basic.f3': 'Typical lunch included',
        'pricing.basic.f4': 'Wildlife sighting',
        'pricing.basic.f5': 'Basic equipment provided',
        'pricing.basic.btn': 'Inquire',
        'pricing.basic.usd': '≈ $65 USD',
        'pricing.popular.badge': '⭐ Most Popular',
        'pricing.popular.name': 'Complete Adventure',
        'pricing.popular.usd': '≈ $170 USD',
        'pricing.popular.f1': 'Everything in Express plan',
        'pricing.popular.f2': '2-night jungle camping',
        'pricing.popular.f3': 'Artisan sport fishing',
        'pricing.popular.f4': 'Pink dolphin sighting',
        'pricing.popular.f5': 'All meals included',
        'pricing.popular.f6': 'Drone photography session',
        'pricing.popular.btn': 'Book Now',
        'pricing.premium.name': 'Premium Expedition',
        'pricing.premium.usd': '≈ $315 USD',
        'pricing.premium.f1': 'Everything in Complete plan',
        'pricing.premium.f2': 'Ayahuasca Ceremony',
        'pricing.premium.f3': 'Guided night trek',
        'pricing.premium.f4': 'Visit native communities',
        'pricing.premium.f5': 'Professional trip video',
        'pricing.premium.f6': 'Transport from Iquitos included',
        'pricing.premium.f7': 'Exclusive private guide',
        'pricing.premium.btn': 'Inquire',

        // Services
        'services.title': 'Included Services',
        'services.transport.title': 'River Transport',
        'services.transport.desc': 'Fast and safe boats within the reserve.',
        'services.equipment.title': 'Full Equipment',
        'services.equipment.desc': 'Tents, boots, and everything needed for the expedition.',
        'services.guides.title': 'Certified Guides',
        'services.guides.desc': 'Local experts who know every corner.',

        // About
        'about.subtitle': 'Official Tourism Guide',
        'about.title': "Hi, I'm Rey",
        'about.text1': '"Welcome to my home. I have dedicated over 20 years to exploring and protecting the Pacaya Samiria National Reserve. As a certified guide, my mission is to show you the secrets of the jungle that only locals know."',
        'about.text2': 'I offer you a safe, authentic experience that respects nature. You won\'t just see the jungle — you\'ll live it.',
        'about.stat1': 'Years of Experience',
        'about.stat2': 'Guaranteed Safety',

        // Testimonials
        'testimonials.title': 'What our travelers say',
        'testimonials.t1.text': 'Upon arrival at the airport, two gentlemen from the hotel picked us up. They gave us a bag with a tangerine and chifles. At the lodge, they welcomed us with camu camu juice. I stayed in the Mukuika room; the beds had mosquito nets. We went on hikes, boat rides and saw five species of monkeys and pink dolphins, but the most fun part was fishing for piranhas. Our guide was named Rey. Thanks, Rey! Tip: bring repellent, go to the excursions with leggings and bring a camera.',
        'testimonials.t2.text': 'I am writing this review a bit late, but I wanted to dedicate a few words to the incredible experience we had at Pacaya Samiria. We chose this lodge because it is sustainable, has direct access to the reserve, and supports the local community. We couldn\'t be happier with our choice. During our 4-day stay, we were accompanied by our guide Rey: an incredible human being with a great smile and vast knowledge of plants and animals. The lodge is a paradise where we saw turtles hatching, caimans, and sloths. Although there is no hot water, it is understandable given we are in the jungle and it isn\'t missed. The staff was very helpful and the food was amazing! We had time to rest and enjoy, which was exactly what we needed after two weeks of touring Peru. 10/10, we hope to return soon!',
        'testimonials.t3.text': 'Just returned from some incredible days during our Amazon expedition! We are thrilled with the experience. The lodge is beautiful, very well maintained, and the rooms are impeccable. There is only electricity for 4 hours a day, but that\'s enough as you spend the day on excursions. There is no wifi, which allows for a total immersion in the jungle. The staff is spectacular! About the food: AMAZING! Everything was delicious and prepared with care. Our guide, Rey, provided a spectacular experience from the moment he picked us up in Iquitos. He is very professional and knows so much about the jungle, animals, and plants. We were fascinated with Rey and will miss him dearly. We hope to return soon to camp in the reserve! Thanks Rey for everything!',
        'testimonials.readMore': 'Read more',
        'testimonials.readLess': 'Read less',

        // Footer
        'footer.title': 'Start Your Journey',
        'footer.btn': 'Check Availability',
        'footer.rights': 'All rights reserved.',
    }
};

const placeholderTranslations = {
    es: {
        'footer.name': 'Nombre completo',
        'footer.email': 'Correo electrónico',
    },
    en: {
        'footer.name': 'Full name',
        'footer.email': 'Email address',
    }
};

let currentLang = 'es';

function setLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];
    const placeholderDict = placeholderTranslations[lang];

    // Translate text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (placeholderDict[key]) {
            el.placeholder = placeholderDict[key];
        }
    });

    // Update toggle button
    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
        const flag = toggle.querySelector('.lang-flag');
        const label = toggle.querySelector('.lang-label');
        if (lang === 'es') {
            flag.textContent = '🇬🇧';
            label.textContent = 'EN';
        } else {
            flag.textContent = '🇪🇸';
            label.textContent = 'ES';
        }
    }

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Handle testimonial truncation
    initTestimonialsToggle();
}

/**
 * Handle "Read More" logic for testimonials using a Premium Modal
 */
function initTestimonialsToggle() {
    const reviews = document.querySelectorAll('.review-text');
    const dict = translations[currentLang];
    const maxLength = 200;

    reviews.forEach(review => {
        const fullText = dict[review.getAttribute('data-i18n')];
        if (!fullText) return;

        // Initial Truncation
        if (fullText.length > maxLength) {
            review.textContent = fullText.substring(0, maxLength) + '...';

            // Add or update button
            let btn = review.nextElementSibling;
            if (!btn || !btn.classList.contains('read-more-btn')) {
                btn = document.createElement('button');
                btn.className = 'read-more-btn';
                review.parentNode.insertBefore(btn, review.nextSibling);
            }
            btn.textContent = dict['testimonials.readMore'];

            btn.onclick = (e) => {
                e.stopPropagation();
                openReviewModal(review.closest('.testimonial-card').outerHTML, fullText);
            };
        } else {
            review.textContent = fullText;
            const existingBtn = review.nextElementSibling;
            if (existingBtn && existingBtn.classList.contains('read-more-btn')) {
                existingBtn.remove();
            }
        }
    });

    setupModalControls();
}

/**
 * Open Modal with Full Review
 */
function openReviewModal(cardHtml, fullText) {
    const modal = document.getElementById('review-modal');
    const modalBody = document.getElementById('modal-review-body');

    // Set content
    modalBody.innerHTML = cardHtml;
    // Replace truncated text with full text in the modal
    const modalText = modalBody.querySelector('.review-text');
    if (modalText) modalText.textContent = fullText;

    // Hide original "Read More" button in modal
    const modalBtn = modalBody.querySelector('.read-more-btn');
    if (modalBtn) modalBtn.style.display = 'none';

    // Show modal
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
}

/**
 * Handle closing the modal
 */
function setupModalControls() {
    const modal = document.getElementById('review-modal');
    const closeBtn = document.querySelector('.close-modal');

    if (!modal || !closeBtn) return;

    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
}

// ============================================
// MAIN INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {

    // --- PRELOADER ---
    window.addEventListener('load', () => {
        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                preloader.classList.add('loaded');
            }
        }, 800);
    });

    // --- HAMBURGER MENU ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // --- SCROLL NAVBAR EFFECT ---
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.glass-nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(2, 44, 34, 0.95)';
            nav.style.padding = '0.8rem 5%';
        } else {
            nav.style.background = 'rgba(15, 23, 42, 0.7)';
            nav.style.padding = '1.5rem 5%';
        }
    });

    // --- LANGUAGE TOGGLE ---
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }

    // --- SCROLL REVEAL (IntersectionObserver) ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- GALLERY FILTER ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hidden');
                    // Re-trigger reveal if needed
                    item.classList.add('revealed');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // --- GALLERY LIGHTBOX ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const closeBtn = document.querySelector('.close-lightbox');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let galleryImages = [];
    let currentImageIndex = 0;

    function collectVisibleImages() {
        galleryImages = [];
        document.querySelectorAll('.gallery-item:not(.hidden) img').forEach(img => {
            galleryImages.push(img.src);
        });
        return galleryImages;
    }

    function openLightbox(index) {
        collectVisibleImages();
        if (galleryImages.length === 0) return;
        currentImageIndex = index;
        lightboxImg.src = galleryImages[currentImageIndex];
        lightboxCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    }

    function navigateLightbox(direction) {
        currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex];
        lightboxCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    }

    // Click on gallery items to open lightbox
    galleryItems.forEach((item, idx) => {
        item.addEventListener('click', () => {
            // Find index among visible items
            const visibleItems = [...document.querySelectorAll('.gallery-item:not(.hidden)')];
            const visibleIndex = visibleItems.indexOf(item);
            openLightbox(visibleIndex >= 0 ? visibleIndex : 0);
        });
    });

    // Also support the fishing card opening the lightbox
    const fishingCard = document.getElementById('fishing-card');
    if (fishingCard) {
        fishingCard.addEventListener('click', (e) => {
            // Ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            const rect = fishingCard.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
            fishingCard.style.position = 'relative';
            fishingCard.style.overflow = 'hidden';
            fishingCard.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
                // Set filter to fishing and open lightbox
                filterBtns.forEach(b => {
                    b.classList.remove('active');
                    if (b.dataset.filter === 'fishing') b.classList.add('active');
                });
                galleryItems.forEach(item => {
                    if (item.dataset.category === 'fishing') {
                        item.classList.remove('hidden');
                        item.classList.add('revealed');
                    } else {
                        item.classList.add('hidden');
                    }
                });
                // Scroll to gallery
                document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
                // Open first fishing image in lightbox
                setTimeout(() => openLightbox(0), 600);
            }, 300);
        });
    }

    // Lightbox controls
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(1); });
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(-1); });

    // Close on background click
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') navigateLightbox(1);
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
        }
    });

    // --- SMOOTH SCROLL for nav links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- INITIALIZE ---
    setLanguage(currentLang);
});
