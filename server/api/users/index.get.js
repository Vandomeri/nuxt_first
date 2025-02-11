import { PrismaClient } from "@prisma/client"

export default defineEventHandler(async (event) => {


    const params = getQuery(event)
    console.log(params)
    const prisma = new PrismaClient()

    const resp = await prisma.users.findMany({
        where: {
            role: {
                ...(params.role ? { equals: params.role } : {})
            },
            age: {
                ...(params.min_age ? { gte: Number(params.min_age) } : {}),
                ...(params.max_age ? { lte: Number(params.max_age) } : {}),
            }
        }
    })

    return resp

})