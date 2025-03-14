import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import http from "http";
import { resolve } from "path";
import dotenv from "dotenv";
import logger from "./middleware/logger.js";

dotenv.config();
const app = express();

const typeDefs = `#graphql
    type Query {
        getName: String!
    }
`;

const resolvers = {
  Query: {
    getName: () => {
      return "Renadani";
    },
  },
};

const httpServer = http.createServer(app);
///instatiate apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();


//specify path for mounting the server
app.use("/graphql", cors(), express.json(), expressMiddleware(server));

await new Promise((resolve) =>
  httpServer.listen({ port: process.env.PORT }, resolve)
);
logger.info('Server Ready')
console.log(`Server ready at http://localhost:${process.env.PORT}/graphql`);
