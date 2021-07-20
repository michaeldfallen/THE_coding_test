import { gql } from "apollo-server";
import fs from "fs";

export const typeDefs = gql`
  ${fs.readFileSync("./src/apollo/schema.graphql")}
`;
