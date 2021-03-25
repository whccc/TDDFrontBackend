import { createConnection } from 'typeorm';
import path from 'path';

const connect = async () => {
  await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'DBTasks',
    entities: [path.join(__dirname, '../Entity/**/**.ts')],
    synchronize: true,
  });
  console.log('DataBase');
};

export default connect;
