import './ToDoCounter.css';

function ToDoCounter({total, completado})
{
  return (
    <h1 className='TodoCounter'>
      Has completado <span>{completado}</span> de <span>{total}</span> Tareas
    </h1>
  );
}

export {ToDoCounter};