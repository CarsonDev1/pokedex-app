import React from "react";

interface Props {
	pokemons: Pokemon[];
}

const PokemonCollection: React.FC = (props) => {
	const { pokemons } = props;
	return <div>PokemonCollection</div>;
};

export default PokemonCollection;
