import { getAllPokemons } from "../services/pokemons.service.js";

export const getPokemons = async (req, res) => {
  //aqui va el servicio

  const { results } = await getAllPokemons();

  res.status(200).send(results);
};
