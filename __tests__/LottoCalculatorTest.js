const LottoCalculate = require("../src/LottoCalculator");
const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const winLotto = [1, 2, 3, 4, 5, 6];
const bonusNum = 8;
const myLotto = [
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 8],
  [1, 2, 3, 4, 6, 10],
  [1, 2, 3, 4, 13, 16],
  [1, 2, 3, 9, 10, 12],
];

const lottoCalculate = new LottoCalculate();
describe("로또 당첨 집계 테스트", () => {
  test("로또 번호 확인 테스트", () => {
    let Rank = 1;
    myLotto.forEach((lotto) => {
      expect(lottoCalculate.compareLotto(lotto, winLotto, bonusNum)).toBe(Rank);
      Rank++;
    });
  });
});

describe("로또 당첨 결과 테스트", () => {
  const lottoArr = myLotto.map((lotto) => {
    return new Lotto(lotto);
  });

  const result = lottoCalculate.resultCaculator(lottoArr, {
    winLotto: new Lotto(winLotto),
    bonus: bonusNum,
  });

  test("로또 당첨 결과 확인 테스트 ", () => {
    expect(result).toEqual({
      FIRST: 1,
      SECOND: 1,
      THIRD: 1,
      FOURTH: 1,
      FIFTH: 1,
      count: 5,
    });
  });

  test("로또 당첨 결과 출력 테스트", () => {
    const logs = [
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];

    const logSpy = getLogSpy();
    lottoCalculate.printWinResult(result);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
