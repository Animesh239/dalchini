const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const fakeData = require('./fakedata')

const { ApolloServer } = require("@apollo/server");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
// const { default: bodyParser } = require("body-parser");

const { expressMiddleware } = require("@apollo/server/express4");

const httpServer = http.createServer(app);

const typeDefs = require("./schemas");
const resolvers = require("./resolvers");

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer: httpServer })],
  });

  await server.start();

  app.use(cors(), express.json(), expressMiddleware(server));

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log("🚀 Server is ready at : http://localhost:4000");
}

startServer();
