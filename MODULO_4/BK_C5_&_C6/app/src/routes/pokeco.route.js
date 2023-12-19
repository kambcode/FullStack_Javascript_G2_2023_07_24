import express from "express";
import {
  createNewPokeCo,
  getAllPokeCo,
  updatePokeCo,
  deletePokeCo,
} from "../controllers/pokeco.controller.js";
import { createValidator } from "../middlewares/validator.middleware.js";

const pokeCoRouter = express.Router();

pokeCoRouter.get("/", getAllPokeCo);
pokeCoRouter.post("/create", createValidator, createNewPokeCo);
pokeCoRouter.put("/update", updatePokeCo);
pokeCoRouter.delete("/delete", deletePokeCo);

export default pokeCoRouter;
