const { Console } = require('@woowacourse/mission-utils');
const Purchase = require('../src/Purchase');

describe('Purchase 클래스 테스트', () => {
  test('구입 금액에 해당하는 로또 수량 반환하는지 테스트', () => {
    const money = 15000;
    const lottoCount = Purchase.countLotto(money);

    expect(lottoCount).toEqual(15);
  });

  test('구입 금액이 자연수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const money = 0;

      Purchase.validate(money);
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 자연수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const money = 5000.5;

      Purchase.validate(money);
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 자연수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const money = -1000;

      Purchase.validate(money);
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 자연수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const money = Number('1000e');

      Purchase.validate(money);
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 1,000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      const money = 500;

      Purchase.validate(money);
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 1,000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      const money = 1200;

      Purchase.validate(money);
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 1,000으로 나누어 떨어지는 자연수이면 예외가 발생하지 않는다.', () => {
    expect(() => {
      const money = 1000;

      Purchase.validate(money);
    }).not.toThrow('[ERROR]');
  });

  test('구입 금액이 1,000으로 나누어 떨어지는 자연수이면 예외가 발생하지 않는다.', () => {
    expect(() => {
      const money = 12000;

      Purchase.validate(money);
    }).not.toThrow('[ERROR]');
  });
});

afterAll((done) => {
  Console.close();
  done();
});
