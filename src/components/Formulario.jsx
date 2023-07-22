import { useState } from "react"
import useWeather from "../hooks/useWeather"
import '../index.css'

const Formulario = () => {
  const [alert, setAlert] = useState('')
  const { search, searchData, consultWeather } = useWeather()
  const { ciudad, pais } = search

  const handleSubmit = (e) => {
    e.preventDefault()

    if (Object.values(search).includes('')) {
        setAlert('Todos los campos son obligatorios')
        return
    }

    setAlert('')
    consultWeather()
  }

  return (
    <div className="contenedor">

    {alert && <div className="alerta">{alert}</div>}

      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={searchData}
            value={ciudad}
            placeholder="Ej. Santiago, Madrid..."
          />
        </div>

        <div className="campo">
          <label htmlFor="pais">País</label>
          <select id="pais" name="pais" onChange={searchData} value={pais}>
            <option value="">Seleccione un país</option>
            <option value="US">Estados Unidos</option>
            <option value="CL">Chile</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
        </div>

        <input type="submit" value="Consultar clima" />
      </form>
    </div>
  )
}

export default Formulario
