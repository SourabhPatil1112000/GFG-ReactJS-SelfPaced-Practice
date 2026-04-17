import './App.css';
import { act, useReducer, useState } from 'react';

// Parent App component
function AppUseReducer() {

  const initialState = {
    // price:'',
    // discount: '',
    // rating: 4.5
    count : 0
  }

  const reducerFun = (state, action) => {
    switch (action.type){
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + 1
        }
      case 'DECREMENT':
        return {
          ...state,
          count: state.count - 1
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducerFun, initialState);
  console.log(state);

  return (
    <>
     <div className='App'>
        <h2>{state.count}</h2>
        <button onClick={() => dispatch({type: 'INCREMENT', payload: '1234'})}>Increment</button>
        <button onClick={() => dispatch({type: 'DECREMENT', payload: '1234'})}>Decrement</button>
     </div>
    </>
  );
}

export default AppUseReducer;