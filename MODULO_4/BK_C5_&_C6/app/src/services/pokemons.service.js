import pokemonModel from "../models/pokemon.model.js";

export function getAllPokemons() {
  return pokemonModel.getAllData();
}
