const LottoNumberCount = require('./LottoNumberCount');

describe('LottoNumberCount 클래스 테스트', () => {
  test('로또 번호와 일치하는 당첨 번호의 개수와 당첨 조건 개수를 비교한다.', () => {
    const lottoNumberCount = new LottoNumberCount(6);
    const winningLottoNumberCount = new LottoNumberCount(6);
    const isSame = lottoNumberCount.isSame(winningLottoNumberCount);

    expect(isSame).toBe(true);
  });

  test('로또 번호와 일치하는 당첨 번호의 개수와 당첨 조건 개수를 비교한다.', () => {
    const lottoNumberCount = new LottoNumberCount(6);
    const winningLottoNumberCount = new LottoNumberCount(5);
    const isSame = lottoNumberCount.isSame(winningLottoNumberCount);

    expect(isSame).toBe(false);
  });

  test('null로도 초기화할 수 있다.', () => {
    const lottoNumberCount = new LottoNumberCount(null);
    const isNull = lottoNumberCount.isNull();

    expect(isNull).toBe(true);
  });
});
