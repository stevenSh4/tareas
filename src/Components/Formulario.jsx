import { useState } from "react";
import "../Styles/Formulario.css";

export const Formulario = ({ onAgregarTarea }) => {
  
  const [titulo, setTitulo] = useState('');

  const handleTitulo = (event) => {
    setTitulo(event.target.value);
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado, título:", titulo);
    if (titulo.trim() !== '') {
      onAgregarTarea(titulo);
      setTitulo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="tareas">
      <input 
        type="text" 
        className="text" 
        name="titulo"
        placeholder="Agregar tarea" 
        value={titulo} 
        onChange={handleTitulo} 
      />
      <button type="submit" className="btn-agregar">
        Agregar tarea
        </button>
    </form>
  );
};