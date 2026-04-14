import { useRef } from 'react';
import './App.css';
import { useState } from 'react';

// Parent App component
function AppUseRef() {

  const[count, setCount] = useState(0);
  const timerRef = useRef("");

  const onStartClick = () => {
    timerRef.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
    console.log({timerRef});
  }

  const onStopClick = () => {
    clearInterval(timerRef.current);
  }

  return (
    <>
     <p>Count - {count}</p>
     <button onClick={onStartClick}>Start</button>
     <button onClick={onStopClick}>Stop</button>
    </>
  );
}

export default AppUseRef;
// useRef() functions returns 
