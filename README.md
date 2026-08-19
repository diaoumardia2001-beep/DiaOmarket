# 🛒 DiaOmarket

**Marketplace multi-vendeurs moderne, professionnelle et évolutive — conçue pour le marché ivoirien et africain.**

---

## 🎯 Vision

DiaOmarket ambitionne de devenir une plateforme marketplace de référence en Côte d'Ivoire et en Afrique. Elle connectera acheteurs et vendeurs dans un écosystème numérique moderne, fiable et accessible.

### Fonctionnalités prévues

- 🔍 **Recherche de produits** — Trouver facilement des produits par catégorie, mot-clé, localisation
- 🏪 **Boutiques vendeurs** — Chaque vendeur dispose de sa propre boutique en ligne
- 📦 **Gestion des commandes** — Suivi complet du cycle de vie des commandes
- 💰 **Paiement intégré** — Solutions de paiement adaptées au marché africain
- 🚚 **Livraison** — Gestion et suivi des livraisons
- 💬 **Négociation** — Possibilité de négocier certains produits
- 📱 **WhatsApp Business** — Intégration pour la communication vendeur-acheteur
- 🔗 **Partage social** — Partager des produits sur les réseaux sociaux
- 🤖 **Intelligence artificielle** — Fonctionnalités IA à venir (recommandations, recherche intelligente)

---

## 🏗️ Architecture

```text
DiaOmarket/
│
├── frontend/          # Application Web (React + TypeScript + Vite)
├── backend/           # API REST (Node.js + Express + TypeScript)
├── docs/              # Documentation technique
├── .gitignore
└── README.md
```

### Architecture API-first

Le backend est conçu comme une **API REST indépendante**, consommable par plusieurs clients :

```text
                    ┌── React Web (frontend/)
                    │
Utilisateur ────────┤
                    │
                    └── Flutter Mobile (à venir)
                           │
                           ▼
                    ┌─────────────┐
                    │  Node.js    │
                    │  Express    │
                    │  API REST   │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │ PostgreSQL  │
                    │ + Prisma    │
                    └─────────────┘
```

---

## 🛠️ Stack Technique

| Couche       | Technologie                        |
| ------------ | ---------------------------------- |
| **Frontend** | React, TypeScript, Vite, Tailwind CSS |
| **Backend**  | Node.js, Express, TypeScript       |
| **Base de données** | PostgreSQL + Prisma ORM      |
| **Mobile**   | Flutter *(prévu ultérieurement)*   |

---

## 📱 Application Mobile

Une application mobile **Flutter** est prévue dans les phases futures du projet. L'architecture backend API-first est conçue dès le départ pour supporter ce client mobile.

---

## 📊 Statut du Projet

| Phase                  | Statut           |
| ---------------------- | ---------------- |
| Initialisation projet  | ✅ En cours       |
| Architecture de base   | 🔲 À venir        |
| Authentification       | 🔲 À venir        |
| Marketplace            | 🔲 À venir        |
| Paiement               | 🔲 À venir        |
| Livraison              | 🔲 À venir        |
| Application mobile     | 🔲 À venir        |
| Intelligence artificielle | 🔲 À venir     |

---

## 🚀 Démarrage Rapide

### Prérequis

- Node.js >= 18
- npm >= 9
- Git

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

---

## 📄 Licence

Projet privé — Tous droits réservés.
