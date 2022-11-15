const Lottos = require("./../src/domain/Lottos");
const MissionUtils = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("Lottos 클래스 테스트", () => {
  test("당첨 결과 확인한다.", () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    const lottos = new Lottos(8);
    const winNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    expect(lottos.rankLottos(winNumbers, bonusNumber).get(5)).toEqual(1);
  });
});
