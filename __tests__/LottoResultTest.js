const LottoResult = require("../src/LottoResult");

describe("로또결과 클래스 테스트", () => {
  test("일치한 로또 번호 수를 반환한다.", () => {
    const lottoList = [[1, 12, 34, 45, 23, 16], [34, 23, 43, 14, 2, 4]];
    const lottoResult = new LottoResult([1, 12, 34, 2, 3, 4], 7, lottoList);
    const result = lottoResult.checkWinning(lottoList[0]);
    expect(result).toEqual(3);
  });

  test("보너스 번호가 일치한지 반환한다.", () => {
    const lottoList = [[1, 12, 34, 45, 23, 16], [34, 23, 43, 14, 2, 4]];
    const lottoResult = new LottoResult([1, 12, 34, 2, 3, 4], 7, lottoList);
    const result = lottoResult.checkBonus(lottoList[0]);
    expect(result).toEqual(false);
  });
  
  test("일치한 숫자에 따라 랭크를 반환한다.", () => {
    const lottoList = [[1, 12, 34, 45, 23, 16], [34, 23, 43, 14, 2, 4]];
    const lottoResult = new LottoResult([1, 12, 34, 45, 23, 16], 7, lottoList);
    const result = lottoResult.checkRank(6);
    expect(result).toEqual('RANK_1');
  });
});
