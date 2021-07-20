import { QueryResolvers } from "../generated/graphql";

export const Query: QueryResolvers = {
  async institutions(_parent, _args, { dataSources }) {
    return await dataSources.institutions.listAll();
  },
  async submissions(_parent, _args, { dataSources }) {
    return await dataSources.submissions.listAll();
  },
};
