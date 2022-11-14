const NumberGenerator = require("../src/NumberGenerator");
const MissionUtils = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("숫자 생성기 테스트", () => {
  test("기능 테스트", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [10, 9, 8, 7, 6, 5],
    ]);
    const numberGenerator = new NumberGenerator();
    expect(numberGenerator.createRandomNumber()).toEqual([8,21,23,41,42,43]);
    expect(numberGenerator.createRandomNumber()).toEqual([5,6,7,8,9,10]);
  });
});