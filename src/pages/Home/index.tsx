import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokecard from '../../components/Pokecard';
import Buscador from './Buscador';
import './styles.css';

export default function Pokemon(){
  
  const [busca, setBusca] = useState('');
  const [lista, setLista] = useState<any[]>([]);

  function testaBusca(titulo: string) {
    const regex = new RegExp(busca, 'i');
    return (
      regex.test(titulo)
    );
  }

  useEffect(() => {
    if(busca === ''){
      getPokemons();
    }else{
      const novaLista = lista.filter((item) => testaBusca(item.data.name));
      setLista(novaLista);
    }
  }, [busca]);

  
  const getPokemons = () => {
    const endpoints = [];
    for (let i = 1; i < 152; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map(endpoint => axios.get(endpoint))).then((res) => setLista(res));
  };


  return (
    <>
      <div className='d-flex justify-content-between mb-3'>
        <select disabled className="form-select selectGen" defaultValue='1' aria-label="Default select example">
          <option value='1'>1ª Geração</option>
          <option value="2">2ª Geração</option>
          <option value="3">3ª Geração</option>
          <option value="4">4ª Geração</option>
          <option value="5">5ª Geração</option>
          <option value="6">6ª Geração</option>
          <option value="7">7ª Geração</option>
          <option value="8">8ª Geração</option>
        </select>
        <Buscador busca={busca} setBusca={setBusca} />
      </div>

      <div className="row d-flex gap-3 justify-content-md-center">
        {lista.map((item) =>
          <Pokecard item={item} key={item.data.id}/>
        )}

      </div>
    </>
  );
}