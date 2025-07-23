# 🛠️ Tâche Mini-projet

Ce document détaille les étapes d'installation, de configuration de la base de données MongoDB, et les tâches à réaliser pour le mini-projet.

---

## ✅ Installation

1. **Installer les dépendances**
   Depuis le dossier principal du projet, exécute :

   ```bash
   npm install
   ```

2. **Installer React Bootstrap**
   Toujours dans le terminal :

   ```bash
   npm install react-bootstrap bootstrap
   ```

3. **Lancer le projet frontend**

   ```bash
   npm run dev
   ```

4. **Lancer le backend**

   ```bash
   cd backend
   npm start
   ```

---

## 🧩 Initialisation de la base de données (MongoDB)

### 1. Lancer MongoDB

Assurez-vous que MongoDB est bien installé et que le serveur est démarré :

```bash
mongod
```

### 2. Base de données utilisée

> `GeIt` (c’est le nom de la base MongoDB utilisée)

### 3. Créer les collections avec un script

Depuis le dossier `backend/`, exécutez :

```bash
node mongosh_script.js
```

Ce script crée les collections suivantes avec des données de test :

- `clients`
- `produits`
- `commandes`

### 4. Insérer les produits avec image

Assurez-vous d’avoir un dossier `uploads/` (les images doivent y être stockées), puis :

```bash
cd backend
node importProduits.js
```

### 5. Insérer les produits classés par catégories

Toujours depuis `backend/` :

```bash
node importProduitsCategorie.js
```

> 📌 Ce script insère les produits dans la collection `produits`, chacun avec un champ `categorie` (`burger`, `riz`, `dessert`, `jus`, `soupe`), ce qui permet un affichage dynamique via des requêtes filtrées.

---

### 6. Insérer les produits des menus special

Toujours depuis `backend/` :

```bash
node importMenuSpecial.js
```

> 📌 Ce script va insérer automatiquement les plats spéciaux dans la collection produits avec la propriété menuSpecial: true

---

## 📦 Gestion des images (avec Multer)

Les images sont gérées avec la librairie [`multer`](https://www.npmjs.com/package/multer).
Elle permet de sauvegarder les images uploadées dans le dossier `uploads/`.

Installez-la (si ce n’est pas déjà fait, Toujours depuis `backend/`) :

```bash
npm install multer
```

## faite ca dans terminal pour le navbar

```bash
npm install @fortawesome/fontawesome-free
```
---

## 🚧 Répartition des tâches

Les tâches sont réparties entre les équipes suivantes :

### 🧑‍🤝‍🧑 Équipe 1 : Danilo & Princia

* Écriture et gestion des images.

### 🎨 Équipe 2 : Hyacinthe & Victorio

* Conception et design de l'application.

### 🧮 Équipe 3 : Azaria & Najoro

* Création des boutons et intégration du système de paiement.

---

## 📌 Consignes supplémentaires

* Chaque équipe est responsable de sa tâche.
* En cas de difficulté, entraide entre équipes autorisée.
* Une fois les tâches terminées, vérifiez leur bon fonctionnement.

---

## 💡 Suggestions UX côté utilisateur

* Il n’est **pas obligatoire** de s’inscrire ou se connecter pour consulter les menus.
* On peut mettre en place un **formulaire de commande anonyme**, où un client peut :

  * passer une commande,
  * être livré ou récupérer ses plats à un lieu/heure précis,
  * sans être un utilisateur enregistré.

---
```
