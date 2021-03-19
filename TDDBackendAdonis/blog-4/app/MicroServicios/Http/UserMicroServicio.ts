import axios from 'axios'
class ClsUserMicroservicio {
  private DataResponseMicroservicio: any

  get getDataResponseMicroservicio() {
    return this.DataResponseMicroservicio
  }
  //Obtener microservicios
  public async RequestLogin() {
    try {
    await axios.post('',{});

    })
    } catch (E) {
      throw E
    }
  }
}

export default ClsUserMicroservicio
