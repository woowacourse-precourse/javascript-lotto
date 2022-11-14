const MissionUtils = require("@woowacourse/mission-utils");
const Store = require("../src/Store");

describe("Store 클래스 테스트", () => {
  const store = new Store();

  test("로또 발행", () => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest
      .fn()
      .mockReturnValue([4, 5, 6, 1, 2, 3]);
    store.issue();
    expect(
      store.candidates.map((candidate) => candidate.numbers)
    ).toContainEqual([1, 2, 3, 4, 5, 6]);
  });
});
