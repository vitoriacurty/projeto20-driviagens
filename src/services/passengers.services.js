import { createPassenger } from "../repositories/passenger.repository.js"

async function passengerPostService(firstName, lastName) {
    if (!firstName || !lastName) 
    //tratar erro

        try {
            const addPassenger = await createPassenger(firstName, lastName)
            return addPassenger
        } catch (err) {
            throw new Error('Não foi possível adicionar um novo passageiro')
        }
}

export const passengerService = { passengerPostService }