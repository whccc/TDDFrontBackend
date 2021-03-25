import 'reflect-metadata';
import express, { Express } from 'express';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import UserResolver from './ResolversController/UserResolver';

class ClsIndexApp {
  private AppExpress: Express;

  constructor() {
    this.AppExpress = express();
  }

  // Metodo Main Ejecucion aplicación
  public MainApp = async () => {
    // Activar variables de entorno
    dotenv.config();
    // start server apollo
    await this.startServerApollo();

    // Corriendo servidor
    this.AppExpress.listen(3333);
    console.log('Escuchando por el microservicio puerto 3333');
  };

  // Conexion Apollo Server
  public startServerApollo = async () => {
    const server = new ApolloServer({
      schema: await buildSchema({
        resolvers: [UserResolver],
        validate: false,
      }),
      formatError: (error) => ({
        message: error.message,
        statusCode: 400,
      }),
      context: ({ req, res }) => ({ req, res }),
    });
    server.applyMiddleware({ app: this.AppExpress, path: '/grahpql' });
  };
}

const clsIndex = new ClsIndexApp();
// Inicializando App
clsIndex.MainApp();
