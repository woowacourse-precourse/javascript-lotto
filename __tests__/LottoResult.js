const LottoResult = require("../src/LottoResult");

describe("로또 결과 클래스 테스트", () => {

  // getCount
  test("정답인 번호의 개수와 보너스 번호의 유무를 반환한다.", () => {
    const lotto = [1, 2, 3, 4, 5, 6, 7];
    const autoLotto = [
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];

    const lottoResult = new LottoResult(lotto, autoLotto);
    const result = lottoResult.getCount([1, 3, 5, 14, 22, 45])

    expect(result).toEqual({"bonus": false, "count": 3});
  });

  // getResult
  test("로또의 등수 결과 반환한다.", () => {
    const lotto = [1, 2, 3, 4, 5, 6, 7];
    const autoLotto = [
      [1, 2, 3, 4, 5, 6],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [1, 2, 3, 4, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];

    const lottoResult = new LottoResult(lotto, autoLotto);
    const result = lottoResult.getResult();

    expect(result).toEqual([1, 1, 0, 0, 1]);
  });

  // getRate
  test("로또의 총 수익률을 반환한다.", () => {
    const lotto = [1, 2, 3, 4, 5, 6, 7];
    const autoLotto = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];

    const lottoResult = new LottoResult(lotto, autoLotto);
    const result = lottoResult.getRate([1, 0, 0, 0, 0]);

    expect(result).toEqual("62.5");
  });

});
