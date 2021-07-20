import { InstitutionResolvers } from "../generated/graphql";

export const Institution: InstitutionResolvers = {
  async submissions({ id }, _args, { dataSources }) {
    return dataSources.submissions.getByInstitutionId(id);
  },
};
