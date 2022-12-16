import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Pokemom(){

  const [lista, setLista] = useState<any[]>([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    const endpoints = [];
    endpoints.push(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    axios.all(endpoints.map(endpoint => axios.get(endpoint))).then((res) => setLista(res));
  };

  return(
    <>
      <div className="card">
        {lista.map((item, key) =>
          <div key={key}>{item.data.name}</div>
        )}
      </div>
    </>
  );
}