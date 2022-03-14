import "./pokemonCard.css";

function PokemonCard(props) {
  return (
    <div className="cardContainer">
      <h2 className="pokemonName">{props.pokemon.name}</h2>
      <img
        className="pokemonImg"
        src={props.pokemon.sprites.front_default}
        alt={props.pokemon.name}
      />
      <p className="text">Height: {props.pokemon.height}</p>
      <p className="text">Weight: {props.pokemon.weight}</p>
      <p className="text">Base-experience: {props.pokemon.base_experience}</p>
    </div>
  );
}

export default PokemonCard;
