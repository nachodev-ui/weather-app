import useWeather from "../hooks/useWeather"
import weatherImage from "../assets/img/weatherImage.png"

const Result = () => {
  const { result } = useWeather()

  const { name, main } = result

  // Grados Kelvin
  const kelvin = 273.15

  return (
    <>
      <div className="contenedor clima">
        <img
          src={weatherImage}
          alt={`Imagen default clima`}
          className="weather-image"
        />

        <h2>
          La temperatura actual de <span className="ciudad">{name}</span> es
        </h2>

        <p>
          {parseInt(main.temp - kelvin)} <span> &#x2103; </span>
        </p>

        <div className="temp_min_max">
          <p>
            Máxima: {parseInt(main.temp_max - kelvin)} <span> &#x2103; </span>
          </p>
          <p>
            Mínima: {parseInt(main.temp_min - kelvin)} <span> &#x2103; </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Result
