import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import { gql } from "apollo-server-express";
import { artist_resolvers } from "./artwork/resolvers";
import { artist_type_Defs } from "./artwork/typeDefs";
import { user_resolvers, user_type_defs } from "./user";
import { getAllPhotos } from "../utils/unsplash.api";

const defaultTypeDefs = gql`
  type Query {
    _empty: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [defaultTypeDefs, artist_type_Defs, user_type_defs],
  resolvers: [artist_resolvers, user_resolvers],
});

export const initializeApolloServer = async (app: any) => {
  const apolloServer = new ApolloServer({
    schema,
    context: {
      all_photos: getAllPhotos,
    },
  });

  apolloServer.applyMiddleware({ app });
  console.log("APOLLO SERVER INITIALIZED");
};
