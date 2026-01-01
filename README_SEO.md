# Plan SEO - Site Artisan Couturier

## 📋 Vue d'ensemble

Ce document détaille la stratégie SEO mise en place pour le site de l'artisan couturier et les actions à effectuer pour optimiser le référencement.

## ✅ SEO Technique Implémenté

### 1. Meta Tags Essentiels

- ✅ **Title** : Optimisé avec mots-clés principaux (60 caractères max)
- ✅ **Meta Description** : Description attractive avec mots-clés (155 caractères max)
- ✅ **Meta Keywords** : Mots-clés pertinents pour le secteur
- ✅ **Meta Robots** : Index, follow activé
- ✅ **Canonical URL** : URL canonique définie
- ✅ **Langue** : Lang="fr" spécifié

### 2. Open Graph (Facebook, LinkedIn)

- ✅ **og:type** : website
- ✅ **og:title** : Titre optimisé
- ✅ **og:description** : Description pour réseaux sociaux
- ✅ **og:image** : Image de partage (1200x630px recommandé)
- ✅ **og:url** : URL canonique
- ✅ **og:locale** : fr_FR

### 3. Twitter Cards

- ✅ **twitter:card** : summary_large_image
- ✅ **twitter:title** : Titre optimisé
- ✅ **twitter:description** : Description
- ✅ **twitter:image** : Image de partage

### 4. Schema.org (Données Structurées)

- ✅ **LocalBusiness** : Informations de l'entreprise
- ✅ **Adresse complète** : Pour le référencement local
- ✅ **Coordonnées GPS** : Latitude/Longitude
- ✅ **Horaires d'ouverture** : Spécifiés
- ✅ **Réseaux sociaux** : Liens sameAs

### 5. Structure HTML Sémantique

- ✅ **Balises sémantiques** : `<main>`, `<nav>`, `<section>`, `<footer>`
- ✅ **Attributs ARIA** : aria-label pour l'accessibilité
- ✅ **Hiérarchie H1-H6** : Structure correcte
- ✅ **Alt text** : Attributs alt sur les images

### 6. Performance

- ✅ **Preconnect** : Pour les ressources externes
- ✅ **DNS Prefetch** : Optimisation des requêtes
- ✅ **Lazy Loading** : Images chargées à la demande

## 🔧 Actions à Effectuer (Personnalisation)

### 1. URLs et Domaines

**À modifier dans `index.html` :**

```html
<!-- Ligne 18 -->
<meta property="og:url" content="https://www.VOTRE-DOMAINE.com/">

<!-- Ligne 26 -->
<meta name="twitter:url" content="https://www.VOTRE-DOMAINE.com/">

<!-- Ligne 37 -->
<link rel="canonical" href="https://www.VOTRE-DOMAINE.com/">

<!-- Ligne 54 dans Schema.org -->
"@id": "https://www.VOTRE-DOMAINE.com",
"url": "https://www.VOTRE-DOMAINE.com",
```

### 2. Images de Partage

**Créer et uploader :**

- `og-image.jpg` (1200x630px) - Image pour Facebook/LinkedIn
- `twitter-image.jpg` (1200x630px) - Image pour Twitter
- `logo.jpg` - Logo de l'entreprise
- `favicon.ico` - Icône du site (16x16 ou 32x32px)
- `apple-touch-icon.png` - Icône pour iOS (180x180px)

**Placer dans :** `/images/` ou à la racine

**Mettre à jour les chemins dans `index.html` :**

```html
<!-- Ligne 21 -->
<meta property="og:image" content="https://www.VOTRE-DOMAINE.com/images/og-image.jpg">

<!-- Ligne 30 -->
<meta name="twitter:image" content="https://www.VOTRE-DOMAINE.com/images/twitter-image.jpg">

<!-- Ligne 53 dans Schema.org -->
"image": "https://www.VOTRE-DOMAINE.com/images/logo.jpg",
```

### 3. Informations de Contact

**Mettre à jour dans Schema.org (lignes 56-69) :**

```json
"telephone": "+33 1 23 45 67 89",  // Votre vrai numéro
"address": {
  "streetAddress": "Votre adresse complète",
  "addressLocality": "Votre ville",
  "postalCode": "Votre code postal",
  "addressCountry": "FR"
},
"geo": {
  "latitude": 48.8566,  // Coordonnées GPS réelles
  "longitude": 2.3522
},
"openingHoursSpecification": {
  "dayOfWeek": ["Monday", "Tuesday", ...],  // Vos jours d'ouverture
  "opens": "09:00",  // Heure d'ouverture
  "closes": "18:00"   // Heure de fermeture
}
```

### 4. Réseaux Sociaux

**Mettre à jour (lignes 82-84) :**

```json
"sameAs": [
  "https://www.facebook.com/VOTRE-PAGE",
  "https://www.instagram.com/VOTRE-COMPTE",
  "https://www.linkedin.com/company/VOTRE-ENTREPRISE"
]
```

### 5. Contenu Optimisé

**Mots-clés cibles :**
- couturier
- couture sur mesure
- retouches
- vêtements personnalisés
- artisan couturier
- atelier couture
- [Votre ville] + couturier
- création sur mesure
- tailleur
- modiste

**Optimisation du contenu :**
- Utiliser les mots-clés naturellement dans les textes
- Créer du contenu unique et de qualité
- Ajouter des descriptions détaillées pour chaque réalisation

## 📊 Checklist SEO Complète

### Technique
- [x] Meta title optimisé
- [x] Meta description optimisée
- [x] Meta keywords
- [x] Canonical URL
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Schema.org JSON-LD
- [x] Structure HTML sémantique
- [x] Attributs alt sur images
- [ ] Sitemap.xml (à créer)
- [ ] robots.txt (à créer)
- [ ] Favicon
- [ ] Images de partage optimisées

### Contenu
- [ ] Contenu unique et original
- [ ] Mots-clés intégrés naturellement
- [ ] Descriptions détaillées des réalisations
- [ ] Blog/articles (optionnel mais recommandé)
- [ ] Témoignages clients

### Local SEO
- [ ] Google My Business créé et optimisé
- [ ] Adresse complète et cohérente partout
- [ ] Numéro de téléphone local
- [ ] Coordonnées GPS correctes
- [ ] Citations locales (annuaires)

### Performance
- [x] Preconnect/DNS prefetch
- [x] Lazy loading images
- [ ] Compression des images
- [ ] Minification CSS/JS (optionnel)
- [ ] CDN (optionnel)

### Liens
- [ ] Profils réseaux sociaux actifs
- [ ] Backlinks de qualité
- [ ] Citations locales
- [ ] Partenariats locaux

## 🚀 Actions Prioritaires

### Immédiat (Avant mise en ligne)

1. **Remplacer toutes les URLs** par votre domaine réel
2. **Créer les images de partage** (og-image, twitter-image)
3. **Ajouter le favicon**
4. **Mettre à jour les coordonnées** dans Schema.org
5. **Créer un fichier robots.txt**
6. **Créer un sitemap.xml**

### Court terme (1-2 semaines)

1. **Créer un compte Google My Business**
2. **Optimiser les descriptions** des réalisations
3. **Ajouter plus de contenu** textuel
4. **Soumettre le sitemap** à Google Search Console
5. **Vérifier l'indexation** sur Google

### Moyen terme (1-3 mois)

1. **Créer du contenu régulier** (blog, actualités)
2. **Obtenir des backlinks** de qualité
3. **Optimiser les images** (compression, alt text)
4. **Analyser les performances** avec Google Analytics
5. **Ajuster la stratégie** selon les résultats

## 📝 Fichiers à Créer

### robots.txt

Créer à la racine du site :

```
User-agent: *
Allow: /
Sitemap: https://www.VOTRE-DOMAINE.com/sitemap.xml
```

### sitemap.xml

Créer à la racine du site :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.VOTRE-DOMAINE.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 🔍 Outils de Vérification

### Tests SEO

1. **Google Search Console** : https://search.google.com/search-console
2. **Google Rich Results Test** : https://search.google.com/test/rich-results
3. **Facebook Sharing Debugger** : https://developers.facebook.com/tools/debug/
4. **Twitter Card Validator** : https://cards-dev.twitter.com/validator
5. **PageSpeed Insights** : https://pagespeed.web.dev/
6. **Schema Markup Validator** : https://validator.schema.org/

### Analytics

1. **Google Analytics** : Suivre le trafic
2. **Google Search Console** : Suivre les performances de recherche
3. **Facebook Pixel** : (optionnel) Suivre les conversions

## 📈 Métriques à Suivre

- Position des mots-clés
- Trafic organique
- Taux de rebond
- Temps sur le site
- Pages vues
- Taux de conversion (contacts)
- Backlinks obtenus
- Citations locales

## 🎯 Objectifs SEO

### Objectifs à 3 mois
- Être indexé sur Google
- Apparaître pour les recherches locales "[ville] couturier"
- Obtenir 10-20 visites organiques/mois

### Objectifs à 6 mois
- Position 1-3 pour "[ville] couturier"
- 50-100 visites organiques/mois
- 5-10 contacts/mois via le site

### Objectifs à 12 mois
- Position 1 pour plusieurs mots-clés locaux
- 200+ visites organiques/mois
- 20+ contacts/mois via le site
- Présence sur la première page Google Maps

## 📞 Support

Pour toute question sur le SEO, consultez :
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)

---

**Dernière mise à jour :** 2024
**Version :** 1.0

