const LottoArray = require("../src/LottoArray");
const MissionUtils = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("로또 배열 테스트", () => {
  test("로또 수량 테스트", () => {
    const cash = 5678;
    const lottoArray = new LottoArray(cash);
    expect(lottoArray.amount).toBe(5);
  });

  test("로또 구입 테스트", () => {
    const randoms = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    mockRandoms(randoms);
    const cash = 3249;
    const lottoArray = new LottoArray(cash);
    for (let i = 0; i < lottoArray.length; i++) {
      const lotto = lottoArray[i];
      expect(lotto.showNumbers()).toEqual(randoms[i]);
    }
  });
});
