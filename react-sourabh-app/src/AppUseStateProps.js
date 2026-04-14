import './App.css';
import { useState } from 'react';

// When we pass props from Parent to Child it comes as Object
const AddButton = (props) => {

  console.log(props);

  const onAddClick = () => {
    props.setCount(props.count + 1.5);
  }

  return (
    <button onClick={onAddClick}>Add Button</button>
  )
}

const SubButton = (props) => {

  console.log(props);

  const onSubClick = () => {
    props.setCount(props.count - 2);
  }

  return (
    <button onClick={onSubClick}>Sub Button</button>
  )
}

function AppUseStateProps() {

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

export default AppUseStateProps;

// State Variable is always local to the components