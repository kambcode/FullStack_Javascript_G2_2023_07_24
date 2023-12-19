import {
  createNewPokeCoService,
  deletePokeCoService,
  getAllPokeCoService,
  updatePokeCoService,
} from "../services/pokeco.service.js";

export const getAllPokeCo = async (req, res) => {
  const result = getAllPokeCoService();

  res.status(200).send(result);
};

export const createNewPokeCo = async (req, res) => {
  const { pokemon, department } = req.body;

  createNewPokeCoService({ pokemon, department });

  const result = getAllPokeCoService();

  res.status(200).send(result);
};

export const updatePokeCo = async (req, res) => {
  const { id, data } = req.body;

  updatePokeCoService(id, data);

  const result = getAllPokeCoService();
  res.status(200).send(result);
};

export const deletePokeCo = async (req, res) => {
  const { id } = req.body;

  deletePokeCoService(id);

  const result = getAllPokeCoService();
  res.status(200).send(result);
};
