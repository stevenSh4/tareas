import "../Styles/MostrarTarea.css";

export const MostrarTarea = ({ tareaItem, onEliminarTarea }) => {

  if (!tareaItem) {
    return null;
  }

  const { titulo } = tareaItem;

  const handleEliminar = () => {
    onEliminarTarea(titulo);
  }

  return (
    <div className="tarea">
      <h2 className="titulo-tarea">{titulo}</h2>
      <button onClick={handleEliminar} className="btn-eliminar">Eliminar</button>
    </div>
  );
};