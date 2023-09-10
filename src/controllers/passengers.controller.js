import { passengerService } from "../services/passengers.services.js"

export async function postPassenger(req, res) {
    const { firstName, lastName } = req.body

    try {
        const insertPassenger = await passengerService.passengerPostService(firstName, lastName)
        res.status(201).json(insertPassenger)
        
    } catch (err) {
        res.status(500).send(err.message)
    }
}