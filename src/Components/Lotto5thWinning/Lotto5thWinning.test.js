const Lotto5thWinning = require('./Lotto5thWinning');
const LottoResult = require('../LottoResult/LottoResult');
const LottoNumberCount = require('../LottoNumberCount/LottoNumberCount');

describe('Lotto5thWinning 클래스 테스트', () => {
  test('로또 결과들 중 5등 당첨 개수(0개)를 출력한다.', () => {
    const printString = `3개 일치 (5,000원) - 0개`;
    const result = new Lotto5thWinning([
      new LottoResult(new LottoNumberCount(5), new LottoNumberCount(1)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
    ]).getResult();

    expect(result).toBe(printString);
  });

  test('로또 결과들 중 5등 당첨 개수(1개)를 출력한다.', () => {
    const printString = `3개 일치 (5,000원) - 1개`;
    const result = new Lotto5thWinning([
      new LottoResult(new LottoNumberCount(5), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(3), new LottoNumberCount(1)),
    ]).getResult();

    expect(result).toBe(printString);
  });

  test('로또 결과들 중 5등 당첨 개수(2개)를 출력한다.', () => {
    const printString = `3개 일치 (5,000원) - 2개`;
    const result = new Lotto5thWinning([
      new LottoResult(new LottoNumberCount(4), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(3), new LottoNumberCount(1)),
      new LottoResult(new LottoNumberCount(3), new LottoNumberCount(0)),
    ]).getResult();

    expect(result).toBe(printString);
  });

  test('당첨 개수가 2개면 10_000을 반환한다.', () => {
    const totalWinningMoney = new Lotto5thWinning([
      new LottoResult(new LottoNumberCount(4), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(3), new LottoNumberCount(1)),
      new LottoResult(new LottoNumberCount(3), new LottoNumberCount(0)),
    ])
      .getWinningMoney()
      .getAmount();

    expect(totalWinningMoney).toBe(10_000);
  });
});
