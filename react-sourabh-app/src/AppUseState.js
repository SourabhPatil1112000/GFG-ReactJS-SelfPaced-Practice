import { wait } from '@testing-library/user-event/dist/utils';
import './App.css';
import { useState } from 'react';

// Parent App component
function AppUseState() {
  
  const [value, setValue] = useState(7);

  const onIncrementClick = () => {
    setValue(value + 3);
    setValue((prevCount) => prevCount + 0.5);
  }

  const onDecrementClick = () => {
    setValue(value - 1);
  }

  return (
    <>
      <h1>useState Tutorial</h1>
      <button onClick={onIncrementClick}>Increment</button>
      <button onClick={onDecrementClick}>Decrement</button>
      <div>The value is {value}</div>
    </>
  );
}

export default AppUseState;
// useState() functions returns 2 variables so we use destructuring const[state, useValue] = useState(initialValue)
