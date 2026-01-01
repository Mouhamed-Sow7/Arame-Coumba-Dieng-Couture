# Guide de Configuration EmailJS

Ce guide vous explique étape par étape comment configurer EmailJS pour le formulaire de contact.

## Étape 1 : Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" et créez un compte gratuit
3. Vérifiez votre email

## Étape 2 : Créer un Service Email

1. Dans le tableau de bord, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. Notez le **Service ID** (ex: `service_xxxxx`)

## Étape 3 : Créer un Template d'Email

1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Configurez votre template :

   **Template Name** : Contact Form (ou autre nom)

   **Subject** : Nouveau message de contact - {{from_name}}

   **Content** :
   ```
   Nouveau message reçu depuis le site web :
   
   Nom : {{from_name}}
   Email : {{from_email}}
   Téléphone : {{phone}}
   
   Message :
   {{message}}
   ```

4. Cliquez sur **Save**
5. Notez le **Template ID** (ex: `template_xxxxx`)

## Étape 4 : Récupérer votre Public Key

1. Allez dans **Account** > **General**
2. Trouvez **Public Key** dans la section API Keys
3. Copiez la clé (ex: `xxxxxxxxxxxxx`)

## Étape 5 : Configurer le Site

Ouvrez le fichier `script.js` et modifiez les lignes suivantes :

### Ligne ~200 - Initialisation EmailJS
```javascript
emailjs.init("VOTRE_PUBLIC_KEY_ICI");
```

### Ligne ~220 - Envoi de l'email
```javascript
await emailjs.send('VOTRE_SERVICE_ID_ICI', 'VOTRE_TEMPLATE_ID_ICI', {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message
});
```

## Exemple de Configuration Complète

```javascript
// Initialisation
emailjs.init("abc123xyz789");

// Envoi
await emailjs.send('service_gmail123', 'template_contact456', {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message
});
```

## Test du Formulaire

1. Ouvrez votre site dans un navigateur
2. Remplissez le formulaire de contact
3. Cliquez sur "Envoyer"
4. Vérifiez votre boîte email pour recevoir le message

## Limites du Plan Gratuit

- 200 emails/mois
- Parfait pour un site d'artisan

## Dépannage

### Le formulaire ne fonctionne pas
- Vérifiez que vous avez bien remplacé les identifiants
- Ouvrez la console du navigateur (F12) pour voir les erreurs
- Vérifiez que EmailJS est bien initialisé

### Erreur "Service not found"
- Vérifiez que le Service ID est correct
- Assurez-vous que le service est actif dans EmailJS

### Erreur "Template not found"
- Vérifiez que le Template ID est correct
- Assurez-vous que le template est publié

## Support EmailJS

Si vous rencontrez des problèmes, consultez la [documentation EmailJS](https://www.emailjs.com/docs/) ou leur support.

