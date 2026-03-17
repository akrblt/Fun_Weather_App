
# ☀️ Weather App 2026 ☁️
Bienvenue sur Weather App, une application météo interactive et amusante conçue avec Vue 3. L'application ne se contente pas de donner des chiffres : elle adapte toute l'ambiance visuelle selon la météo réelle de la ville recherchée grâce à des animations Lottie dynamiques.

## ✨ Fonctionnalités
 Recherche en temps réel : Trouvez la météo de n'importe quelle ville dans le monde via l'API OpenWeather.

 Scènes Dynamiques : 5 ambiances visuelles uniques (Soleil, Pluie, Neige, Nuages, Vent) avec des animations fluides.

 Prévisions sur 5 jours : Cliquez sur un jour de la semaine pour changer instantanément la scène et voir le temps qu'il fera.

 Système de Favoris : Sauvegardez jusqu'à 5 villes favorites (stockées localement dans votre navigateur).

 Design Responsif : Une expérience optimisée pour mobile, tablette et ordinateur.

# 🚀 Technologies Utilisées
 Framework : Vue.js 3 (Composition API)

 Router : Vue Router

 Client HTTP : Axios

 Animations : Vue3-Lottie (LottieFiles)

 Tests : Vitest & Vue Test Utils

 API : OpenWeatherMap API

#  🛠️ Installation et Lancement
###  Cloner le projet :



git clone https://github.com/ton-pseudo/fun_weather_app.git
cd fun_weather_app
Installer les dépendances :

Bash

npm install
Configurer les variables d'environnement :
Créez un fichier .env à la racine et ajoutez votre clé API :

Kod snippet'i

VITE_WEATHER_API_KEY=votre_cle_api_ici
Lancer en mode développement :

Bash

npm run dev
🧪 Tests Unitaires
La fiabilité de l'application est assurée par une suite de tests unitaires couvrant les services, le routeur et les composants visuels.

### Exécuter les tests :

Bash

npm run test
Les tests vérifient notamment :

La récupération correcte des données via l'API (avec simulation d'Axios).

La configuration des routes et des paramètres.

Le rendu correct du nombre d'animations Lottie par scène (avec simulation de Lottie pour la performance).

# 📂 Structure du Projet

<img width="615" height="173" alt="Screen Shot 17 03 2026 at 15 33" src="https://github.com/user-attachments/assets/5b1f262c-53c2-461b-95ae-3d412551df3f" />


 
# 📝 Auteur
# Ahmet KARABULUT  – Projet TPI 2026
