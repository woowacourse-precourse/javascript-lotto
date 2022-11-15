const LottoPrint = require("../src/LottoPrint");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 결과 출력 테스트", () => {
  const lottoPrint = new LottoPrint();
  test("로또 당첨 결과 출력 테스트", () => {
    const logs = [
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];
    const logSpy = getLogSpy();
    lottoPrint.printWinResult({
      FIRST: 1,
      SECOND: 1,
      THIRD: 1,
      FOURTH: 1,
      FIFTH: 1,
    });
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("로또 수익률 출력 테스트", () => {
    const logSpy = getLogSpy();
    lottoPrint.printGainPercent("40631100.0");
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("총 수익률은 40631100.0%입니다.")
    );
  });
});
