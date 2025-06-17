import { useState } from 'react';
import Button from './Button';
function UserCard(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+ 1);
    console.log(count, "count");
    alert("count+1")
  }

    return(
        <>
       <Button handleClick={handleClick}
       text="Click Me"
       >
 <h1>{count}</h1>
       </Button>
        </>
    )
}
export default UserCard;


