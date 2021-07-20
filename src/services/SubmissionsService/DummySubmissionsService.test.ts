import { DummySubmissionsService } from "./DummySubmissionsService";

const testDataPromise = import("../../../submissions.json").then(
  (data) => data.default
);

describe("DummySubmissionService.listAll()", () => {
  it("returns the fake submission.json", async () => {
    const service = new DummySubmissionsService();
    const testData = await testDataPromise;
    const submissions = await service.listAll();
    expect(submissions).toHaveLength(testData.length);
    expect(submissions).toBe(testData);
  });
});

describe("DummySubmissionService.getByInstitutionId()", () => {
  it("returns only the requested submissions", async () => {
    const service = new DummySubmissionsService();
    const testData = await testDataPromise;
    const institutionId = testData[0].institution_id;
    const expected = testData.filter(
      (sub) => sub.institution_id === institutionId
    );
    const submissions = await service.getByInstitutionId(institutionId);
    expect(submissions).toHaveLength(expected.length);
    expect(submissions).toEqual(expected);
  });

  it("returns [] for bad id", async () => {
    const service = new DummySubmissionsService();
    expect(service.getByInstitutionId("bad input")).resolves.toEqual([]);
  });
});
