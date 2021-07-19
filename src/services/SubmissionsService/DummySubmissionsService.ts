const dataPromise = import("../../../submissions.json").then(
  (data) => data.default
);

export class DummySubmissionsService {
  async listAll() {
    return await dataPromise;
  }
}
