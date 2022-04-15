const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
// Load schema and resolvers
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");
// Load DB methods
const mongoDataMethods = require("./data/db");
// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://PhuongPham:Pham145@phamgraphql.xmh3f.mongodb.net/PhamGraphQL?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();
const app = express();
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDataMethods }),
  });
  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};
startServer();
