const Generator = require("../src/Generator");
const MissionUtils = require("@woowacourse/mission-utils");
const mockRandom = (number) => {
  const mockFn = (MissionUtils.Random.pickNumberInRange = jest.fn());

  mockFn.mockReturnValue(number);
};
const mockRandomArr = (numbers) => {
  const mockFn = (MissionUtils.Random.pickUniqueNumbersInRange = jest.fn());
  mockFn.mockReturnValue(numbers);
};
describe("보너스 번호 생성", () => {
  test("보너스 번호 생성", () => {
    mockRandom(7);
    const generator = new Generator();

    expect(generator.createBonusNumber([1, 2, 3, 4, 5, 6])).toBe(7);
  });
  test("당첨번호생성", () => {
    mockRandomArr([1, 2, 3, 4, 5, 6]);
    const generator = new Generator();
    const result = generator.createWinningNumber();
    expect(result.length).toBe(6);
  });
});
