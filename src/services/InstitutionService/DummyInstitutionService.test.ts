import { server } from "../../apollo";
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
});

describe("DummyInstitutionService.getById(id)", () => {
  it("returns the requested institution", async () => {
    const service = new DummyInstitutionService();
    const expected = (await testdataPromise)[0];
    expect(service.getById(expected.id)).resolves.toBe(expected);
  });

  it("returns null for bad id", async () => {
    const service = new DummyInstitutionService();
    expect(service.getById("bad input")).resolves.toBeNull();
  });
});
