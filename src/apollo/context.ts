import { DummyInstitutionService } from "../services/InstitutionService";
import { DummySubmissionsService } from "../services/SubmissionsService";

const institutionService = new DummyInstitutionService();
const submissionsService = new DummySubmissionsService();

export const dataSources = () => ({
  institutions: institutionService,
  submissions: submissionsService,
});

export const context = {};

export type Context = typeof context & {
  dataSources: ReturnType<typeof dataSources>;
};
