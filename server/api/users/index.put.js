import { PrismaClient } from "@prisma/client"

export default defineEventHandler(async (event) => {

    const body = await readBody(event)

    const prisma = new PrismaClient()

    const resp = await prisma.users.update({
        where: {
            id: body.id
        },
        data: {
            name: body.name,
            email: body.email,
            password: body.password
        }
    })


    return
})