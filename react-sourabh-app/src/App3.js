import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LanguageList from './MyComponents/LanguageList';
import Loading from './MyComponents/Loading';
import VDOM from './MyComponents/VDOM';
import UseStateHook from './MyComponents/UseStateHook';
import Form from './MyComponents/Form';

function App3() {
  const [message, setMessage] = useState("Hello World!");

  // Functional component with props
  function Greet(props) {
    return <h2>Hello, {props.name}!</h2>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Form/>
    <UseStateHook />
      <VDOM/>
      <Loading/>
      <LanguageList/>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Welcome to React!")}>
        Click Me!
      </button>
      ReactDOM.render(<Greet name="Sourabh using Props" />)
    </div>
  );
}

export default App3;