# 🍽️ Aquarium - Restaurant Website (Tailwind CSS Version)

Un site web restaurant luxury pour **Aquarium**, un établissement spécialisé dans la cuisine de fruits de mer, construit avec **Tailwind CSS** pour un développement UI ultra-rapide et un design système cohérent.

---

## 📋 Table des matières

- [Aperçu du projet](#aperçu-du-projet)
- [Structure du dossier](#structure-du-dossier)
- [Configuration Tailwind](#configuration-tailwind)
- [Installation et utilisation](#installation-et-utilisation)
- [Pages](#pages)
- [Scripts npm](#scripts-npm)
- [Personnalisation](#personnalisation)
- [Technologies utilisées](#technologies-utilisées)
- [Vs. Version Sass](#vs-version-sass)
- [Contact](#contact)

---

## 🎯 Aperçu du projet

**Aquarium** est un site web luxueux pour un restaurant de fruits de mer haut de gamme. Cette version utilise **Tailwind CSS**, un framework CSS utility-first pour un développement rapide et une maintenance simplifiée.

Le site propose :
- Une page d'accueil avec hero section
- Un menu interactif
- Sections About us, valeurs du restaurant
- Formulaires de réservation et contact
- Design responsive et moderne
- Dark mode ready

---

## 📁 Structure du dossier

```
Tailwindcss/
├── index.html                    # Page d'accueil
├── menu.html                     # Page du menu
├── package.json                  # Configuration npm et dépendances
├── package-lock.json             # Lock file npm
├── tailwind.config.js            # Configuration Tailwind
├── postcss.config.js             # Configuration PostCSS
├── css/
│   └── style.css                 # CSS compilé (généré automatiquement)
├── src/
│   └── input.css                 # Fichier source Tailwind (imports)
├── node_modules/                 # Dépendances npm (auto-généré)
└── assets/
    ├── images/                   # Images du site
    └── logos/                    # Logos et icônes

```

---

## ⚙️ Configuration Tailwind

### `tailwind.config.js`
Fichier de configuration principal de Tailwind :

```javascript
module.exports = {
  content: ["./*.html"],  // Scan les fichiers HTML pour générer les classes
  theme: {
    extend: {
      // Couleurs personnalisées
      colors: {
        orange: {
          DEFAULT: '#E78C15',
          dark: '#7D4700',
        },
        dark: '#0C0E0D',
      },
      // Typographies personnalisées
      fontFamily: {
        title: ['"Antic Didone"', 'serif'],
        base: ['Lato', 'sans-serif'],
        alt: ['Raleway', 'sans-serif'],
      },
      // Breakpoints personnalisés
      screens: {
        'phone': { 'max': '600px' },  // Mobile first
      },
    },
  },
  plugins: [],
}
```

### `postcss.config.js`
Configuration PostCSS pour traitement du CSS :

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},    // Traite les directives Tailwind
    autoprefixer: {},   // Ajoute les préfixes navigateurs
  },
}
```

### `src/input.css`
Fichier source avec les directives Tailwind :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🚀 Installation et utilisation

### Prérequis
- **Node.js** (v14+) et **npm** installés

### 1️⃣ Installation des dépendances

```bash
npm install
```

Cela installe :
- `tailwindcss` - Framework CSS utility-first
- `postcss` - Outil de transformation CSS
- `autoprefixer` - Ajoute les préfixes navigateurs

### 2️⃣ Compiler Tailwind

**Mode développement (watch) :**
```bash
npm run watch
```

Tailwind va surveiller les changements HTML et recompiler le CSS automatiquement.

**Build une seule fois :**
```bash
npm run build
```

Generate le CSS optimisé et minifié.

---

## 📄 Pages

### 1. **index.html** - Page d'accueil
- Hero section attrayante
- Section À propos
- Galerie des plats proposés
- Valeurs du restaurant
- Formulaire de réservation
- Section contact
- Navigation responsive

### 2. **menu.html** - Page du menu
- Menu complet avec catégories
- Descriptions des plats
- Prix
- Design adapté mobile et desktop

---

## 📦 Scripts npm

| Commande | Description |
|----------|-------------|
| `npm run build` | Compile Tailwind une seule fois |
| `npm run watch` | Surveille les changements et recompile automatiquement |

---

## 🎨 Personnalisation

### Ajouter des couleurs personnalisées

Dans `tailwind.config.js` :

```javascript
colors: {
  primary: '#E78C15',
  secondary: '#0C0E0D',
  myColor: '#FF5733',
}
```

Puis utilisation dans HTML : `bg-primary`, `text-myColor`

### Ajouter des breakpoints

```javascript
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'phone': { 'max': '600px' },
}
```

Utilisation : `md:flex`, `phone:hidden`, `lg:w-1/2`

### Ajouter des composants réutilisables

Créer une classe réutilisable dans `src/input.css` :

```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-orange text-white rounded hover:bg-orange-dark transition-colors;
  }
}
```

---

## 🛠️ Technologies utilisées

| Technologie | Version | Usage |
|-------------|---------|-------|
| **HTML5** | - | Structure du contenu |
| **Tailwind CSS** | 3.4.19 | Framework CSS utility-first |
| **PostCSS** | 8.5.6 | Transformations CSS |
| **Autoprefixer** | 10.4.24 | Préfixes navigateurs |
| **Node.js** | 14+ | Environnement d'exécution |

---

## 📱 Breakpoints

Le site est responsive avec les breakpoints :
- **phone** : max-width 600px (mobile)
- **md** : min-width 768px (tablet)
- Breakpoints natifs Tailwind : sm, md, lg, xl, 2xl

---

## 🎨 Palette de couleurs

Définie dans `tailwind.config.js` :

| Couleur | Valeur | Usage |
|---------|--------|-------|
| Orange (Primary) | #E78C15 | CTA, accents |
| Orange Dark | #7D4700 | Hover states |
| Dark | #0C0E0D | Texte principal |
| White | #FFFFFF | Fonds |

---

## ✨ Avantages de Tailwind CSS

✅ **Développement rapide** - Classes utilitaires prêtes à l'emploi  
✅ **Petit fichier CSS** - Purge automatique des classes inutilisées  
✅ **Pas de noms de classes** - Utilisation directe dans le HTML  
✅ **Cohérence de design** - Design system centralisé  
✅ **Responsive facile** - Préfixes pour breakpoints (md:, lg:, etc.)  
✅ **Dark mode** - Support natif du dark mode  
✅ **Extensible** - Configuration simple et personnalisable  

---

## 📊 vs Version Sass

| Aspect | Sass | Tailwind |
|--------|------|----------|
| **Architecture** | SMACSS modulaire | Utility-first |
| **Fichier CSS** | Plus volumineux | Optimisé (purge) |
| **Vitesse de dev** | Moyenne | Très rapide |
| **Courbe d'apprentissage** | Moyenne | Facile |
| **Classes personnalisées** | Recommandé | Minimal |
| **Customisation** | Complète | Très flexible |
| **Build time** | Rapide | Très rapide |

---

## 🔍 Dépannage

### Le CSS ne se met pas à jour
Assurez-vous que que `npm run watch` est lancé et surveille les fichiers HTML.

### Les classes Tailwind ne fonctionnent pas
Vérifiez que le chemin `content` dans `tailwind.config.js` pointe vers les fichiers HTML corrects.

### CSS trop volumineux
Exécutez `npm run build` pour générer un fichier minifié et optimisé.

---

## 📝 Commandes utiles

```bash
# Installation initiale
npm install

# Démarrer le watcher de développement
npm run watch

# Build optimisé pour production
npm run build

# Nettoyer les node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

---

## 📂 Répertoires

### `assets/images/`
Images du site (heroes, plats, backgrounds)

### `assets/logos/`
SVG et icônes du site

### `css/`
CSS compilé (généré automatiquement) - Ne pas éditer manuellement

### `src/`
Source Tailwind avec les directives @tailwind

---

## 📞 Contact

**Restaurant Aquarium**  
📍 1050 5th Ave, New York, NY 10028, USA  
📱 +1 234 567 890  

---


**Dernier mise à jour** : Mars 2026

### 🚀 Commencer rapidement

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le watcher
npm run watch

# 3. Ouvrir index.html dans le navigateur
# 4. Commencer à développer !
```
