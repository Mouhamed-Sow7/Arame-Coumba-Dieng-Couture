# Site Web Artisan Couturier

Site statique moderne et responsive pour un artisan couturier, avec galerie dynamique, formulaire de contact et animations.

## Fonctionnalités

- ✅ Page d'accueil avec présentation de l'entreprise
- ✅ Section "À propos" pour le directeur
- ✅ Galerie dynamique avec animations automatiques
- ✅ Navigation avec flèches précédent/suivant
- ✅ Popup modal pour visualiser les réalisations en grand
- ✅ Formulaire de contact intégré avec EmailJS
- ✅ Liens sociaux (WhatsApp, Facebook, Instagram)
- ✅ Informations de contact (téléphone, adresse)
- ✅ Design responsive pour tous les appareils
- ✅ Animations et transitions modernes

## Configuration

### 1. EmailJS Configuration

Pour activer le formulaire de contact, vous devez configurer EmailJS :

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Créez un service email (Gmail, Outlook, etc.)
3. Créez un template d'email
4. Récupérez vos identifiants :
   - Public Key
   - Service ID
   - Template ID

5. Modifiez le fichier `script.js` aux lignes suivantes :

```javascript
// Ligne ~200
emailjs.init("VOTRE_PUBLIC_KEY");

// Ligne ~220
await emailjs.send('VOTRE_SERVICE_ID', 'VOTRE_TEMPLATE_ID', {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message
});
```

### 2. Personnalisation des Images

Remplacez les images d'exemple dans le tableau `galleryItems` du fichier `script.js` :

```javascript
const galleryItems = [
    {
        type: 'image',
        src: 'chemin/vers/votre/image1.jpg',
        alt: 'Description de l\'image'
    },
    {
        type: 'video',
        src: 'chemin/vers/votre/video.mp4',
        alt: 'Description de la vidéo'
    },
    // Ajoutez d'autres images/vidéos
];
```

### 3. Informations de Contact

Modifiez les informations de contact dans `index.html` :

- **Téléphone** : Ligne ~180
- **Adresse** : Ligne ~185
- **WhatsApp** : Ligne ~190 et ~200
- **Liens sociaux** : Lignes ~195-205

### 4. Photo du Directeur

Remplacez le placeholder de la photo du directeur dans `index.html` (section "À propos") :

```html
<div class="about-image">
    <img src="chemin/vers/photo-directeur.jpg" alt="Directeur">
</div>
```

## Structure des Fichiers

```
couture/
├── index.html      # Structure HTML principale
├── styles.css      # Styles CSS avec design responsive
├── script.js       # JavaScript pour galerie, modal et formulaire
└── README.md       # Documentation
```

## Utilisation

1. Ouvrez `index.html` dans un navigateur web
2. Ou servez les fichiers via un serveur local :
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node.js (http-server)
   npx http-server
   ```

## Personnalisation

### Couleurs

Les couleurs principales sont définies dans `styles.css` via les variables CSS :

```css
:root {
    --primary-color: #8B4A6B;    /* Couleur principale */
    --secondary-color: #D4A574;      /* Couleur secondaire */
    --accent-color: #F5E6D3;         /* Couleur d'accent */
}
```

### Texte

Modifiez les textes directement dans `index.html` selon vos besoins.

## Compatibilité

- ✅ Chrome/Edge (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Mobile (iOS Safari, Chrome Mobile)
- ✅ Tablettes

## Support

Pour toute question ou personnalisation supplémentaire, n'hésitez pas à modifier les fichiers selon vos besoins.

