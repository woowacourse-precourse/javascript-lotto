const Lotto4thWinning = require('./Lotto4thWinning');
const LottoResult = require('../LottoResult/LottoResult');
const { getLogSpy } = require('../../testFunction');
const LottoNumberCount = require('../LottoNumberCount/LottoNumberCount');

describe('Lotto4thWinning 클래스 테스트', () => {
  test('로또 결과들 중 4등 당첨 개수(0개)를 출력한다.', () => {
    const logSpy = getLogSpy();
    const printString = `4개 일치 (50,000원) - 0개`;
    new Lotto4thWinning([
      new LottoResult(new LottoNumberCount(5), new LottoNumberCount(1)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
    ]).printCount();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test('로또 결과들 중 4등 당첨 개수(1개)를 출력한다.', () => {
    const logSpy = getLogSpy();
    const printString = `4개 일치 (50,000원) - 1개`;
    new Lotto4thWinning([
      new LottoResult(new LottoNumberCount(5), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(4), new LottoNumberCount(0)),
    ]).printCount();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test('로또 결과들 중 4등 당첨 개수(2개)를 출력한다.', () => {
    const logSpy = getLogSpy();
    const printString = `4개 일치 (50,000원) - 2개`;
    new Lotto4thWinning([
      new LottoResult(new LottoNumberCount(4), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(4), new LottoNumberCount(1)),
      new LottoResult(new LottoNumberCount(5), new LottoNumberCount(0)),
    ]).printCount();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test('당첨 개수가 2개면 100_000을 반환한다.', () => {
    const totalWinningMoney = new Lotto4thWinning([
      new LottoResult(new LottoNumberCount(4), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(4), new LottoNumberCount(1)),
      new LottoResult(new LottoNumberCount(5), new LottoNumberCount(0)),
    ]).getTotalWinningMoney();

    expect(totalWinningMoney).toBe(100_000);
  });
});
