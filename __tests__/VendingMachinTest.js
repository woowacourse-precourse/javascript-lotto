const { Console, Random } = require('@woowacourse/mission-utils');
const VendingMachine = require('../src/VendingMachine');

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Vending Machine 클래스', () => {
  const vendingMachine = new VendingMachine();

  test('구입 금액이 숫자가 아니라면 예외가 발생한다. ', () => {
    expect(() => {
      vendingMachine.validate('천원');
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 1,000 단위가 아니라면 예외가 발생한다. ', () => {
    expect(() => {
      vendingMachine.validate(800);
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 양수가 아니라면 예외가 발생한다. ', () => {
    expect(() => {
      vendingMachine.validate(-1000);
    }).toThrow('[ERROR]');
  });

  test('구입 금액 1,000원 당 로또 하나를 구매한다. ', () => {
    const logSpy = getLogSpy();
    vendingMachine.printLottoCount(5000);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('5개를 구매했습니다.'));
  });

  test('구입 금액 1,000원 당 로또 하나를 발행한다. ', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ]);
    const logs = [
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[1, 2, 3, 4, 5, 6]',
      '[7, 8, 9, 10, 11, 12]',
    ];
    const logSpy = getLogSpy();
    vendingMachine.makeLotto(10000);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
