import './App.css';

import ClassComp11 from './AllMyComponents/ClassComp11';
import ClassComp12 from './AllMyComponents/ClassComp12';
import FunctionComp1 from './AllMyComponents/FunctionComp11';
import FunctionComp2 from './AllMyComponents/FunctionComp12';
// The things which we can export function is called as module.

function App() {
  return (
    <div className="App">
      <h1>Component Application</h1>
      {/* Functional Components */}
      <FunctionComp1/>
      <FunctionComp2/>

      {/* Class Components */}
      <ClassComp11/>
      <ClassComp12/>

    </div>
  );
}

export default App;
