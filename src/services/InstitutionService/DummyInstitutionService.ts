const dataPromise = import("../../../institutions.json").then(
  (data) => data.default
);

export class DummyInstitutionService {
  async listAll() {
    return await dataPromise;
  }
}
