const Game = require('../src/Game');

describe('게임 클래스 테스트', () => {
  test('주어진 수만큼 로또를 발행한다.', () => {
    const game = new Game();
    const num = 5;
    const lottoList = game.issueLotto(num);
    expect(lottoList.length).toBe(num);
  });
});
