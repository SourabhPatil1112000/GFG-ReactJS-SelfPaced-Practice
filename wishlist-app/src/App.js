import { useState } from 'react';
import './App.css';
import {v4 as uuid} from "uuid";

function App() {

  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  const onTodoInputChange = (e) => {
     setTodo(e.target.value);
  }

  const onAddTodoClick = () => {
    if (!todo || todo.trim() === "") {
    return; // Added this check for not getting anything empty filed to get added
  }
    setTodoList([...todoList, {id: uuid(), todo: todo, isCompleted: false}]);
    setTodo("");
  }

  const onDeleteClick = (id) => {
    const updatedTodoList = todoList.filter(todo => todo.id != id);
    setTodoList(updatedTodoList);
  }

  const onTodoCheckChange = (id) => {
    const updatedTodoList = todoList.map(todo => todo.id == id ? {...todo, isCompleted: !todo.isCompleted}: todo);
    console.log(updatedTodoList);
    setTodoList(updatedTodoList);
  }

  console.log(todoList);

  return (
    <div className="App">
      <h1>My Wishlist</h1>
      <input value={todo} onChange={onTodoInputChange} placeholder="Add your wishlist here..." />
      <button onClick={onAddTodoClick}>Add</button>
      <div>
          {
            todoList?.length > 0 && todoList.map(todo => (
              <div key={todo.id}>
                <label>
                  <input onChange={() => onTodoCheckChange(todo.id)} type='checkbox' />
                  <span className={`${todo.isCompleted ? 'strike-through': ''}`}>{todo.todo}</span>
                </label>
                <button onClick={() => onDeleteClick(todo.id)}>Delete</button> 
              </div>
            ))
          }
      </div>
    </div>
  );
}

export default App;

// Call the function only when Delete button is clicked 
// <button onClick={() => onDeleteClick(todo.id)}>Delete</button>