import React from "react";

interface Props {
	name: string;
	id: number;
	image: string;
}

const PokemonList: React.FC = (props) => {
	return (
		<div className="">
			<section className="pokemon-list-container"></section>
		</div>
	);
};

export default PokemonList;
