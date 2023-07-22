import Formulario from "./Formulario"
import Result from "./Result"
import Loading from "./Loading"
import Error from "./Error"
import useWeather from "../hooks/useWeather"

export const WeatherApp = () => {
  const { result, loading, error } = useWeather()

  return (
    <>
      <main className="dos-columnas">
        <Formulario />


        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : result.name ? (
          <Result />
        ) : null}
      </main>
    </>
  )
}
