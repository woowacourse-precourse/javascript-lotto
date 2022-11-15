const Payment = require('../src/Payment');

describe('Payment 클래스 테스트', () => {
  test('지불한 입력값이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Payment('12a');
    }).toThrow('[ERROR]');
  });

  test('지불한 입력값이 0이면 예외가 발생한다.', () => {
    expect(() => {
      new Payment('0');
    }).toThrow('[ERROR]');
  });

  test('지불한 입력값이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Payment('1234');
    }).toThrow('[ERROR]');
  });

  test('지불한 입력값을 Number 타입으로 가지고 오는 getMoney 매서드가 정상적으로 동작한다.', () => {
    // 준비(arrange)
    const payment = new Payment('80000');

    // 실행(act)
    const result = payment.getMoney();

    // 검증(assert)
    expect(result).toEqual(80000);
  });
});
