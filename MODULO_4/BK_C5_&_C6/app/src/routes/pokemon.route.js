import express from "express";
import { getPokemons } from "../controllers/pokemon.controller.js";

const pokemonsRouter = express.Router();

pokemonsRouter.get("/",getPokemons);

export default pokemonsRouter;
