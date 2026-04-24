import { wait } from '@testing-library/user-event/dist/utils';
import './App.css';
import { useState } from 'react';
import { Button } from './components/Buttons';

/* 
When we pass props from one component to another nd that again passess 
to the another components forming the chaining is called as prop drilling
*/
function PropDrilling() {
  
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <Button count={count} onButtonClick={onButtonClick}/>
    </>
  );
}

export default PropDrilling;
