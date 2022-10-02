import React, { useState } from "react"
import TareaFormulario from "./TareaFormulario"
import "../hojas-de-estilo/listaDeTareas.css"
import Tarea from "./Tarea"

function ListaDeTareas() {
  const [tareas, setTareas] = useState([])

  const agregarTarea = (tarea) => {
    console.log(tarea)
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim()

      /* para agregar las tareas al principio del arreglo */
      const tareasActualizadas = [tarea, ...tareas]
      setTareas(tareasActualizadas)
    }
  }

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id)
    setTareas(tareasActualizadas)
  }

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada
      }
      return tarea
    })
    setTareas(tareasActualizadas)
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  )
}

export default ListaDeTareas

/* key es un prop de react para identificar elementos en la lista, debe ser unico */
