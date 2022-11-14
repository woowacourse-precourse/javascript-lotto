const LottoGame = require("../src/controllers/LottoGame");

describe('로또 게임 클래스 테스트', () => {
  const lottoGame = new LottoGame([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7], 8);

  test('로또 번호 일치 여부 확인 테스트', () => {
    const result = lottoGame.matchWinningNumber(
      [1, 2, 3, 4, 5, 6],
      [3, 4, 5, 6, 7, 8]
    );
    expect(result).toEqual(4);
  });

  test('보너스 번호 일치 여부 확인 테스트', () => {
    const result = lottoGame.matchBonusNumber([1, 2, 3, 4, 5, 6], 7);
    expect(result).toEqual(false);
  });
});
