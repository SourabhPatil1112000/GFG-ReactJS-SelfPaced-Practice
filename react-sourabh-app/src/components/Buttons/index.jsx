import { Text } from "../Text";
import { useCount } from "../../context/count-context";

export const Button = () => {

    const {count, setCount} = useCount();
  
    const onButtonClick = () => {
      setCount(count + 1);
    }

    return (
        <>
           <button onClick={onButtonClick}>Click to Increment</button>
           <Text/>
        </>
    )
}