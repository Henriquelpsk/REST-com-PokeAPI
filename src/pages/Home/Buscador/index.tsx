import './styles.css'

interface props {
	busca:string,
	setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({busca, setBusca}: props){
  return(
    <div>	
      <input value={busca} className='form-control buscador' onChange={evento => setBusca(evento.target.value)} placeholder="Buscar" />
    </div>
  );
}