import { Router } from "express";
import { schemaValidation } from "../middlewares/schemasValidation.middleware.js";
import { citiesSchema } from "../schemas/schema.js";

const citiesRoutes = Router()

citiesRoutes.post("/cities", schemaValidation(citiesSchema))

export default citiesRoutes