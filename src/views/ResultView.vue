<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getWeatherByCity , getForeCastByCity } from '../services/weatherService'

import SunnyScene from '../components/scenes/SunnyScene.vue'
import RainyScene from '../components/scenes/RainyScene.vue'
import WindyScene from '../components/scenes/WindyScene.vue'
import Snowyscene from '@/components/scenes/Snowyscene.vue'
import CloudlyScene from '@/components/scenes/CloudlyScene.vue'
const route = useRoute()
const weatherData = ref(null) // maintenant
const forecastData = ref([]) // 5 jour
const loading = ref(true)
const error = ref(null)

const displayData=ref(null)


const city = route.params.ville 

const sceneMap={
  sun:SunnyScene,
  cloudly:CloudlyScene,
  rainy:RainyScene,
  windy:WindyScene,
  snowy:Snowyscene,
}

// logic to determine the scene
const weatherMain = computed(()=>{
  if(!displayData.value) return 'sun'
  const main=displayData.value.weather[0].main.toLowerCase()
  const wind= displayData.value.wind.speed
  if(wind > 25) return 'windy'
  if(main.includes('cloud')) return 'cloudly'
  if(main.includes('rain') || main.includes('drizzle')) return 'rainy'
  if(main.includes('snow')) return 'snowy'
  
})
// fonc les favoris max 5 jours
const estFavori=ref(false)

const checkInitialFavori=()=>{
  let favs=JSON.parse(localStorage.getItem('weather_favs') || '[]')
  estFavori.value=favs.includes(city)
}

const toggleFavori=()=>{
  let favs=JSON.parse(localStorage.getItem('weather_favs') || '[]')
  if(favs.includes(city)){
    favs=favs.filter(f=>f !== city)
  } else if (favs.length <5){
    favs.push(city)
  } else {
    alert("Maximum 5 favoris")
    return
  }
  localStorage.setItem('weather_favs',JSON.stringify(favs))
  estFavori.value=!estFavori.value
}

const currentScene=computed(()=>{ 
  console.log("Weather maintenant : ",weatherMain.value)
return  sceneMap[weatherMain.value] || SunnyScene

})

onMounted(async () => {
  try {
    loading.value = true
    
    const [currentRes,forecastRes] = await Promise.all([
      getWeatherByCity(city),
      getForeCastByCity(city)
    ])
    weatherData.value = currentRes
    displayData.value=currentRes
    forecastData.value=forecastRes.list.filter(item=>item.dt_txt.includes("12:00"))
    checkInitialFavori()// control etat du favori
  } catch (err) {
    error.value = "Impossible de récupérer les données pour cette ville."
    console.error(err)
  } finally {
    loading.value = false
  }
})

// format date
const formatDate = (dateStr) =>{
  const options = {weekday: 'short',day:'numeric',month:'short'};
  return new Date(dateStr).toLocaleDateString('fr-FR',options)
}
</script>

<template>
  <div class="result-container">
    <router-link to="/" class="btn-retour">
        <span class="fleche">←<</span> Accueil
    </router-link>
    <div v-if="loading" class="loader">Chargement des données pour {{ city }}...</div>
    
    <div v-else-if="error" class="error-msg">{{ error }}</div>
    
    <div v-else-if="displayData">
      <section :class="['weather-scene-card', weatherMain]">
        <button @click="toggleFavori" :class="['btn-favori-badge',{'is-fav': estFavori}]">
          <span class="star-icon">{{ estFavori ? '⭐' : '☆' }}</span>
    <span class="fav-text">
      {{ estFavori ? 'VOTRE VILLE FAVORITE' : 'AJOUTER AUX FAVORIS' }}
    </span>

            
          </button>
        
       <transition name="fade" mode="out-in">
          <component :is="currentScene" :key="weatherMain" />
        </transition>

        <div :class="['weather-info-overlay',weatherMain + '-text']">
          <div class="header-ville">
          <h1>{{ weatherData.name }}</h1>
          
          </div>
          <p class="temp-big">{{ Math.round(displayData.main.temp) }}°C</p>
          <div class="weather-details">
            <p>💧 {{ displayData.main.humidity }}% | 💨 {{ displayData.wind.speed }} km/h</p>
            <p>{{ displayData.weather[0].description }}</p>
          </div>
        </div>
      </section>
  
      <section class="forecast-container">
        <h2>Prévisions sur 5 jours</h2>
        <div class="forecast-grid">
          <div 
            v-for="day in forecastData" 
            :key="day.dt" 
            class="forecast-card" 
            :class="{'active-card': displayData === day}" 
            @click="displayData = day" 
          >
            <p class="date">{{ formatDate(day.dt_txt) }}</p>
            <img :src="`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`" alt="weather-icon">
            <p class="forecast-temp">{{ Math.round(day.main.temp) }}°C</p>
            <p class="forecast-desc">{{ day.weather[0].description }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.weather-scene-card {
  position: relative;
  width: 100%;
  height: 450px;
  margin-top: 20px;
  border-radius: 25px;
  overflow: hidden; 
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
}

/* Background Gradients */

.weather-scene-card.sun  { background: linear-gradient(to bottom, #4facfe, #00f2fe); }
.weather-scene-card.rainy  { background: linear-gradient(to bottom, #203a43, #2c5364); }
.weather-scene-card.cloudly { background: linear-gradient(to bottom, #c0c1c2, #818a94); }
.weather-scene-card.snowy  { background: linear-gradient(to bottom, #83a4d4, #b6fbff); }
.weather-scene-card.windy  { background: linear-gradient(to bottom, #556270, #4ecdc4); }



.temp-display { font-size: 5.5rem; font-weight: 800; margin: 0; }
.description { text-transform: capitalize; font-style: italic; }


.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }




/* Lottie  */
.lottie-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; 
}




.weather-info-overlay {
  z-index: 10;
  text-align: center;
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: color 0.5s ease;
}
.sun-text {
  color: #1a3a5f; 
  text-shadow: none;
}

.cloudly-text, .rainy-text, .snowy-text, .windy-text {
  color: white;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.temp-big {
  font-size: 5rem;
  font-weight: 800;
  margin: 10px 0;
}

.btn-retour {
    display: inline-flex;
    align-items: left;
    margin-bottom: 20px;
    padding: 8px 15px;
    border: 2px solid black;
    background-color: white;
    color: black;
    text-decoration: none;
    font-weight: bold ;
    font-size: 0.9rem;
    transition: all 0.2s ease;
}

.btn-retour:hover {
    background-color: black !important;
    color: white !important;
    transform: translateY(-2px);
}

.fleche {
    margin-right: 8px;
}

.header-ville {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}


.btn-favori-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 15px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px); /* Arkadaki sahneyi hafif bulanıklaştırır */
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: rgb(24, 23, 23);
  font-weight: bold;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
}

.star-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

/* Favori durumunda stil değişimi */
.btn-favori-badge.is-fav {
  background: rgba(255, 215, 0, 0.25); /* Altın rengi şeffaf arka plan */
  border-color: #ffd700;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
}

.btn-favori-badge.is-fav .star-icon {
  transform: scale(1.2) rotate(360deg);
  filter: drop-shadow(0 0 5px #ffd700);
}

.btn-favori-badge:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.4);
}

.btn-favori-badge.is-fav:hover {
  background: rgba(255, 215, 0, 0.4);
}

/* Mobilde yazı çok yer kaplamasın diye ayar */
@media (max-width: 480px) {
  .fav-text {
    display: none; /* Mobilde sadece yıldız kalsın veya yazıyı kısalt */
  }
}


/* YENİ: Seçili olan tahmin kartını vurgula */
.active-card {
  border: 2px solid #000 !important;
  background-color: #f0f0f0 !important;
}


/*
si qqun marche pas cette fonc dessine un ligne rouge auteur de
toutes les structure
*{
    outline: 1px solid rgba(255,0,0,0.2);
}


*/
.current-weather {
  margin-top: 20px;
  padding: 40px;
  border-radius: 20px;
  background: #f0f8ff; 
}

.temp { font-size: 3rem; font-weight: bold; margin: 10px 0; }

.forecast-container { margin-top: 50px; }

.forecast-grid {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.forecast-card {
  background: white;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 12px;
  min-width: 100px;
  transition: transform 0.3s;
}

.forecast-card:hover { transform: translateY(-5px); }

.date { font-weight: bold; font-size: 0.9rem; }
.forecast-temp { font-size: 1.2rem; font-weight: bold; }
.forecast-desc { font-size: 0.8rem; color: #666; }


</style>
