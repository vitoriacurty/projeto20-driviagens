import { Router } from "express"
import { schemaValidation } from "../middlewares/schemasValidation.middleware.js"
import { flightsSchema, travelsSchema } from "../schemas/schema.js"

const flightsRoutes = Router()

flightsRoutes.post("/flights", schemaValidation(flightsSchema))
flightsRoutes.post("/travels", schemaValidation(travelsSchema))
flightsRoutes.get("/flights")

export default flightsRoutes