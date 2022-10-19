import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  return (
    <>
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      <button type="button" onClick={() => navigate(address)}>Go TO</button>
    </>
  );
}

export default Navigation;
