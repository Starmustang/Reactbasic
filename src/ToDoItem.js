function ToDoItem(props)
{
  return (
    <li>
      <span>v {props.completado}</span>
      <p>{props.Text}</p>
      <span>X</span>
    </li>
  );
}

export {ToDoItem}