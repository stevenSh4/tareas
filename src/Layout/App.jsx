import { useState } from "react";
import { Formulario } from "../Components/Formulario";
import { MostrarTarea } from "../Components/MostrarTarea";
import FlechaAbajo from "../Assets/Images/flechaAbajo.svg";
import FlechaArriba from "../Assets/Images/flechaArriba.svg";
import "../Styles/App.css";

export const App = () => {

  const [tarea, setTarea] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const agregarTarea = (titulo) => {
    const tareaExistente = tarea.find((tarea) => tarea.titulo === titulo);

    if (tareaExistente) {
      alert("Ya existe una tarea con el mismo título.");
      return;
    }
    const nuevaTarea = {titulo};
    setTarea([nuevaTarea, ...tarea]);
  };

  const eliminarTarea = (titulo) => {
    const nuevasTareas = tarea.filter((tarea) => tarea.titulo !== titulo);
    setTarea(nuevasTareas);
  }

  return (
    <main>
      <header className="encabezado">
        <h1 className="titulo">Administrador Tareas</h1>
      </header>
      <div className="contenedor">
        <div className="contenedor-formulario">
          {mostrarFormulario && <Formulario setMostrarFormulario={setMostrarFormulario} onAgregarTarea= {agregarTarea} />}
          <button className="btn-flecha-abajo" onClick={() => setMostrarFormulario(!mostrarFormulario)}>
            <span className="label">{!mostrarFormulario ? 'Abrir Formulario' : 'Cerrar Formulario'}</span>
            <img src={!mostrarFormulario ? FlechaAbajo : FlechaArriba} className="flecha-abajo" />
          </button>
        </div>
        <div className="mostrar-tarea">
          {tarea.map((tareaItem, index) => (
            <MostrarTarea key={index} tareaItem={tareaItem} onEliminarTarea={eliminarTarea} />
          ))}
        </div>
      </div>
    </main>
  );
};