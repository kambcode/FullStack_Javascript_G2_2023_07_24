import express from "express";
import pokemonsRouter from "./pokemon.route.js";
import colombiaRouter from "./colombia.route.js";
import pokeCoRouter from "./pokeco.route.js";

const routes = express.Router();

routes.use("/pokemons", pokemonsRouter);
routes.use("/departments", colombiaRouter);
routes.use("/pokeco", pokeCoRouter);

export default routes;
