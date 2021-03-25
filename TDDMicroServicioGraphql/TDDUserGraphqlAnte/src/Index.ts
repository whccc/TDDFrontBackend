import 'reflect-metadata';
import startServer from './App';
import connect from './Config/TypeOrm';

const Main = async () => {
  await connect();
  const app = await startServer();
  app.listen(3333);
  console.log('Microservicio user port 3333');
};

Main();
