const LottoGame = require('../src/LottoGame');

describe('LottoGame 클래스 테스트', () => {
  test('✨ 중복되지 않는 6개의 숫자를 뽑는다.', () => {
    const lottoGame = new LottoGame();
    const lottoNumberLength = [...new Set(lottoGame.generateLottoNumbers())].length;
    expect(lottoNumberLength).toBe(6);
  });

  test('✨ 뽑은 숫자는 1부터 45로 이루어져있다.', () => {
    const lottoGame = new LottoGame();
    const lottos = [...new Set(lottoGame.generateLottoNumbers())];
    const lotto = lottos.filter((number) => number > 0 && number < 46);

    expect(lotto.length).toBe(6);
  });
});
