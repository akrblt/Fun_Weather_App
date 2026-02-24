<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getWeatherByCity , getForeCastByCity } from '../services/weatherService'

const route = useRoute()
const weatherData = ref(null) // maintenant
const forecastData = ref([]) // 5 jour
const loading = ref(true)
const error = ref(null)


const city = route.params.ville 

onMounted(async () => {
  try {
    loading.value = true
    
    const [currentRes,forecastRes] = await Promise.all([
      getWeatherByCity(city),
      getForeCastByCity(city)
    ])
    weatherData.value = currentRes
    forecastData.value=forecastRes.list.filter(item=>item.dt_txt.includes("12:00"))
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
    
    <div v-else-if="weatherData">
      <section class="current-weather">
      <h1>Météo à {{ weatherData.name }}</h1>
      <div class="main-info">
        <img :src="`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`" alt="weather-icon">
        <p>Température : {{ Math.round(weatherData.main.temp) }}°C</p>
        <p>Humidité : {{ weatherData.main.humidity }}%</p>
        <p>Vent : {{ weatherData.wind.speed }} km/h</p>
        <p>Conditions : {{ weatherData.weather[0].description }}</p>
      </div>
      </section>
      <section class="forecast-container">
        <h2>Prévisions sur 5 jours</h2>
        <div class="forecast-grid">
          <div v-for="day in forecastData" :key="day.dt" class="forecast-card">
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
  background: #f0f8ff; /* Bu renk daha sonra animasyona göre değişecek */
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
