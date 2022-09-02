import React, { useEffect, useState } from "react";
import { Detail } from "../App";
import "./pokemon.css";

interface Props {
	viewDetail: Detail;
	setDetail: React.Dispatch<React.SetStateAction<Detail>>;
	abilities:
		| {
				name: string;
				ability: string;
		  }[]
		| undefined;
	name: string;
	id: number;
	image: string;
}

const PokemonList: React.FC<Props> = (props) => {
	const { name, id, image, abilities, viewDetail, setDetail } = props;
	const [isSelected, setSelected] = useState(false);
	useEffect(() => {
		setSelected(id === viewDetail?.id);
	}, [viewDetail]);
	return (
    <div className="">
      {isSelected ? (
        <section className="pokemon-list-detailed">
          <div className="detail-container">
            <p className="detail-close">
              X
            </p>
            <div className="detail-nifo">
              <img src={image} alt="pokemon" className="detail-img" />
              <p className="detail-name">{ name}</p>
            </div>
            <div className="detail-skill">
              <p className="detail-ability"> Abilities: {abilities?.map((ab: any) => {
						return <div className="">{ab.ability.name}</div>;
					})}</p>
            </div>
          </div>
        </section>
      ) : ()}
			<section className="pokemon-list-container">
				<p className="pokemon-name">{name}</p>
				<img src={image} alt="pokemon" />
				<div className="detail-skill">
					<p className="detail-ability"> Abilities: </p>
					{abilities?.map((ab: any) => {
						return <div className="">{ab.ability.name}</div>;
					})}
				</div>
			</section>
		</div>
	);
};

export default PokemonList;
