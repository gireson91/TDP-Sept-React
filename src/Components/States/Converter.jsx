/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { FormControl, InputGroup, Row } from 'react-bootstrap';

function Converter() {
  const [miles, setMiles] = useState();
  const [km, setKm] = useState();

  const changeMiles = (event) => {
    console.log('EVENT: ', event);
    const newMiles = parseFloat(event.target.value, 10) || 0;
    setMiles(newMiles);
    setKm(newMiles * 1.6);
  };

  const changeKm = (event) => {
    console.log('EVENT: ', event);
    const newKm = parseFloat(event.target.value, 10) || 0;
    setKm(newKm);
    setMiles(newKm / 1.6);
  };

  return (
    <Row>
      <ul>
        <li>Jam a value in miles</li>
        <li>
          Check it get properly converted to KMs (
          {'Hint: Don\'t use getText(), use getAttribute()'}
          )
        </li>
        <li>{'Do the same for Kms -> miles'}</li>
      </ul>
      <InputGroup>
        <InputGroup.Text>Miles</InputGroup.Text>
        <FormControl type="number" value={parseFloat(miles, 10)} onChange={changeMiles} />
      </InputGroup>
      <InputGroup className="mt-4">
        <InputGroup.Text>{'KM: '}</InputGroup.Text>
        <FormControl type="number" value={km} onChange={changeKm} />
      </InputGroup>
    </Row>
  );
}

export default Converter;
