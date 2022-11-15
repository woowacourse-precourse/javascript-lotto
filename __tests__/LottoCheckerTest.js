const LottoChecker = require("../src/lotto/domain/LottoChecker");

describe("LottoChecker 클래스 테스트", () => {
  test.each([
    [[[1, 2, 3, 4, 5, 6]], [1, 2, 3, 4, 5, 6], 45, [0, 0, 0, 0, 1]],
    [[[45, 2, 3, 4, 5, 6]], [1, 2, 3, 4, 5, 6], 43, [0, 0, 0, 1, 0]],
    [[[45, 2, 3, 4, 5, 6]], [1, 2, 3, 4, 5, 6], 45, [0, 0, 1, 0, 0]],
    [[[45, 44, 3, 4, 5, 6]], [1, 2, 3, 4, 5, 6], 45, [0, 1, 0, 0, 0]],
    [[[45, 44, 43, 4, 5, 6]], [1, 2, 3, 4, 5, 6], 45, [1, 0, 0, 0, 0]],
    [[[45, 44, 43, 42, 5, 6]], [1, 2, 3, 4, 5, 6], 45, [0, 0, 0, 0, 0]],
    [[[45, 44, 43, 42, 41, 6]], [1, 2, 3, 4, 5, 6], 45, [0, 0, 0, 0, 0]],
    [[[45, 44, 43, 42, 41, 40]], [1, 2, 3, 4, 5, 6], 45, [0, 0, 0, 0, 0]],
  ])(
    "로또: %s, 당첨번호: %s, 보너스: %s, 결과: %s",
    (totalLotto, winningLotto, bonus, result) => {
      const lottoChecker = new LottoChecker();
      expect(
        lottoChecker.compareLotto(totalLotto, winningLotto, bonus)
      ).toEqual(result);
    }
  );
  test("무한소수 값을 넣어 소수점 둘째짜리에서 반올림 되는지 확인한다.", () => {
    const lottoChecker = new LottoChecker();
    expect(lottoChecker.CalculateProfit([1, 0, 0, 0, 0], 30000)).toEqual(
      "16.7"
    );
  });
});
