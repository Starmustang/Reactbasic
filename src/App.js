import { ToDoCounter } from './ToDoCounter';
import { ToDoBusqueda } from './ToDoBusqueda';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
import React from 'react';
import './ToDoCounter.css';
import './ToDoList.css';

const defaultToDos =[
  {Text: 'Cortar cebolla', completado: true},
  {Text: 'Dormir', completado: false},
  {Text: 'comer', completado: false},
  {Text: 'caminar', completado: false},
  {Text: 'Chatear', completado: false},
];


function App() {
  return (
    
      <div>
      <ToDoCounter completado={19} total={71}/>

      <ToDoBusqueda/>

      <ToDoList>
        {defaultToDos.map(todo => <ToDoItem  Text={todo.Text} completado= {todo.completado}/>)}
      </ToDoList>

      <CreateToDoButton/>
      </div>
   
  );
}





export default App;
