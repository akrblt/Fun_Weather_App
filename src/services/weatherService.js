import axios from 'axios';

// take a apikey from .env
const API_KEY=import.meta.env.VITE_WEATHER_API_KEY;
// ce lien permet de recuperer de donnes via Api
const BASE_URL='https://api.openweathermap.org/data/2.5';

export async function getWeatherByCity(city){
    try {
        const response = await axios.get(`${BASE_URL}/weather`, {
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

 // 5 jours de donnes avec la ville

 export async function getForeCastByCity(city) {
    try {
        const response = await axios.get(`${BASE_URL}/forecast`,{
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
                lang: 'fr'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erreur API météo (Forecat): ",error)
        throw error;
    }
    
 }