import './App.css';
import { useRef } from 'react';
import { forwardRef } from 'react';

// If you are passing Ref to the Functional Component then you need to use forwardRef
const MyButton = forwardRef(
  (props, ref) => {
  console.log(props);
    return (
      <input ref = {ref} placeholder='Search...' />
    )
  }
)

// Parent App component
function AppUseRefDOMMani() {

  const inputRef = useRef(null);

  const onFocusClick = () => {
    inputRef.current.focus();
  }

  return (
    <>
      <MyButton placeholder="Search Something..." ref={inputRef} />
      <button onClick={onFocusClick}>Focus on Input</button>
    </>
  );
}

export default AppUseRefDOMMani;

