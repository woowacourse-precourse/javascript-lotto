const LottoMachine = require("../src/LottoMachine");
const LottoResult = require("../src/LottoResult");

describe("로또결과 클래스 테스트", () => {
  test("로또 번호 맞춘 수 반환", () => {
    const lottoResult = new LottoResult([1, 12, 34, 2, 3, 4], 7, new LottoMachine(7000));
    const result = lottoResult.checkWinning([1, 12, 34, 45, 23, 16]);
    expect(result).toEqual(3);
  });
});
