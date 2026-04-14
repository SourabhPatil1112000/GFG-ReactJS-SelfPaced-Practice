import './App.css';
import { useState } from 'react';

// When we pass props from Parent to Child it comes as Object
const AddButton = (props) => {

  console.log(props);
  const { count, setCount, name } = props; // Destructing the Object

  const onAddClick = () => {
    setCount(count + 1.5);
  }

  return (
    <button onClick={onAddClick}>Add Button</button>
  )
}

const SubButton = ({ count, setCount, name }) => { //Destructing Object in passing params

  const onSubClick = () => {
    setCount(count - 2);
  }

  return (
    <button onClick={onSubClick}>Sub Button</button>
  )
}

function AppUseStatePropsDestructingObject() {

  const [count, setCount] = useState(101);
  // Props is used to pass value from Parent to the Child Component

  return (
    <>
      <AddButton count={count} setCount={setCount}/>
      <div></div>
      <SubButton count={count} setCount={setCount}/>
      <div>Current Count is: {count}</div>
    </>
  );
}

export default AppUseStatePropsDestructingObject;

// State Variable is always local to the components