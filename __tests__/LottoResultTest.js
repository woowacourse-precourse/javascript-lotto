const LottoResult = require("../src/controller/LottoResult.js");

describe("당첨 결과 클래스 테스트", () => {
  test("당첨 결과 확인", () => {
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 10],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 8, 9],
      [1, 2, 3, 7, 8, 9],
    ];
    const luckyNumber = [1, 2, 3, 4, 5, 6];
    const defaultBonus = 10;
    const lottoResult = new LottoResult(
      lottos,
      luckyNumber,
      defaultBonus,
    ).getResult();

    expect(lottoResult).toStrictEqual({
      FIRST: 1,
      SECOND: 1,
      THIRD: 1,
      FOURTH: 1,
      FIFTH: 1,
    });
  });
});
