const MissionUtils = require('@woowacourse/mission-utils');

const Lotto = require('../src/Lotto');
const Bonus = require('../src/Bonus');
const LottoStore = require('../src/LottoStore');
const LottoDrawFactory = require('../src/LottoDrawFactory');
const LottoAdjustment = require('../src/LottoAdjustment');

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

    const lottoAdjustment = new LottoAdjustment({
      draw: new LottoDrawFactory({ lotto, bonus }),
      payment: new LottoStore('1000'),
    });

    expect(lottoAdjustment.calculate()).toEqual([1, 0, 0, 0, 0]);
  });

  test('(2등) 내가 산 로또들과 추첨한 로또 비교한 결과값 테스트', () => {
    mockRandoms([[1, 2, 3, 4, 5, 7]]);

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonus = new Bonus('7');

    const lottoAdjustment = new LottoAdjustment({
      draw: new LottoDrawFactory({ lotto, bonus }),
      payment: new LottoStore('1000'),
    });

    expect(lottoAdjustment.calculate()).toEqual([0, 0, 0, 1, 0]);
  });

  test('(1등) 내가 산 로또들과 추첨한 로또 비교한 결과값 테스트', () => {
    mockRandoms([[1, 2, 3, 4, 5, 6]]);

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonus = new Bonus('7');

    const lottoAdjustment = new LottoAdjustment({
      draw: new LottoDrawFactory({ lotto, bonus }),
      payment: new LottoStore('1000'),
    });

    expect(lottoAdjustment.calculate()).toEqual([0, 0, 0, 0, 1]);
  });
});
