import { PrismaClient } from "@prisma/client"

export default defineEventHandler(async (event) => {

    const { email, name, password } = await readBody(event)


    const prisma = new PrismaClient()

    const req = await prisma.users.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    })




    return {
        status: 'ok'
    }

})