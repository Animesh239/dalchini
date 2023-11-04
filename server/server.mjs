const express = require('express')
const app = express()
const http = require('http')

const {ApolloServer} = require('@apollo/server')
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer')
const { default: bodyParser } = require('body-parser')

const {expressMiddleware} = require('@apollo/server/express4')

const httpServer = http.createServer(app)

const typeDefs = '' ;
const resolvers = '' ;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer: httpServer })],
})

await server.start()

app.use(cors(), bodyParser.json(), expressMiddleware(server))

await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve))
console.log("🚀 Server is ready at : http://localhost/4000")