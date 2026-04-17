import { useEffect, useState } from 'react';
import './App.css';

// Parent App component
function CleanupFun() {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);

    return () => {
      console.log("clean up function");
      clearInterval(timerId)
    }

  }, [])
  // Whenever state variable is changing it calls callback function

  return (
    <>
      <h2>Up-Counter</h2>
      <h2>{count}</h2>
    </>
  );
}

export default CleanupFun;

/*

**Event Listeners: If you add event listeners (e.g., window.addEventListener), 
use a cleanup function to remove them when the component unmounts or before the effect runs again.

useEffect(() => {
  const handleResize = () => {
    console.log("Window resized");
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

**Subscriptions: If you're subscribing to a data source (like WebSocket or an API), 
use the cleanup function to unsubscribe when the component unmounts.

useEffect(() => {
  const subscription = someAPI.subscribe(data => {
    // handle data
  });

  return () => {
    subscription.unsubscribe();
  };
}, []);

**Timers: As you've seen, when using setInterval or setTimeout, 
clear them to avoid memory leaks.

useEffect(() => {
  const timerId = setTimeout(() => {
    console.log("Timeout triggered");
  }, 1000);

  return () => {
    clearTimeout(timerId);
  };
}, []);

**Animations: If you're setting up animations or transitions that require cleanup, 
ensure you cancel them in the cleanup function.

useEffect(() => {
  const animationId = requestAnimationFrame(() => {
    // perform animation
  });

  return () => {
    cancelAnimationFrame(animationId);
  };
}, []);

**Fetch Requests: If you’re making fetch requests, 
you can use a cleanup function to cancel ongoing requests 
if the component unmounts before the request completes.

useEffect(() => {
  let isMounted = true;

  fetchData().then(data => {
    if (isMounted) {
      // set state with data
    }
  });

  return () => {
    isMounted = false;
  };
}, []);

These examples illustrate how cleanup functions help manage 
resources effectively and prevent potential issues in your React applications.

The speaker addresses a common mistake when using the useEffect hook in React, focusing on dependency arrays. 
Using an e-commerce application example, they explain how to check product availability based on a 
user's PIN code. The speaker highlights the importance of including specific state variables in the 
dependency array to avoid unnecessary API calls, rather than using entire objects. The lesson concludes with a 
demonstration of the correct implementation to ensure the API is only called when relevant state changes occur.
*/