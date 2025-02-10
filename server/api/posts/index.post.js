import { PrismaClient } from "@prisma/client"

export default defineEventHandler(async (event) => {

    const body = await readBody(event)


    const prisma = new PrismaClient()

    const resp = await prisma.posts.create({
        data: {
            title: body.title,
            description: body.description,
            text: body.text,
            usersId: Number(body.userId)
        }
    })

    return resp
})