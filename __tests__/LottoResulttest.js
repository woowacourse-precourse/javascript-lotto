const LottoGame = require("../src/LottoGame");
const MissionUtils = require("@woowacourse/mission-utils");
const STATIC = require("../src/Static");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또게임 클래스 테스트", () => {
  test("수익 산출 테스트", () => {
    const PRIZELIST = [0, 0, 0, 1, 1, 1, 1, 1];
    const MONEY = 2031555000;
    const output = new LottoGame().calculateResult(PRIZELIST);
    expect(output).toEqual(MONEY);
  });

  test("수익률 산출 테스트", () => {
    const PRIZE = 5000;
    const MONEY = 1000;
    const result = `${STATIC.MESSAGE.YIELD}${((PRIZE / MONEY) * 100).toFixed(
      1
    )}%입니다.`;
    const logSpy = getLogSpy();
    new LottoGame().announceYield(MONEY, PRIZE);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
  });
});
