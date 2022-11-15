const { checkMoneyValidation } = require('../src/utils/validations');

describe('유효성 테스트', () => {
  test('구매금액에 숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      checkMoneyValidation('1e3');
    }).toThrow('[ERROR]');
  });

  test('구매금액에 음수를 입력하면 예외가 발생한다.', () => {
    expect(() => {
      checkMoneyValidation('-18000');
    }).toThrow('[ERROR]');
  });

  test('구매금액에 0을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      checkMoneyValidation('0');
    }).toThrow('[ERROR]');
  });

  test('구매금액이 1000원으로 떨어지지 않을 경우 예외가 발생한다.', () => {
    expect(() => {
      checkMoneyValidation('1100');
    }).toThrow('[ERROR]');
  });
});
