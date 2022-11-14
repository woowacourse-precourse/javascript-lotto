const LottoResult = require("../src/controller/LottoResult.js");
const { RANK } = require("../src/utils/constant.js");
describe("당첨 결과 클래스 테스트", () => {
  test("1등 개수 확인", () => {
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ];
    const luckyNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 10;
    const lottoResult = new LottoResult(
      lottos,
      luckyNumber,
      bonusNumber,
    ).getResult();

    expect(lottoResult[RANK[1]]).toBe(2);
  });

  test("2등 개수 확인", () => {
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ];
    const luckyNumber = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 6;
    const lottoResult = new LottoResult(
      lottos,
      luckyNumber,
      bonusNumber,
    ).getResult();

    expect(lottoResult[RANK[2]]).toBe(2);
  });

  test("3등 개수 확인", () => {
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ];
    const luckyNumber = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 10;
    const lottoResult = new LottoResult(
      lottos,
      luckyNumber,
      bonusNumber,
    ).getResult();

    expect(lottoResult[RANK[3]]).toBe(2);
  });

  test("4등 개수 확인", () => {
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ];
    const luckyNumber = [1, 2, 3, 4, 8, 9];
    const bonusNumber = 10;
    const lottoResult = new LottoResult(
      lottos,
      luckyNumber,
      bonusNumber,
    ).getResult();

    expect(lottoResult[RANK[4]]).toBe(2);
  });

  test("5등 개수 확인", () => {
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ];
    const luckyNumber = [1, 2, 3, 7, 8, 9];
    const bonusNumber = 10;
    const lottoResult = new LottoResult(
      lottos,
      luckyNumber,
      bonusNumber,
    ).getResult();

    expect(lottoResult[RANK[5]]).toBe(2);
  });
});
