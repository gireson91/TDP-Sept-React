import { useState } from "react";

function Counter(){

    const [count, setCount] = useState();

    const handleChange=(event)=>{
        setCount(event.target.value)
        console.log(event);
    }

    return(
        <>
        <input type="number" value={count} onChange={handleChange}/>
        <button onClick={()=>setCount(parseInt(count)+1)}>increment 1</button>
        <button onClick={()=>setCount(parseInt(count)-1)}>decrement 1</button>
        <button onClick={()=>setCount(0)}>reset</button>
        </>
    )

}

export default Counter;