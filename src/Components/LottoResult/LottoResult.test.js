const LottoNumberCount = require('../LottoNumberCount/LottoNumberCount');
const LottoResult = require('./LottoResult');

describe('LottoResult 클래스 테스트', () => {
  test('1등 당첨 조건을 만족시키는지 비교한다.', () => {
    const lottoNumberCount = new LottoNumberCount(6);
    const lottoBonusNumberCount = new LottoNumberCount(0);
    const lottoResult = new LottoResult(lottoNumberCount, lottoBonusNumberCount);
    const isWinning = lottoResult.isWinning(lottoNumberCount);

    expect(isWinning).toBe(true);
  });
});
