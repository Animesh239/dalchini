const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const fakeData = require("./fakedata");
const mongoose = require("mongoose");


const { ApolloServer } = require("@apollo/server");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
// const { default: bodyParser } = require("body-parser");

const { expressMiddleware } = require("@apollo/server/express4");

const httpServer = http.createServer(app);

const typeDefs = require("./schemas");
const resolvers = require("./resolvers");

require('dotenv').config(); // Load environment variables from .env file

const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.4epzpxn.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 4000;

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer: httpServer })],
  });

  await server.start();

  app.use(cors(), express.json(), expressMiddleware(server));


  mongoose
    .connect(URI)
    .then(async () => {
      await new Promise((resolve) =>
        httpServer.listen({ port: PORT }, resolve)
      );
      console.log("🚀 Server is ready at : http://localhost:4000");
      console.log("Connected to DB");
    })
    .catch((err) => console.log(err));
}

startServer();
