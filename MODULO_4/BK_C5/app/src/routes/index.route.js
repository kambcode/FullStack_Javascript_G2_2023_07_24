import express from "express";
import pokemonsRouter from "./pokemon.route.js";
import colombiaRouter from "./colombia.route.js";
const routes = express.Router();

routes.use("/pokemons", pokemonsRouter);
routes.use("/departments", colombiaRouter)

export default routes;
