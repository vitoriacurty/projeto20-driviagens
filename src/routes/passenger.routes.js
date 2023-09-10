import { Router } from "express"
import { postPassenger } from "../controllers/passengers.controller.js"
import { schemaValidation } from "../middlewares/schemasValidation.middleware.js"
import { passengersSchema } from "../schemas/schema.js"

const passengerRoutes = Router()

passengerRoutes.post("/passengers", schemaValidation(passengersSchema), postPassenger)
passengerRoutes.get("/passengers/travels")

export default passengerRoutes