const Lotto1stWinning = require("./Lotto1stWinning");
const LottoResult = require("../LottoResult/LottoResult");
const { getLogSpy } = require("../../testFunction");

describe("Lotto1stWinning 클래스 테스트", () => {
  test("로또 결과들 중 1등 당첨 개수(0개)를 출력한다.", () => {
    const logSpy = getLogSpy();
    const printString = `6개 일치 (2,000,000,000원) - 0개`;
    new Lotto1stWinning([
      new LottoResult(5, false),
      new LottoResult(0, false),
    ]).printCount();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test("로또 결과들 중 1등 당첨 개수(1개)를 출력한다.", () => {
    const logSpy = getLogSpy();
    const printString = `6개 일치 (2,000,000,000원) - 1개`;
    new Lotto1stWinning([
      new LottoResult(6, false),
      new LottoResult(0, false),
    ]).printCount();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test("로또 결과들 중 1등 당첨 개수(2개)를 출력한다.", () => {
    const logSpy = getLogSpy();
    const printString = `6개 일치 (2,000,000,000원) - 2개`;
    new Lotto1stWinning([
      new LottoResult(6, false),
      new LottoResult(6, true),
    ]).printCount();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test("당첨 개수가 2개면 4_000_000_000을 반환한다.", () => {
    const totalWinningMoney = new Lotto1stWinning([
      new LottoResult(6, false),
      new LottoResult(6, true),
    ]).getTotalWinningMoney();

    expect(totalWinningMoney).toBe(4_000_000_000);
  });
});
