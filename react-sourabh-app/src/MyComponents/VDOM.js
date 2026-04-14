import { useState } from "react"

function VDOM(){
    const[text, setText] = useState('');
    return(
        <>
          <div>
            <input onChange={(e) => setText(e.target.value)} placeholder="Enter here..." />
          </div>
          <p>Hello - {text}</p>
        </>
    )
}

export default VDOM;