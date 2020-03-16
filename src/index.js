const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./graphql/typeDefs");
const { resolvers } = require("./graphql/resolvers");
const { dataSources } = require("./graphql/dataSources");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  introspection: true,
  playground: true
});

server.listen().then(() => {
  console.log(`Server is ready at: http://localhost:4000/graphql`);
});
