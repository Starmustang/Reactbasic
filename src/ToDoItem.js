import './ToDoItem.css';
function ToDoItem(props)
{
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completado && "Icon-check--active"}`}>v </span>
      
      <p className={`TodoItem-p ${props.completado && "TodoItem-p--complete"}`}>{props.Text}</p>

      <span className={`Icon Icon-delete`}>X</span>

    </li>
  );
}

export {ToDoItem};