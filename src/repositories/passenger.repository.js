import { db } from "../database/database.connection.js"

export async function createPassenger(firstName, lastName) {
    const result = await db.query(`
    INSERT INTO passengers (firstName, lastName) 
    VALUES ($1, $2);`, [firstName, lastName])
    return result.rows[0]
}


