// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index({ request, response, params }) {
    try {
      console.log(request.all())
      response.status(400).json({
        hola: 123,
      })
      return { Hola: 'holaS' }
    } catch (E) {
      throw new Error(E)
    }
  }
}
