export default defineEventHandler(async (event) => {


    const body = await readBody(event)


    return {
        message: `Вы заказали услугу: ${body.message}`
    }

})