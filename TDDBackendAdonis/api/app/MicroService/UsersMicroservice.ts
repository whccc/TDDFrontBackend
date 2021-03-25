import axios from 'axios';
import QuerysUser from '../Querys/UserQuerys';
import { IUser } from '../Interface/IUserInterface';
class UserMicroservicio {
  private ClsQuerys;
  private ResultApi: JSON;
  constructor() {
    this.ClsQuerys = new QuerysUser();
  }
  // GET SET
  set setResultApi(DataResult) {
    this.ResultApi = DataResult;
  }
  //GET
  get getResultApi() {
    return this.ResultApi;
  }

  //Metodo para crear un usuario
  public CreateUserMC = async (Data: IUser) => {
    try {
      const QueryGrahql = this.ClsQuerys.MutationCreateUser(Data);
      const DataApi = await axios.post(`${process.env.URL_APIMICROSERVICIO_USER}`, {
        query: QueryGrahql,
      });
      this.setResultApi = DataApi.data;
    } catch (Error) {
      throw Error;
    }
  };
  //Metodo validate login user
  public ValidateLoginUser = async (Data: IUser) => {
    try {
      const QueryGrahql = this.ClsQuerys.QueryValidateLoginUser(Data);
      const DataApi = await axios.post(`${process.env.URL_APIMICROSERVICIO_USER}`, {
        query: QueryGrahql,
      });
      this.setResultApi = DataApi.data;
    } catch (Error) {
      throw Error;
    }
  };
}

export default UserMicroservicio;
