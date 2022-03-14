import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemonAdded, pokemonRemoved } from "./features/pokemonSlice";

import PokemonCard from "./features/PokemonCard";

import "./app.css";

function App() {
  const allPokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => response.json())
      .then((pokemon) => {
        dispatch(pokemonAdded(pokemon));
      });
  }

  function addRandomPokemon() {
    allPokemon.length > 3 &&
      dispatch(pokemonRemoved(allPokemon[allPokemon.length - 1]));
    const randInt = getRandomInt(151);

    dispatch(fetchPokemon(randInt));
  }

  useEffect(() => {
    const starters = [1, 4, 7];
    allPokemon.length === 0 &&
      starters.forEach((id) => {
        fetchPokemon(id);
      });
  }, [fetchPokemon]);

  return (
    <div className="appContainer">
      <h1 className="appTitle">Pokemon App</h1>
      <div className="pokemonContainer">
        {allPokemon.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
        })}
      </div>
      <div className="buttonContainer">
        <button className="button" onClick={addRandomPokemon}>
          Add Random Pokemon
        </button>
      </div>
    </div>
  );
}

export default App;
