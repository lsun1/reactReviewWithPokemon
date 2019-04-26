import axios from 'axios';

const getPokemon = (query, callback) => {
  //TODO
  axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
  .then(function (response) {
    // console.log(response.data);
    callback(response);
  })
  .catch(function (error) {
    console.error(error);
  });
}

export default getPokemon;