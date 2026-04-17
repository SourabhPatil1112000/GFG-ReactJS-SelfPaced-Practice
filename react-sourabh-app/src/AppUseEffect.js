import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

// Parent App component
function AppUseEffect() {
  
  const [count, setCount] = useState([]);
  const [products, setProducts] = useState([]);

  const getData = async(URL) => {
    try{
      const {data: {products}} = await axios.get(URL);
      setProducts(products);
      console.log(products);
    }
    catch(e){
      return e;
    }
  }

  useEffect(() => {
    const URL = `https://dummyjson.com/products`;
    // fetch(URL)
    // .then(res => res.json())
    // .then(data => console.log(data));
    getData(URL);
  },[])

  // useEffect takes 2 params:- 1] Callback Function 2] Dependency Array
  // [] - can contain state or a prop

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click - {count}</button>
      {
        products && products.length > 0 && products.map(product => <p>{product.title}</p>)
      }
    </>
  );
}

export default AppUseEffect;

// Axios:

// A promise-based HTTP client for the browser and Node.js.
// Automatically transforms response data into JSON.
// Supports request and response interception.
// Provides a convenient API for handling requests and responses.
// Handles timeouts and has built-in support for canceling requests.
// Returns a response object that contains additional information like headers, status, and configuration.


// Fetch:

// A built-in web API for making HTTP requests.
// Requires manual conversion of response data to JSON using .json() method.
// Does not support request and response interception.
// Does not provide a way to cancel requests natively.
// Returns a promise that resolves to the Response object, which does not include additional metadata like headers or status in the way Axios does.
