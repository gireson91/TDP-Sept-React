import { useState } from "react";

function Counter(){

    const [counter, setCounter] = useState({
        count: 0,
        history: []
    });

    const handleChange= (event) => {
        console.log("EVENT:", event);
        const newCount = parseInt(event.target.value);
        const newHistory = counter.history;
        newHistory.push(newCount);
        
        setCounter({
            count: newCount,
            history: newHistory
        })

    }

    const handleClick = (event) => {
        const countChange = parseInt(event.target.innerText);
        const newCount = counter.count + countChange;
        const newHistory = counter.history;
        newHistory.push(newCount);
    
        setCounter({
            count: newCount,
            history: newHistory
        });
    }

    return(
        <>
            <input type="number" value={counter.count} onChange={handleChange}/>
            <button onClick={handleClick}>+1</button>
            <button onClick={handleClick}>-1</button>
            {/* <button onClick={() => setCount(0)}>reset</button> */}
            <h2>History:</h2>
            <div>
                {
                    counter.history.map(num => <p>{num}</p>)
                }
            </div>
        </>
    )

}

export default Counter;