import logo from './logo.svg';
import './App.css';

var count = 0;
var inputText = "";

//Functional Component - Should Start with Capital Letter & can be directly used in App like HTML tag.
// Should return single root element
function MyButton(){
  return (
    <>
    <p>This is Submit Button</p>
    <button>Submit Button</button>
    </>
  )
}

const Search = () => <input placeholder='Search favourite product....' />;

const Header = () => {
  return(
    <>
    <div style={{backgroundColor:'grey', display: 'flex', flex: '1 0 auto'}}>
      <h1 className='h1Class'>Shopify App</h1>
      <input placeholder='Search'></input>
      <ul style={{display:'flex'}}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
    </>
  )
}

// Parent App component
function MyApp() {
  const name = "Patil"
  const element = <h2>Sourabh inside h2 tag</h2>

  const onIncrementClick = () => {
    count = count + 1;
    console.log({count});
  }

  const onDecrementClick = () => {
    count = count - 1;
    console.log({count});
  }

  const onSearchChange = (event) => {
    console.log(event.target.value);
    inputText = event.target.value;
  }

  const isAdmin = false;

  const isLoading = false;

  function Loader(){
    return(
      <h3>Loading.....</h3>
    )
  }

  //React - Declarative
  //JS - Imperative (We find element -> then we imperatively change innerText)
  // <> tags </> - React Fragment
  return (
    <>
    <h1>Hello And Welcome</h1>
    {
      isAdmin ? <h1>This is Admin Portal</h1>:<h1>This is User Portal</h1>
    }
    {
      isLoading ? <h3>Page Loaded</h3> : <Loader/>
    }
    <Header/>
    {/* // JSX Intro */}
    <div className="App">
      <h1>Hello I am {name}..!!</h1>
      {element}
    </div>
    <div style={{display:"flex", justifyContent:"center"}}>
      <img src='data:image/webp;base64,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'>
    </img>
    </div>
    {/* Functional Components */}
    <h1>JSX</h1>
    <div>
      <button onClick={onIncrementClick}>Increment</button>
    </div>
    <div>
      <button onClick={onDecrementClick}>Decrement</button>
    </div>
    {count}
    <div>
      <input onChange={onSearchChange} placeholder='Search...' />
    </div>
    {inputText}
    <MyButton />
    <Search />
    </>
  );
}

export default MyApp;
