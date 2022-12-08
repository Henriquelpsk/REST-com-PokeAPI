import axios from "axios";

const getPokemons = () => {
	let endpoints = [];
	for (let i = 1; i < 152; i++) {
		endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
	}
	return (axios.all(endpoints.map(endpoint => axios.get(endpoint))))
};
export default getPokemons;