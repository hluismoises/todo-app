import "./App.css"
import frecodecampLogo from "./imagenes/FreeCodeCamp_logo.png"
import Tarea from "./componentes/Tarea.jsx"
import TareaFormulario from "./componentes/TareaFormulario"
import ListaDeTareas from "./componentes/ListaDeTareas"

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={frecodecampLogo}
          className="freecodecamp-logo"
          alt="freecodecamp logo"
        />
      </div>

      <div className="tarea-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  )
}

export default App
