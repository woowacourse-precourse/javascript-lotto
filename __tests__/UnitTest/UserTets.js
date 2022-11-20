const { Console, Random } = require('@woowacourse/mission-utils');

const User = require('../../src/User');

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

describe('사용자 구매 로또 단위 테스트', () => {
  test('사용자 금액 지불 테스트', () => {
    const expenditure = 1000;
    const numberOfPurchase = 1;
    const nextStep = jest.fn();
    User.validate = jest.fn();
    Console.readLine = jest.fn((message, callback) => {
      User.validate(expenditure);
      nextStep(expenditure, numberOfPurchase);
    });
    User.purchaseLotto(nextStep);
    expect(User.validate).toHaveBeenCalledWith(expenditure);
    expect(nextStep).toHaveBeenCalledWith(expenditure, numberOfPurchase);
  });
  test('사용자 로또 발행 테스트', () => {
    const getLogSpy = () => {
      const logSpy = jest.spyOn(User, 'createRandomSortedNumber');
      logSpy.mockClear();
      return logSpy;
    };
    const numberOfPurchase = 8;
    const logs = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    mockRandoms(logs);
    const logSpy = getLogSpy();
    User.generateLotto(numberOfPurchase);
    logs.forEach((log) => {
      expect(logSpy).toHaveReturnedWith(expect.arrayContaining(log));
    });
  });

  test('사용자 로또 출력 테스트', () => {
    const getLogSpy = () => {
      const logSpy = jest.spyOn(Console, 'print');
      logSpy.mockClear();
      return logSpy;
    };
    const lottoList = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const logs = [
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
    ];
    const logSpy = getLogSpy();
    User.showLottoList(lottoList);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  //   test("", () => {});
});
