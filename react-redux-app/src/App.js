import logo from './logo.svg';
import './App.css';
import { Counter } from './component/Counter';

function App() {
  return (
    <div className="App">
      <h1>Redux React</h1>
      <Counter/>
    </div>
  );
}

export default App;

/*

Setting Up the React App: It begins by demonstrating how to set up a new React application using the command npx create-react-app.

Installing Redux Toolkit: The tutorial emphasizes the importance of the Redux Toolkit for efficient state management and guides 
viewers on how to install it.

Folder Structure: It discusses the recommended folder structure, including the creation of a store directory and a store.js file 
to organize the Redux related files.

Creating Slices: The concept of 'slices' is introduced for managing state and reducers. The video walks through the creation of a 
counter slice, implementing both increment and decrement functionalities.

Using Hooks: It explains how to utilize the useDispatch and useSelector hooks to manage state and dispatch actions within components 
effectively.

Provider Setup: The importance of wrapping the application in the Redux Provider is highlighted, ensuring that the store is accessible 
across the entire application.

Action Dispatching: The video illustrates how to dispatch actions when buttons are clicked, detailing the structure of action types and 
payloads.

Reducer Logic: It touches on how reducers work, taking the current state and action to return a new state based on the defined logic.

Future Lessons: The video concludes with encouragement to practice the decrement functionality and hints at upcoming lessons focused on 
asynchronous operations with Redux.

*/

/*
Imagine you have a toy box (that's your app) and you want to keep track of how many toys you have.

Redux is like a special helper that remembers how many toys you have and can help you add or take away toys.
When you want to add a toy, you tell Redux, and it updates the number of toys for you.
When you want to take a toy away, you also tell Redux, and it takes one away from the count.
You can ask Redux anytime how many toys you have, and it will tell you!
So, Redux helps you keep everything organized and makes sure you always know how many toys (or things) you have!
*/
