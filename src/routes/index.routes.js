import { Router } from "express";
import citiesRoutes from "./cities.routes.js";
import flightsRoutes from "./flights.routes.js";
import passengerRoutes from "./passenger.routes.js";

const router = Router()

router.use(passengerRoutes)
router.use(citiesRoutes)
router.use(flightsRoutes)

export default router