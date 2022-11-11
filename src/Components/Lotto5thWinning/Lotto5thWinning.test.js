const Lotto5thWinning = require("./Lotto5thWinning");
const LottoResult = require("../LottoResult/LottoResult");
const { getLogSpy } = require("../../testFunction");

describe("Lotto5thWinning 클래스 테스트", () => {
  test("로또 결과들 중 5등 당첨 개수(0개)를 출력한다.", () => {
    const logSpy = getLogSpy();
    const printString = `3개 일치 (5,000원) - 0개`;
    new Lotto5thWinning([
      new LottoResult(5, true),
      new LottoResult(0, false),
    ]).printCount();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test("로또 결과들 중 5등 당첨 개수(1개)를 출력한다.", () => {
    const logSpy = getLogSpy();
    const printString = `3개 일치 (5,000원) - 1개`;
    new Lotto5thWinning([
      new LottoResult(5, false),
      new LottoResult(3, true),
    ]).printCount();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test("로또 결과들 중 5등 당첨 개수(2개)를 출력한다.", () => {
    const logSpy = getLogSpy();
    const printString = `3개 일치 (5,000원) - 2개`;
    new Lotto5thWinning([
      new LottoResult(4, false),
      new LottoResult(3, true),
      new LottoResult(3, false),
    ]).printCount();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test("당첨 개수가 2개면 10_000을 반환한다.", () => {
    const totalWinningMoney = new Lotto5thWinning([
      new LottoResult(4, false),
      new LottoResult(3, true),
      new LottoResult(3, false),
    ]).getTotalWinningMoney();

    expect(totalWinningMoney).toBe(10_000);
  });
});
