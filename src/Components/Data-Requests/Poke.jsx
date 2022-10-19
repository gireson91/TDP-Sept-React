import axios from 'axios';
import { useEffect, useState } from 'react';

function Poke() {
  const [poke, setPoke] = useState();
  const [name, setName] = useState('sneasel');

  // componentDidMount -> was rendered for the first time []
  // componentDidUpdate -> value of [name] changed
  useEffect(() => {
    console.log('Loaded');
    const getPoke = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        console.log('RESPONSE:', res);
        setPoke(res.data);
      } catch (err) {
        // error handling
      }
    };
    getPoke();
  }, [name]);

  return (
    <>
      <label htmlFor="pokeName">
        Name:
        <input type="text" id="pokeName" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      {poke ? (
        <>
          <h2>{poke.name}</h2>
          <section id="pokeGrid">
            <img src={poke.sprites.front_shiny} alt="pokemon" />
            <p style={{ gridRowStart: 1 }}>
              Height:
              {' '}
              <span>{poke.height}</span>
            </p>
            <p style={{ gridRowStart: 2 }}>
              Weight:
              {' '}
              <span>{poke.weight}</span>
            </p>
            <p style={{ gridRowStart: 3 }}>
              Types:
              {' '}
              <span>{poke.types[0].type.name}</span>
            </p>
          </section>
        </>
      )
        : <p>Loading...</p>}
    </>
  );
}

export default Poke;
