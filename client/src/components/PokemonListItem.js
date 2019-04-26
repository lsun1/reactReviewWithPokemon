//TODO
/*
  <div className="pokemonItem">
    <div>Name: Pokemon Name</div>
    <div>Id: Pokemon Id</div>
    <img src="" alt="pokemon image"/> 
  </div>
*/

import React from 'react';

const PokemonListItem = (props) => ( //let {name, id, sprites} = props
  <div className="pokemonItem" onClick={props.handleDelete}>
    <div>Name: {props.pokemon.name}</div>
    <div>Id: {props.pokemon.id}</div>
    <img src={props.pokemon.sprites.front_default} alt="pokemon image"/> 
  </div>
  );

export default PokemonListItem;