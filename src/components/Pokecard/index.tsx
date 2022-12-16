import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function Pokecard({item}:any){

  const navigate = useNavigate();

  const selectPoke = () => {
    navigate(`/pokemon/${item.data.id}`, item.data.id);
  };

  return(
    <button className="col card pokemon d-flex flex-column p-3" key={item.data.id} onClick={selectPoke}>
      <div className='nameContainer'>
        <h1 className='name'> {item.data.name} </h1>
        <p>#{item.data.id}</p>
      </div>
      <img className='img ' src={item.data.sprites.front_default} alt={item.data.nome} />
      {item.data.types.length > 1
        ? <div className='d-flex justify-content-center typeContainer'>
          <div className={`type ${item.data.types[0].type.name}`}>{item.data.types[0].type.name}</div> 
          <div className={`type ${item.data.types[1].type.name}`}>{item.data.types[1].type.name}</div>
        </div>
        : 
        <div className='d-flex justify-content-center typeContainer2'>
          <div className={`type ${item.data.types[0].type.name}`}>{item.data.types[0].type.name}</div>
        </div>}

    </button>
  );
}