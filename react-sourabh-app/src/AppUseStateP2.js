import './App.css';
import { useState } from 'react';

const AddButton = (props) => {

  console.log(props);

  const [count, setCount] = useState(0);

  const onAddClick = () => {
    setCount(count + 1.5);
  }

  return (
    <button onClick={onAddClick}>Add Button: {count}</button>
  )
}

const SubButton = () => {
  const [count, setCount] = useState(0);

  const onSubClick = () => {
    setCount(count - 2);
  }

  return (
    <button onClick={onSubClick}>Sub Button: {count}</button>
  )
}

function AppUseStateP2() {

  // State Variable is always local to the components
  return (
    <>
      <AddButton/>
      <div></div>
      <SubButton/>
    </>
  );
}

export default AppUseStateP2;