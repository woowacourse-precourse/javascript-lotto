const MissionUtils = require('@woowacourse/mission-utils');
const Money = require('../src/Money');
const { CONSTANT, PRIZE_MONEY } = require('../src/Constants');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Money 클래스 테스트', () => {
  test('입력값이 공백이면 예외가 발생한다.', () => {
    expect(() => {
      new Money('');
    }).toThrow('[ERROR] ');
  });
  test('입력값이 0이면 예외가 발생한다.', () => {
    expect(() => {
      new Money(0);
    }).toThrow('[ERROR] ');
  });
  test('입력값이 음수이면 예외가 발생한다.', () => {
    expect(() => {
      new Money(-1000);
    }).toThrow('[ERROR] ');
  });
  test('천원단위의 입력이 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Money(1200);
    }).toThrow('[ERROR] ');
  });

  test('천원단위의 입력이 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Money('a1000');
    }).toThrow('[ERROR] ');
  });

  test('수익 계산 테스트1.', () => {
    const money = new Money(1000);
    const prize = [1, 0, 0, 0, 0];
    expect(money.getEarning(prize)).toBe(PRIZE_MONEY[CONSTANT.THREE_MATCHED]);
  });
  test('수익 계산 테스트2.', () => {
    const money = new Money(1000);
    const prize = [0, 1, 0, 0, 0];
    expect(money.getEarning(prize)).toBe(PRIZE_MONEY[CONSTANT.FOUR_MATCHED]);
  });
  test('수익 계산 테스트3.', () => {
    const money = new Money(1000);
    const prize = [0, 0, 1, 0, 0];
    expect(money.getEarning(prize)).toBe(PRIZE_MONEY[CONSTANT.FIVE_MATCHED]);
  });
  test('수익 계산 테스트4.', () => {
    const money = new Money(1000);
    const prize = [0, 0, 0, 1, 0];
    expect(money.getEarning(prize)).toBe(PRIZE_MONEY[CONSTANT.FIVE_BONUS_MATCHED]);
  });
  test('수익 계산 테스트5.', () => {
    const money = new Money(1000);
    const prize = [0, 0, 0, 0, 1];
    expect(money.getEarning(prize)).toBe(PRIZE_MONEY[CONSTANT.SIX_MATCHED]);
  });
  test('수익 계산 테스트6.', () => {
    const money = new Money(1000);
    const prize = [1, 1, 1, 1, 1];
    const result = PRIZE_MONEY.reduce((acc, cur) => acc += cur, 0);
    expect(money.getEarning(prize)).toBe(result);
  });

  test('수익률 계산 테스트1', () => {
    const logSpy = getLogSpy();
    const money = new Money(5000);
    const prize = [1, 0, 0, 0, 0];
    const log = '100.0%';
    money.printEarningRatio(prize);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
  test('수익률 계산 테스트2', () => {
    const logSpy = getLogSpy();
    const money = new Money(10000);
    const prize = [1, 0, 0, 0, 0];
    const log = '50.0%';
    money.printEarningRatio(prize);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
  test('수익률 계산 테스트3 (소수점)', () => {
    const logSpy = getLogSpy();
    const money = new Money(7000);
    const prize = [0, 1, 0, 0, 0];
    const log = '714.3%';
    money.printEarningRatio(prize);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
});
