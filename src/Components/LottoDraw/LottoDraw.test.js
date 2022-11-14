const { Console } = require('@woowacourse/mission-utils');

const LottoResult = require('../LottoResult/LottoResult');
const LottoDraw = require('./LottoDraw');
const LottoNumberCount = require('../LottoNumberCount/LottoNumberCount');
const { getLogSpy } = require('../../testFunction');
const Money = require('../Money/Money');

describe('LottoDraw 클래스 테스트', () => {
  test('5등 1번만 당첨', () => {
    const lottoDraw = new LottoDraw([
      new LottoResult(new LottoNumberCount(3), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
    ]);
    const logSpy = getLogSpy();
    const logs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];

    lottoDraw.printResult();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(log);
    });
  });

  test('각 등수별 1번씩 당첨', () => {
    const lottoDraw = new LottoDraw([
      new LottoResult(new LottoNumberCount(6), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(5), new LottoNumberCount(1)),
      new LottoResult(new LottoNumberCount(5), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(4), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(3), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
    ]);
    const logSpy = getLogSpy();
    const logs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    lottoDraw.printResult();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(log);
    });
  });

  test('총 수익률을 출력한다.', () => {
    const lottoDraw = new LottoDraw([
      new LottoResult(new LottoNumberCount(3), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
    ]);
    const logSpy = getLogSpy();
    const printString = '총 수익률은 62.5%입니다.';

    lottoDraw.printEarningRate(new Money(8000));

    expect(logSpy).toHaveBeenCalledWith(printString);
  });

  test('5등 1번만 당첨 결과와 수익률을 출력한다.', () => {
    const lottoDraw = new LottoDraw([
      new LottoResult(new LottoNumberCount(3), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
      new LottoResult(new LottoNumberCount(0), new LottoNumberCount(0)),
    ]);
    const logSpy = getLogSpy();
    const logs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 62.5%입니다.',
    ];

    lottoDraw.printResult();
    lottoDraw.printEarningRate(new Money(8000));

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(log);
    });
  });
});
