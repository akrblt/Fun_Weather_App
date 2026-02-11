import axios from 'axios';

// take a apikey from .env
const API_KEY=import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL='https://api.openweathermap.org/data/2.5/weather';

export async function getWeatherByCity(city){
    try {
        const response = await axios.get(BASE_URL, {
            params:{
                q: city,
                appid: API_KEY,
                units: 'metric',
                lang: 'fr' // reponse francais
            }
        })
        return response.data
    } catch (error){
        // gestion d'erreur
        console.error("Erreur API météo : ",error)
        throw error
    }
    
    

}