import { Client } from 'pg';

class ClsConecctionDB {
  private ConnectionDB: any;

  get getConnectionDB() {
    return this.ConnectionDB;
  }

  public ConnectionDBPostgres = async () => {
    // Configuración postgres
    const ConfigPostgres = new Client({
      host: process.env.HOSTDB,
      port: 3001,
      user: process.env.USERDB,
      password: process.env.USERPASSWORD,
      database: process.env.DBDATABASE,
    });

    await ConfigPostgres.connect();

    this.ConnectionDB = ConfigPostgres;
  };

  public CloseConnection = () => {
    this.ConnectionDB.end();
  };
}

export default ClsConecctionDB;
