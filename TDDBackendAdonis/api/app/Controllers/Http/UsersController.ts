// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MicroserviceUser from '../../MicroService/UsersMicroservice';
class UsersController {
  private ClsUserMicroservice;
  constructor() {
    this.ClsUserMicroservice = new MicroserviceUser();
  }

  public CreateUser = async ({ response, request }) => {
    try {
      await this.ClsUserMicroservice.CreateUserMC(request.requestBody);
      response.status(200).json(this.ClsUserMicroservice.getResultApi);
    } catch (Error) {
      console.log(Error);
      response.status(500).json({
        strMessage: 'Error internal service',
        Error,
      });
    }
  };

  public ValidateLoginUser = async ({ response, request }) => {
    try {
      console.log(request.requestBody);
      await this.ClsUserMicroservice.ValidateLoginUser(request.requestBody);
      response.status(200).json(this.ClsUserMicroservice.getResultApi);
    } catch (Error) {
      console.log(Error);
      response.status(500).json({
        strMessage: 'Error internal service',
        Error,
      });
    }
  };
}

export default UsersController;
