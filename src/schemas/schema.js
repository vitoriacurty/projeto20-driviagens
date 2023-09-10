import Joi from "joi"

// schema passengers
export const passengersSchema = Joi.object({
    firstName: Joi.string().min(2).max(100).required(),
    lastName: Joi.string().min(2).max(100).required()
})

// schema cities
export const citiesSchema = Joi.object({
    name: Joi.string().min(2).max(50).required()
})

// schema flights
export const flightsSchema = Joi.object({
        origin: Joi.number().required(),
        destination: Joi.number().required(),
        date: Joi.string().regex(/^\d{2}-\d{2}-\d{4}$/)
})

//schema travels
export const travelsSchema = Joi.object({
        passengerId: Joi.number().required(),
        flightId: Joi.number().required()
})
