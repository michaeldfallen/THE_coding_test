import { DataSource } from "apollo-datasource";

const dataPromise = import("../../../submissions.json").then(
  (data) => data.default
);

export class DummySubmissionsService extends DataSource {
  async listAll() {
    return await dataPromise;
  }

  async getByInstitutionId(institutionId: string) {
    const data = await dataPromise;
    return data.filter((_) => _.institution_id === institutionId);
  }
}
