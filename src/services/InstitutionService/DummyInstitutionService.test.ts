import { DummyInstitutionService } from "./DummyInstitutionService";
const testdataPromise = import("../../../institutions.json").then(
  (data) => data.default
);

describe("DummyInstitutionService.listAll()", () => {
  it("returns the test data institutions", async () => {
    const service = new DummyInstitutionService();
    const institutions = await service.listAll();
    const testdata = await testdataPromise;
    expect(institutions).toBe(testdata);
    expect(institutions).toHaveLength(testdata.length);
  });
})
