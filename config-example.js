// Fichier de configuration exemple
// Copiez ce fichier et renommez-le en config.js
// Puis remplissez vos informations

const CONFIG = {
    // EmailJS Configuration
    emailjs: {
        publicKey: "VOTRE_PUBLIC_KEY_EMAILJS",
        serviceId: "VOTRE_SERVICE_ID",
        templateId: "VOTRE_TEMPLATE_ID"
    },
    
    // Informations de contact
    contact: {
        phone: "+33 1 23 45 67 89",
        whatsapp: "+33123456789", // Format international sans +
        address: "123 Rue de la Couture\n75000 Paris, France",
        email: "contact@artisan-couturier.fr"
    },
    
    // Réseaux sociaux
    social: {
        facebook: "https://facebook.com/votre-page",
        instagram: "https://instagram.com/votre-compte",
        whatsapp: "https://wa.me/33123456789"
    },
    
    // Galerie - Images et vidéos
    gallery: [
        {
            type: 'image',
            src: 'images/realisation-1.jpg',
            alt: 'Robe sur mesure élégante'
        },
        {
            type: 'image',
            src: 'images/realisation-2.jpg',
            alt: 'Costume trois pièces'
        },
        {
            type: 'video',
            src: 'videos/atelier.mp4',
            alt: 'Visite de l\'atelier'
        }
        // Ajoutez d'autres réalisations ici
    ],
    
    // Configuration de la galerie
    gallerySettings: {
        autoPlayInterval: 5000, // 5 secondes
        transitionDuration: 500 // 0.5 secondes
    }
};

// Pour utiliser cette configuration dans script.js :
// 1. Importez ce fichier dans votre HTML avant script.js
// 2. Utilisez CONFIG.emailjs.publicKey au lieu de la valeur en dur
// 3. Utilisez CONFIG.gallery au lieu de galleryItems

