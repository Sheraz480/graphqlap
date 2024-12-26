import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB  from './configdb.js';
import { contextMiddleware } from './middleware/auth.js';
import { protectedSchema } from './schema.js'
import dotenv from 'dotenv';
dotenv.config();
// import routes from './routes/index.js';
const app = express();
const httpServer = http.createServer(app);

  await connectDB(process.env.DB_URI);
  // routes(app)
const server = new ApolloServer({
  schema: protectedSchema,
  context: contextMiddleware, 
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start(); 

app.use(
  cors(),
  bodyParser.json(),
  expressMiddleware(server),
);

await new Promise((resolve) => httpServer.listen( process.env.PORT , resolve));
console.log(`🚀 Server ready at Port ${process.env.PORT}`);




