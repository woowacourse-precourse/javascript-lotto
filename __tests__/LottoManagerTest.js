const MissionUtils = require('@woowacourse/mission-utils');

const LottoManager = require('../src/LottoManager');

const { ERROR } = require('../src/lib/constants/error');
const { LOTTO } = require('../src/lib/constants/lotto');

afterAll(() => {
  MissionUtils.Console.close();
});

const mockRandoms = numbers => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('로또 관리자 클래스 테스트', () => {
  test('로또 구입 금액에 숫자가 아닌 문자가 존재하면 예외가 발생한다.', () => {
    expect(() => {
      new LottoManager().initLottos('1000j');
    }).toThrow(ERROR.PURCHASE_AMOUNT.NOT_NUMBER);
  });

  test(`로또 구입 금액이 ${LOTTO.UNIT_PRICE}미만이면 예외가 발생한다.`, () => {
    expect(() => {
      new LottoManager().initLottos('0');
    }).toThrow(ERROR.PURCHASE_AMOUNT.SMALLER);
  });

  test(`로또 구입 금액이 ${LOTTO.UNIT_PRICE}으로 나누어 떨어지지 않으면 예외가 발생한다`, () => {
    expect(() => {
      new LottoManager().initLottos('1001');
    }).toThrow(ERROR.PURCHASE_AMOUNT.CANNOT_BE_DIVIDED);
  });

  test('올바른 구입 금액이 입력되면 구입 금액만큼의 로또를 발행한다.', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    const lottoManager = new LottoManager();
    lottoManager.initLottos('8000');
    const result = lottoManager.lottos.length;
    expect(result).toEqual(8000 / LOTTO.UNIT_PRICE);
  });
});
