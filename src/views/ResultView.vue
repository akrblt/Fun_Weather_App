<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getWeatherByCity } from '../services/weatherService'

const route = useRoute()
const weatherData = ref(null)
const loading = ref(true)
const error = ref(null)


const city = route.params.ville 

onMounted(async () => {
  try {
    loading.value = true
    
    const data = await getWeatherByCity(city)
    weatherData.value = data
  } catch (err) {
    error.value = "Impossible de récupérer les données pour cette ville."
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="result-container">
    <router-link to="/" class="btn-retour">
        <span class="fleche">←<</span> Accueil
    </router-link>
    <div v-if="loading">Chargement des données pour {{ city }}...</div>
    
    <div v-else-if="error">{{ error }}</div>
    
    <div v-else-if="weatherData">
      <h1>Météo à {{ weatherData.name }}</h1>
      <div class="weather-info">
        <p>Température : {{ Math.round(weatherData.main.temp) }}°C</p>
        <p>Humidité : {{ weatherData.main.humidity }}%</p>
        <p>Vent : {{ weatherData.wind.speed }} km/h</p>
        <p>Conditions : {{ weatherData.weather[0].description }}</p>
      </div>
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


</style>
