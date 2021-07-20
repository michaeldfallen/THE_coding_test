import { Resolvers } from "../generated/graphql";
import { Query } from "./QueryResolvers";
import { Institution } from "./InstitutionResolvers";
import { Submission } from "./SubmissionResolvers";

const resolvers: Resolvers = {
  Query,
  Institution,
  Submission,
};

export { resolvers };
