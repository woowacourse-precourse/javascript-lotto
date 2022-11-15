const LottoGame = require('../src/LottoGame');
const Lotto = require('../src/Lotto');

describe('LottoGame 클래스 테스트', () => {
  test('computeWinningMap 메서드는 당첨 결과를 매핑하여 반환', () => {
    const lottoGame = new LottoGame();
    lottoGame.setWinningNumbers('8, 21, 23, 31, 32, 33');
    lottoGame.setBonusNumber('34');

    const numbers = [
      [8, 21, 23, 31, 32, 33],
      [8, 21, 23, 31, 32, 34],
      [8, 21, 23, 31, 32, 35],
      [8, 21, 23, 31, 36, 37],
      [8, 21, 23, 36, 37, 38],
    ];
    const lottos = numbers.map(number => new Lotto(number));
    const winningMap = lottoGame.computeWinningMap(lottos);

    expect(winningMap).toEqual({ 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 });
  });
});
