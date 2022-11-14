const MissionUtils = require('@woowacourse/mission-utils');

const Lotto = require('../src/Lotto');

const Bonus = require('../src/domain/Bonus');
const LottoStore = require('../src/domain/LottoStore');

const LottoDrawFactory = require('../src/domain/LottoDrawFactory');

const LottoIncome = require('../src/domain/LottoIncome');
const LottoWinCount = require('../src/domain/LottoWinCount');

const mockRandoms = numbers => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('LottoDrawFactory 클래스 테스트', () => {
  test('(5등) 내가 산 로또들과 추첨한 로또 비교한 결과값 테스트', () => {
    mockRandoms([[1, 3, 5, 14, 22, 45]]);

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonus = new Bonus('7');
    const lottoStore = new LottoStore('1000');

    const inputInstances = new LottoDrawFactory({ lotto, bonus, lottoStore });

    const winCount = new LottoWinCount(inputInstances);
    const income = new LottoIncome(inputInstances);

    expect(winCount.getResult()).toEqual({
      fifth: 1,
      fourth: 0,
      third: 0,
      second: 0,
      first: 0,
    });

    expect(income.getResult()).toEqual('500.0');
  });

  test('(2등) 내가 산 로또들과 추첨한 로또 비교한 결과값 테스트', () => {
    mockRandoms([[1, 2, 3, 4, 5, 7]]);

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonus = new Bonus('7');

    const lottoStore = new LottoStore('1000');

    const inputInstances = new LottoDrawFactory({ lotto, bonus, lottoStore });

    const winCount = new LottoWinCount(inputInstances);
    const income = new LottoIncome(inputInstances);

    expect(winCount.getResult()).toEqual({
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 1,
      first: 0,
    });

    expect(income.getResult()).toEqual('3,000,000.0');
  });

  test('(1등) 내가 산 로또들과 추첨한 로또 비교한 결과값 테스트', () => {
    mockRandoms([[1, 2, 3, 4, 5, 6]]);

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonus = new Bonus('7');
    const lottoStore = new LottoStore('1000');

    const inputInstances = new LottoDrawFactory({ lotto, bonus, lottoStore });

    const winCount = new LottoWinCount(inputInstances);
    const income = new LottoIncome(inputInstances);

    expect(winCount.getResult()).toEqual({
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 0,
      first: 1,
    });

    expect(income.getResult()).toEqual('200,000,000.0');
  });

  test('(당첨x) 내가 산 로또들과 추첨한 로또 비교한 결과값 테스트', () => {
    mockRandoms([[1, 2, 3, 4, 5, 6]]);

    const lotto = new Lotto([7, 8, 9, 10, 11, 12]);
    const bonus = new Bonus('13');
    const lottoStore = new LottoStore('1000');

    const inputInstances = new LottoDrawFactory({ lotto, bonus, lottoStore });

    const winCount = new LottoWinCount(inputInstances);
    const income = new LottoIncome(inputInstances);

    expect(winCount.getResult()).toEqual({
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 0,
      first: 0,
    });

    expect(income.getResult()).toEqual('0.0');
  });
});
