import ConnectionDB from '../DBConfig/connectionDB';

class ClsTaskModel {
  // Create Task
  public createTask = async ({ strtask, intiduser }: { strtask: string; intiduser: number }) => {
    try {
      //
      const MDTask = new ConnectionDB();
      await MDTask.ConnectionDBPostgres();
      const Query = 'insert into tbltask(strtask,intiduser) values($1,$2)';
      const Values = [strtask, intiduser];
      await MDTask.getConnectionDB.query(Query, Values);
    } catch (e) {
      throw new Error(e);
    }
  };
}

export default ClsTaskModel;
