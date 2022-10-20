import { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  return (
    <InputGroup>
      <FormControl type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      <Button type="button" onClick={() => navigate(address)}>GO TO</Button>
    </InputGroup>
  );
}

export default Navigation;
