import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App: React.FC = () => {
	const [pokemons, setPokemons] = useState<string[]>([]);
	useEffect(() => {
		const getPokemon = async () => {
			const res = await axios.get("https://pokeapi.co/api/v2/");
		};
	}, []);
	return (
		<div className="App">
			<div className="container">
				<header className="pokemon-header"> Pokemon</header>
			</div>
		</div>
	);
};

export default App;
