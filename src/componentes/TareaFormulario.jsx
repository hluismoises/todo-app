import React, { useState } from "react"
import "../hojas-de-estilo/tareaFormulario.css"
import { v4 as uuidv4 } from "uuid"

function TareaFormulario(props) {
  const [input, setInput] = useState("")

  const manejarCambio = (e) => {
    setInput(e.target.value)
    //console.log(e.target.value)
  }

  const manejarEnvio = (e) => {
    /* para que la aplicacion no se vuelva a cargar cuando hemos enviado un formulario */
    e.preventDefault()
    console.log("enviando formulario")
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    }

    //console.log(tareaNueva)
    props.onSubmit(tareaNueva)
  }

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escriba una Tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  )
}

export default TareaFormulario
