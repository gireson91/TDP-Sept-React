import { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

function Counter() {
  const [counter, setCounter] = useState({
    count: 0,
    history: [],
  });

  const handleChange = (event) => {
    console.log('EVENT:', event);
    const newCount = parseInt(event.target.value, 10);
    const newHistory = counter.history;
    newHistory.push(newCount);

    setCounter({
      count: newCount,
      history: newHistory,
    });
  };

  const handleClick = (event) => {
    const countChange = parseInt(event.target.innerText, 10);
    const newCount = counter.count + countChange;
    const newHistory = counter.history;
    newHistory.push(newCount);

    setCounter({
      count: newCount,
      history: newHistory,
    });
  };

  return (
    <>
      <ul>
        <li>Smash that +1 button a few times</li>
        <li>
          Check that the value in counter is correct
        </li>
        <li>Extension (come back after Ex 3): Run through the history and check each value</li>
      </ul>
      <InputGroup style={{ maxWidth: '30%' }}>
        <Button variant="danger" type="button" onClick={handleClick}>-5</Button>
        <Button variant="danger" type="button" onClick={handleClick}>-1</Button>
        <FormControl style={{ textAlign: 'center' }} type="number" value={counter.count} onChange={handleChange} readOnly />
        <Button variant="success" type="button" onClick={handleClick}>+1</Button>
        <Button variant="success" type="button" onClick={handleClick}>+5</Button>
      </InputGroup>
      {/* <button onClick={() => setCount(0)}>reset</button> */}
      <h2>History:</h2>
      <div>
        {
            counter.history.map((num) => <p>{num}</p>)
        }
      </div>
    </>
  );
}

export default Counter;
