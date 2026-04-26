import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './slices/todoSlice';
import { v4 as uuid } from 'uuid';

function App() {

  const [inputText, setInputText] = useState();
  const dispatch = useDispatch();
  const {todos} = useSelector(state => state.todos);
  console.log(todos); 

  const onAddClick = () => {
    if(inputText  === undefined || inputText== ""){
      return;
    }
    dispatch(addTodo({
      id: uuid(),
      todo: inputText
    }));
    setInputText('');
  }

  const onDeleteClick = (id) => {
    dispatch(deleteTodo({
      id: id
    }));
  }

  return (
    <div className="App bg-slate-200 w-screen h-screen">
      <h1 className='text-purple-950 pt-4'>Todo App</h1>
      <div>
        <input value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder='Enter a todo...' />
        <button onClick={onAddClick}>Add</button>
      </div>
      {
        todos?.length > 0 && todos.map(todo => (
          <div>
            <span>{todo.todo}</span>
            <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
