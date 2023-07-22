import { useState, createContext } from "react"
import axios from "axios"

const WeatherContext = createContext()

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState({
    ciudad: "",
    pais: "",
  })
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const searchData = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    })
  }

  const consultWeather = async () => {
    setLoading(true)
    setError('')

    const { ciudad, pais } = search

    try {
      const appId = import.meta.env.VITE_OPEN_WEATHER_API_KEY

      const url = `${import.meta.env.VITE_OPEN_WEATHER_URL}?q=${ciudad},${pais}&limit=1&appid=${appId}`

      const { data } = await axios(url)
      const { lat, lon } = data[0]

      const weatherLatLonUrl = `${import.meta.env.VITE_LAT_LON_URL}?lat=${lat}&lon=${lon}&appid=${appId}`

      const { data: weather } = await axios(weatherLatLonUrl)

      setResult(weather)
    } catch (error) {
      setError('No se encontraron resultados')
    } finally {
      setLoading(false)
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        search,
        searchData,
        consultWeather,
        result,
        loading,
        error,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export { WeatherProvider }

export default WeatherContext
