import express from 'express';
import cors from 'cors';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import Promise from 'bluebird';

const __DEV__ = true;

const app = express();
app.use(cors());

const baseUrl = 'https://pokeapi.co/api/v2';
const pokemonFields = ['id', 'name', 'weight'];

async function getPokemons(url, i=0) {
  const response = await fetch(url);
  const page = await response.json();
  const pokemons = page.results;
  if (__DEV__ && i > 1) {
    return pokemons
  }
  if (page.next) {
    const pokemons2 = await getPokemons(page.next, i + 1);
    return [
      ...pokemons,
      ...pokemons2
    ]
  }
  return pokemons
}

const pokemonsUrl = `${baseUrl}/pokemon`;

async function getPokemon(url) {
  const response = await fetch (url);
  const pokemon = await response.json();
  return pokemon;
}

app.get('/', async (req, res) => {
  try {
    const pokemonsInfo = await getPokemons(pokemonsUrl);
    const pokemonsPromises = pokemonsInfo.map(info => {
      return getPokemon(info.url)
    });
    const pokemonsFull = await Promise.all(pokemonsPromises);
    const pokemons = pokemonsFull.map((pokemon) => {
      return _.pick(pokemon, pokemonFields)
    })
    const sortPokemons = _.sortBy(pokemons, pokemon => pokemon.weight);
    return res.json(sortPokemons);
  }
  catch (err) {
    console.log(err);
    return res.json({err});
  }
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
