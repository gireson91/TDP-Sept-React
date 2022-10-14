import { useState } from "react";



function Converter() {
    const [miles, setMiles] = useState(0);
    const [km, setKm] = useState(0);

    const changeMiles = (event) => {
        console.log("EVENT: ", event);
        const newMiles = parseFloat(event.target.value) || 0;
        setMiles(newMiles);
        setKm(newMiles * 1.6);
    }

    const changeKm = (event) => {
        console.log("EVENT: ", event);
        const newKm = parseFloat(event.target.value) || 0;
        setKm(newKm);
        setMiles(newKm / 1.6);
    }

    return ( 
        <>
            <label>Miles</label>
            <input type="number" value={miles} onChange={changeMiles} min={0}/>
            <br/>
            <label>KM:</label>
            <input type="number" value={km} onChange={changeKm} min={0}/>
        </>
     );
}

export default Converter;