const LottoGame = require('../src/LottoGame');

describe('LottoGame 클래스 테스트', () => {
  const lottoGame = new LottoGame();

  test('구매한 로또 번호와 당첨 번호를 비교하여 일치하는 번호를 구한다.', () => {
    expect(
      lottoGame.filterMatchNumbers({
        generatedLotto: [[1, 2, 3, 4, 5, 6]],
        winningNumbers: [1, 2, 3],
        bonusNumber: 4
      })
    ).toEqual([[1, 2, 3, 4]]);
  });

  test('등수를 구한다.', () => {
    expect(lottoGame.calculateRank([1, 2, 6], 6)).toEqual(6);
    expect(lottoGame.calculateRank([1, 2, 3, 6], 6)).toEqual(5);
    expect(lottoGame.calculateRank([1, 2, 3, 4, 5], 5)).toEqual(4);
    expect(lottoGame.calculateRank([1, 2, 3, 4, 5], 6)).toEqual(3);
    expect(lottoGame.calculateRank([1, 2, 3, 4, 5, 6], 6)).toEqual(2);
    expect(lottoGame.calculateRank([1, 2, 3, 4, 5, 6], 7)).toEqual(1);
  });
});
