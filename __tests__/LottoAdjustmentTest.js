const MissionUtils = require('@woowacourse/mission-utils');

const Lotto = require('../src/Lotto');
const LottoDrawFactory = require('../src/LottoDrawFactory');

const Bonus = require('../src/domain/Bonus');
const LottoStore = require('../src/domain/LottoStore');
const LottoAdjustment = require('../src/domain/LottoAdjustment');

const mockRandoms = numbers => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('LottoDrawFactory 클래스 테스트', () => {
  test('(5등) 내가 산 로또들과 추첨한 로또 비교한 결과값 테스트', () => {
    mockRandoms([[1, 3, 5, 14, 22, 45]]);

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonus = new Bonus('7');

    const lottoAdjustment = new LottoAdjustment({
      draw: new LottoDrawFactory({ lotto, bonus }),
      payment: new LottoStore('1000'),
    });

    const logSpy = getLogSpy();

    const logs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 500.0%입니다.',
    ];

    lottoAdjustment.print();

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('(2등) 내가 산 로또들과 추첨한 로또 비교한 결과값 테스트', () => {
    mockRandoms([[1, 2, 3, 4, 5, 7]]);

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonus = new Bonus('7');

    const lottoAdjustment = new LottoAdjustment({
      draw: new LottoDrawFactory({ lotto, bonus }),
      payment: new LottoStore('1000'),
    });

    const logSpy = getLogSpy();

    const logs = [
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 3000000.0%입니다.',
    ];

    lottoAdjustment.print();

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('(1등) 내가 산 로또들과 추첨한 로또 비교한 결과값 테스트', () => {
    mockRandoms([[1, 2, 3, 4, 5, 6]]);

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonus = new Bonus('7');

    const lottoAdjustment = new LottoAdjustment({
      draw: new LottoDrawFactory({ lotto, bonus }),
      payment: new LottoStore('1000'),
    });

    const logSpy = getLogSpy();

    const logs = [
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 200000000.0%입니다.',
    ];

    lottoAdjustment.print();

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
