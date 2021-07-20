import { SubmissionResolvers } from "../generated/graphql";

export const Submission: SubmissionResolvers = {
  async institution({ institution_id }, _args, { dataSources }) {
    return await dataSources.institutions.getById(institution_id);
  },
};
