import React from 'react';
import PokemonListItem from './PokemonListItem';

const PokemonList = ({ pokemonList }) =>
  <div id="pokemonList">
    {pokemonList.map((pokemon, idx) =>
      <PokemonListItem key={idx} pokemon={pokemon}/>
    )}
  </div>

export default PokemonList;