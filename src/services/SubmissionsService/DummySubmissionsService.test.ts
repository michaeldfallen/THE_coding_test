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
