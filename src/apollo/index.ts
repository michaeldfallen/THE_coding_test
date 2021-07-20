import { ApolloServer, gql } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { context, dataSources } from "./context";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources,
});

export { server };
