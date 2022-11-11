const { Console } = require("@woowacourse/mission-utils");

const LottoResult = require("../LottoResult/LottoResult");
const TotalLottoResult = require("./TotalLottoResult");
const { getLogSpy } = require("../../testFunction");

describe("TotalLottoResult 클래스 테스트", () => {
  test("5등 1번만 당첨", () => {
    const totalLottoResult = new TotalLottoResult([
      new LottoResult(3, false),
      new LottoResult(0, false),
      new LottoResult(0, false),
      new LottoResult(0, false),
      new LottoResult(0, false),
      new LottoResult(0, false),
      new LottoResult(0, false),
      new LottoResult(0, false),
    ]);
    const logSpy = getLogSpy();
    const printString = `
      3개 일치 (5,000원) - 1개
      4개 일치 (50,000원) - 0개
      5개 일치 (1,500,000원) - 0개
      5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
      6개 일치 (2,000,000,000원) - 0개
    `;

    totalLottoResult.print();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test("각 등수별 1번씩 당첨", () => {
    const totalLottoResult = new TotalLottoResult([
      new LottoResult(3, false),
      new LottoResult(5, false),
      new LottoResult(4, false),
      new LottoResult(6, false),
      new LottoResult(5, true),
    ]);
    const logSpy = getLogSpy();
    const printString = `
      3개 일치 (5,000원) - 1개
      4개 일치 (50,000원) - 1개
      5개 일치 (1,500,000원) - 1개
      5개 일치, 보너스 볼 일치 (30,000,000원) - 1개
      6개 일치 (2,000,000,000원) - 1개
    `;

    totalLottoResult.print();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test("2등 2번, 3등 3번 당첨", () => {
    const totalLottoResult = new TotalLottoResult([
      new LottoResult(5, false),
      new LottoResult(5, true),
      new LottoResult(5, false),
      new LottoResult(5, true),
      new LottoResult(5, false),
    ]);
    const logSpy = getLogSpy();
    const printString = `
      3개 일치 (5,000원) - 0개
      4개 일치 (50,000원) - 0개
      5개 일치 (1,500,000원) - 3개
      5개 일치, 보너스 볼 일치 (30,000,000원) - 2개
      6개 일치 (2,000,000,000원) - 0개
    `;

    totalLottoResult.print();
    expect(logSpy).toHaveBeenCalledWith(printString);
  });
});
