import './ToDoCounter.css';

function ToDoCounter({total, completado})
{
  return (
    <h1>
      Has completado {completado} de {total} Tareas
    </h1>
  );
}

export {ToDoCounter}