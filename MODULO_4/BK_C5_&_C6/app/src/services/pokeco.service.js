import pokecoModel from "../models/pokeco.model.js";
import { v4 as uuidV4 } from "uuid";

export function getAllPokeCoService() {
  return pokecoModel.get();
}

export function createNewPokeCoService({ pokemon, department }) {
  const data = {
    id: uuidV4(),
    pokemon: pokemon,
    department,
  };

  pokecoModel.create(data);
}

export function updatePokeCoService(id, data) {
  pokecoModel.update(id, data);
}

export function deletePokeCoService(id, data) {
  pokecoModel.delete(id);
}
