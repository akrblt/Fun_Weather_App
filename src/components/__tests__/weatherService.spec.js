import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'
import { getWeatherByCity } from '../../services/weatherService'

// On "moque" axios : on empêche le vrai appel internet 
// pour ne pas consommer tes crédits API OpenWeather.
vi.mock('axios')

describe('Tests du Service Météo', () => {

  it('getWeatherByCity doit retourner les données météo avec succès', async () => {
    // 1. On prépare une fausse réponse (simulacre) comme si elle venait de l'API
    const fakeResponse = {
      data: {
        name: 'Paris',
        main: { temp: 20 },
        weather: [{ description: 'ciel dégagé' }]
      }
    }

    // 2. On dit à Axios : "Si on t'appelle, renvoie cette fausse réponse"
    axios.get.mockResolvedValue(fakeResponse)

    // 3. On appelle TA fonction
    const result = await getWeatherByCity('Paris')

    // 4. On vérifie que le résultat est correct
    expect(result.name).toBe('Paris')
    expect(result.main.temp).toBe(20)
    expect(result.weather[0].description).toBe('ciel dégagé')
  })

  it('doit lever une erreur si l’appel API échoue', async () => {
    // On simule une erreur réseau ou une ville introuvable (404)
    axios.get.mockRejectedValue(new Error('Erreur API'))

    // On vérifie que ta fonction "throw" (lance) bien l'erreur
    await expect(getWeatherByCity('VilleInexistante')).rejects.toThrow()
  })

})