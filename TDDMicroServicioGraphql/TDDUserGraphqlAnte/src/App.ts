import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import UserResolver from './Resolvers/UserResolver';

const startServer = async () => {
  const app = express();
  app.use('/api', (req, res) => {
    res.json({
      hola: 1,
    });
  });
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });
  server.applyMiddleware({ app, path: '/graphql' });
  return app;
};

export default startServer;
