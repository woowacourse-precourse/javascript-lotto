const LottoGame = require('../src/LottoGame');

describe('LottoGame 클래스 테스트', () => {
  test('✨ 중복되지 않는 6개의 숫자를 뽑는다.', () => {
    const lottoGame = new LottoGame();
    const lottoNumberLength = [...new Set(lottoGame.generateLottoNumbers())].length;
    expect(lottoNumberLength).toBe(6);
  });
});
