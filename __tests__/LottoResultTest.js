const LottoResult = require("../src/LottoResult");
const MissionUtils = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("LottoResult 클래스 테스트", () => {
  const MOCK_LOTTO = [
    [1, 2, 3, 8, 42, 43],
    [3, 5, 11, 16, 32, 38],
    [7, 11, 16, 35, 36, 44],
    [1, 8, 11, 31, 41, 42],
    [13, 14, 16, 38, 42, 45],
    [7, 11, 30, 40, 42, 43],
    [2, 13, 22, 32, 38, 45],
    [1, 3, 5, 14, 22, 45],
  ];

  const WON_LOTTO = [1, 2, 3, 4, 5, 6];
  const BONUS_NUMBER = 7;
  const MOCK_SCORE = {
    3: 2,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  };

  test("기능 테스트", () => {
    mockRandoms(MOCK_LOTTO);

    const lottoResult = new LottoResult(MOCK_LOTTO, WON_LOTTO, BONUS_NUMBER);

    expect(lottoResult.score).toEqual(MOCK_SCORE);
  });

  test("getScore 메서드가 정상 동작한다.", () => {
    mockRandoms(MOCK_LOTTO);

    const lottoResult = new LottoResult(MOCK_LOTTO, WON_LOTTO, BONUS_NUMBER);
    const SCORE = lottoResult.getScore();

    expect(SCORE).toEqual(MOCK_SCORE);
  });
});
