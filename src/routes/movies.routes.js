import express from "express";
import MovieController from "../controllers/movies.controller.js";

const movieRouter = express.Router();

movieRouter.get("/", MovieController.findAll);

movieRouter.post("/", MovieController.create);

export default movieRouter;