import { useState } from "react";

function UseStateHook(){
    const [count, setCount] = useState(2);

    function handleClick(){
        setCount(count+3);
    }

    return(
        <button onClick={handleClick}>
            Click {count} me
        </button>
    );
}

export default UseStateHook;