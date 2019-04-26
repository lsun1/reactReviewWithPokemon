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
    // this.handleDelete = this.handleDelete.bind(this);
  }

  // handleDelete = (e) => {
  //   e.preventDefault();
  //   console.log(this, "TEST EVENT HANDLER!!!");
  // }

  // handleDelete(index) {
  //   let todos = this.state.myArray.slice();
  //   todos.splice(index, 1);
  //   this.setState({
  //     myArray: todos
  //   });
  // }  

  render(props) {
    return (
      <div id="pokemonList">
        {this.props.pokemon.map((pokemon, i) => <PokemonListItem pokemon={pokemon} key={i} index={i} handleDelete={this.props.handleDelete} />)}
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