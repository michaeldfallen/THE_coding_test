import { DataSource } from "apollo-datasource";

const dataPromise = import("../../../institutions.json").then(
  (data) => data.default
);

export class DummyInstitutionService extends DataSource {
  async listAll() {
    return await dataPromise;
  }

  async getById(id: string) {
    const data = await dataPromise;
    return data.find((_) => _.id === id) || null;
  }
}
