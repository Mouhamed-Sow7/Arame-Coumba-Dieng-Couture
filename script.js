// Navigation mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu au clic sur un lien
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Galerie de réalisations (exemples - à remplacer par les vraies images/vidéos)
const galleryItems = [
    {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80',
        alt: 'Robe sur mesure',
        caption: 'Robe sur mesure'
    },
    {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&q=80',
        alt: 'Costume élégant',
        caption: 'Costume élégant'
    },
    {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80',
        alt: 'Création originale',
        caption: 'Création originale'
    },
    {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=1200&q=80',
        alt: 'Retouches expertes',
        caption: 'Retouches expertes'
    },
    {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=1200&q=80',
        alt: 'Vêtement sur mesure',
        caption: 'Vêtement sur mesure'
    },
    {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlfGVufDB8fDB8fHww',
        alt: 'Création artisanale',
        caption: 'Création artisanale'
    }
];

// Initialisation de la galerie
let currentSlide = 0;
let autoPlayInterval;

function initGallery() {
    const galleryTrack = document.querySelector('.gallery-track');
    const indicatorsContainer = document.querySelector('.gallery-indicators');
    
    if (!galleryTrack || !indicatorsContainer) {
        console.error('Éléments de galerie non trouvés');
        return;
    }
    
    // Vider les conteneurs au cas où
    galleryTrack.innerHTML = '';
    indicatorsContainer.innerHTML = '';
    
    // Créer les éléments de la galerie
    galleryItems.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.index = index;
        
        if (item.type === 'image') {
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt;
            img.loading = 'lazy';
            img.onerror = function() {
                console.error('Erreur de chargement de l\'image:', item.src);
                this.style.display = 'none';
            };
            galleryItem.appendChild(img);
        } else if (item.type === 'video') {
            const video = document.createElement('video');
            video.src = item.src;
            video.muted = true;
            video.loop = true;
            galleryItem.appendChild(video);
        }
        
        // Ajouter la caption
        const caption = document.createElement('div');
        caption.className = 'gallery-caption';
        caption.textContent = item.caption || item.alt;
        galleryItem.appendChild(caption);
        
        galleryItem.addEventListener('click', () => openModal(index));
        galleryTrack.appendChild(galleryItem);
        
        // Créer les indicateurs
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    updateGallery();
    startAutoPlay();
    
    // Afficher la caption de la première image au chargement
    const firstCaption = document.querySelector('.gallery-caption');
    if (firstCaption) {
        firstCaption.classList.add('show');
        setTimeout(() => {
            firstCaption.classList.remove('show');
        }, 2000); // Afficher pendant 2 secondes au chargement
    }
}

function updateGallery() {
    const galleryTrack = document.querySelector('.gallery-track');
    const indicators = document.querySelectorAll('.indicator');
    const captions = document.querySelectorAll('.gallery-caption');
    
    galleryTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
    
    // Afficher la caption pendant 2 secondes lors du changement
    captions.forEach((caption, index) => {
        if (index === currentSlide) {
            caption.classList.add('show');
            setTimeout(() => {
                caption.classList.remove('show');
            }, 2000);
        } else {
            caption.classList.remove('show');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % galleryItems.length;
    updateGallery();
    resetAutoPlay();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + galleryItems.length) % galleryItems.length;
    updateGallery();
    resetAutoPlay();
}

function goToSlide(index) {
    currentSlide = index;
    updateGallery();
    resetAutoPlay();
}

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000); // Change toutes les 5 secondes
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Navigation galerie
document.querySelector('.gallery-nav.next')?.addEventListener('click', nextSlide);
document.querySelector('.gallery-nav.prev')?.addEventListener('click', prevSlide);

// Pause auto-play au survol
const galleryContainer = document.querySelector('.gallery-container');
if (galleryContainer) {
    galleryContainer.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });
    
    galleryContainer.addEventListener('mouseleave', () => {
        startAutoPlay();
    });
}

// Modal/Popup
let currentModalIndex = 0;

function openModal(index) {
    currentModalIndex = index;
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const modalVideo = document.getElementById('modal-video');
    const item = galleryItems[index];
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    if (item.type === 'image') {
        modalImage.src = item.src;
        modalImage.alt = item.alt;
        modalImage.style.display = 'block';
        modalVideo.style.display = 'none';
    } else if (item.type === 'video') {
        modalVideo.src = item.src;
        modalVideo.style.display = 'block';
        modalImage.style.display = 'none';
        modalVideo.play();
    }
}

function closeModal() {
    const modal = document.getElementById('gallery-modal');
    const modalVideo = document.getElementById('modal-video');
    
    modal.classList.remove('active');
    document.body.style.overflow = '';
    modalVideo.pause();
}

function nextModal() {
    currentModalIndex = (currentModalIndex + 1) % galleryItems.length;
    openModal(currentModalIndex);
}

function prevModal() {
    currentModalIndex = (currentModalIndex - 1 + galleryItems.length) % galleryItems.length;
    openModal(currentModalIndex);
}

// Événements modal
document.querySelector('.modal-close')?.addEventListener('click', closeModal);
document.querySelector('.modal-next')?.addEventListener('click', nextModal);
document.querySelector('.modal-prev')?.addEventListener('click', prevModal);

// Fermer modal avec Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    } else if (e.key === 'ArrowLeft') {
        const modal = document.getElementById('gallery-modal');
        if (modal.classList.contains('active')) {
            prevModal();
        }
    } else if (e.key === 'ArrowRight') {
        const modal = document.getElementById('gallery-modal');
        if (modal.classList.contains('active')) {
            nextModal();
        }
    }
});

// Fermer modal en cliquant en dehors
document.getElementById('gallery-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'gallery-modal') {
        closeModal();
    }
});

// Formulaire de contact avec EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // À remplacer par votre clé publique EmailJS
})();

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('.btn-submit');
    const originalText = submitButton.innerHTML;
    
    // Désactiver le bouton pendant l'envoi
    submitButton.disabled = true;
    submitButton.innerHTML = '<span>Envoi en cours...</span><i class="fas fa-spinner fa-spin"></i>';
    
    // Récupérer les données du formulaire
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    try {
        // Envoyer l'email via EmailJS
        // Remplacez 'YOUR_SERVICE_ID' et 'YOUR_TEMPLATE_ID' par vos identifiants EmailJS
        await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message
        });
        
        // Succès
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Message envoyé avec succès ! Nous vous répondrons bientôt.';
        contactForm.reset();
        
        // Masquer le message après 5 secondes
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
        
    } catch (error) {
        console.error('Erreur EmailJS:', error);
        formMessage.className = 'form-message error';
        formMessage.textContent = 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.';
        
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    } finally {
        // Réactiver le bouton
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
    }
});

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Initialiser la galerie au chargement
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initialisation de la galerie...');
    console.log('Nombre d\'items:', galleryItems.length);
    initGallery();
    console.log('Galerie initialisée');
});

