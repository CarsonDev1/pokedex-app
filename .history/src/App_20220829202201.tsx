import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App: React.FC = () => {
	const [pokemons, setPokemons] = useState([]);
	return (
		<div className="App">
			<div className="container">
				<header className="pokemon-header"> Pokemon</header>
			</div>
		</div>
	);
};

export default App;
