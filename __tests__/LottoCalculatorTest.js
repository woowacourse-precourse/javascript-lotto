const LottoCalculate = require("../src/LottoSetting");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const LottoCalculate = new LottoSetting();
describe("로또 당첨 집계 테스트", () => {
  test("로또 번호 확인 테스트", () => {
    const winLotto = [1, 2, 3, 4, 5, 6];
    const bonusNum = 8;
    const myLotto = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 6, 10],
      [1, 2, 3, 4, 13, 16],
      [1, 2, 3, 9, 10, 12],
    ];
    let Rank = 1;
    myLotto.forEach((lotto) => {
      expect(LottoCalculate.compareLotto(lotto, winLotto, bonusNum)).toBe(Rank);
      Rank++;
    });
  });
});
