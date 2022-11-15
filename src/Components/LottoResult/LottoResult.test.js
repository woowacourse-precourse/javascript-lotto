const LottoNumberCount = require('../LottoNumberCount/LottoNumberCount');
const LottoResult = require('./LottoResult');

describe('LottoResult 클래스 테스트', () => {
  test('1등 당첨 조건을 만족시키는지 비교한다.', () => {
    const lottoResult = new LottoResult(new LottoNumberCount(6), new LottoNumberCount(0));
    const isWinning = lottoResult.isWinning(new LottoNumberCount(6), new LottoNumberCount(null));

    expect(isWinning).toBe(true);
  });

  test('2등 당첨 조건을 만족시키는지 비교한다.', () => {
    const lottoResult = new LottoResult(new LottoNumberCount(5), new LottoNumberCount(1));
    const isWinning = lottoResult.isWinning(new LottoNumberCount(5), new LottoNumberCount(1));

    expect(isWinning).toBe(true);
  });

  test('3등 당첨 조건을 만족시키는지 비교한다.', () => {
    const lottoResult = new LottoResult(new LottoNumberCount(5), new LottoNumberCount(0));
    const isWinning = lottoResult.isWinning(new LottoNumberCount(5), new LottoNumberCount(0));

    expect(isWinning).toBe(true);
  });

  test('4등 당첨 조건을 만족시키는지 비교한다.', () => {
    const lottoResult = new LottoResult(new LottoNumberCount(4), new LottoNumberCount(1));
    const isWinning = lottoResult.isWinning(new LottoNumberCount(4), new LottoNumberCount(null));

    expect(isWinning).toBe(true);
  });

  test('5등 당첨 조건을 만족시키는지 비교한다.', () => {
    const lottoResult = new LottoResult(new LottoNumberCount(3), new LottoNumberCount(0));
    const isWinning = lottoResult.isWinning(new LottoNumberCount(3), new LottoNumberCount(null));

    expect(isWinning).toBe(true);
  });
});
