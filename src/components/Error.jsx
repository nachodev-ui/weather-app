import useWeather from "../hooks/useWeather"
import notFound from '../assets/img/Raining-rafiki.png'

const Error = () => {
  const { error } = useWeather()

  return (
    <>
      {error ? (
        <div className="contenedor">
          <p className="error">Lo sentimos, no se encontraron resultados.</p>

          <img src={notFound} alt={`Imagen del error: ${error}`} className="not-found-img" />
        </div>
      ) : null}
    </>
  )
}

export default Error
