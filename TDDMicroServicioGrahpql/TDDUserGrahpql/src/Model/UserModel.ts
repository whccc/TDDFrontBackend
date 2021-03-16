import ClsDBPostgres from '../ConfigDataBase/connectionDB';

class ClsUserModel {
  // CREATE USER
  public createUser = async ({
    strfullname,
    struser,
    strpassword,
  }: {
    strfullname: string;
    struser: string;
    strpassword: string;
  }) => {
    try {
      // Create User
      const DBConnection = new ClsDBPostgres();
      const Query = 'insert into tblUser(strfullname,struser,strpassword) values($1,$2,$3)';
      const Values = [strfullname, struser, strpassword];
      // Abrir connection
      await DBConnection.ConnectionDBPostgres();
      // Query
      await DBConnection.getConnectionDB.query(Query, Values);
      // Close connection
      await DBConnection.CloseConnection();
    } catch (e) {
      throw new Error(e);
    }
  };

  // GET USERS
  public getUser = async () => {
    try {
      const DBConnection = new ClsDBPostgres();

      await DBConnection.ConnectionDBPostgres();
      const Query = 'select * from tbluser';

      const Data = await DBConnection.getConnectionDB.query(Query);
      return Data.rows;
    } catch (e) {
      throw new Error(e);
    }
  };
}

export default ClsUserModel;
