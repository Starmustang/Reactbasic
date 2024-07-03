import './ToDoList.css';
function ToDoList({children})
{
  return (
   <ul className='lista'>
    {children}
   </ul>
  );
}

export {ToDoList};