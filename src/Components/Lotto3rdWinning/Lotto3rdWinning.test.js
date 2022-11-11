const Lotto3rdWinning = require("./Lotto3rdWinning");
const LottoResult = require("../LottoResult/LottoResult");
const { getLogSpy } = require("../../testFunction");

describe("Lotto3rdWinning 클래스 테스트", () => {
  test("로또 결과들 중 3등 당첨 개수(0개)를 출력한다.", () => {
    const logSpy = getLogSpy();
    const printString = `5개 일치 (1,500,000원) - 0개`;
    new Lotto3rdWinning([
      new LottoResult(5, true),
      new LottoResult(0, false),
    ]).printCount();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test("로또 결과들 중 3등 당첨 개수(1개)를 출력한다.", () => {
    const logSpy = getLogSpy();
    const printString = `5개 일치 (1,500,000원) - 1개`;
    new Lotto3rdWinning([
      new LottoResult(5, false),
      new LottoResult(0, false),
    ]).printCount();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test("로또 결과들 중 3등 당첨 개수(2개)를 출력한다.", () => {
    const logSpy = getLogSpy();
    const printString = `5개 일치 (1,500,000원) - 2개`;
    new Lotto3rdWinning([
      new LottoResult(5, false),
      new LottoResult(5, true),
      new LottoResult(5, false),
    ]).printCount();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test("당첨 개수가 2개면 3_000_000을 반환한다.", () => {
    const totalWinningMoney = new Lotto3rdWinning([
      new LottoResult(5, false),
      new LottoResult(5, true),
      new LottoResult(5, false),
    ]).getTotalWinningMoney();

    expect(totalWinningMoney).toBe(3_000_000);
  });
});
