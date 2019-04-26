//TODO
import React from 'react';
import PokemonListItem from './PokemonListItem';

class PokemonList extends React.Component {
  constructor(props) {
    super(props); {
      this.state = {
        someValue: null
      }
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = (e) => {
    e.preventDefault();
    console.log(this, "TEST EVENT HANDLER!!!");
  }

  render(props) {
    return (
      <div id="pokemonList">
        {this.props.pokemon.map((pokemon, i) => <PokemonListItem pokemon={pokemon} key={i} handleDelete={this.handleDelete} />)}
      </div>
      )
  }
}

// const PokemonList = (props) => (
//   <div id="pokemonList">
//     {props.pokemon.map((pokemon, i) => <PokemonListItem pokemon={pokemon} key={i} />)}
//   </div>
//   )



export default PokemonList;



/*

      <div id="pokemonList">
        {this.props.pokemon.map(pokemon, i) => 
          <PokemonListItem pokemon={pokemon} key={i} />
        }
      </div>
*/