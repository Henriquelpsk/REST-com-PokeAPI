import { Outlet } from 'react-router-dom';
import './styles.css';

export default function Header(){

	return(
		<div className='background'>
		<nav className='navbar navbar-expand-lg bg-dark d-flex justify-content-between px'>
			<img className='imagem' src="https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png" alt="pokeLogo" />
		</nav>

		<div className='mt-5 pb-5 container'>
			<Outlet />
		</div>
		<footer className='footer'>
			Desenvolvido por Henrique Lima
		</footer>
		</div>
	)
}