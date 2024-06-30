import { ToDoCounter } from './ToDoCounter';
import { ToDoBusqueda } from './ToDoBusqueda';
import { ToDoList } from './ToDoList';
import './App.css';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';

function App() {
  return (
    <div className="App">

      <ToDoCounter/>

      <ToDoBusqueda/>

      <ToDoList>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
      </ToDoList>

      <CreateToDoButton/>

    </div>
  );
}





export default App;
