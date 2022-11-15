const { ERROR } = require('../src/Error');
const Validate = require('../src/Validate');

const validate = new Validate();

describe('유효성 검사 클래스 테스트', () => {
  test('로또 구입 금액이 숫자로만 이루어져 있지 않은 경우 예외가 발생한다.', () => {
    expect(() => {
      validate.purchaseAmount('14,000');
    }).toThrow(`${ERROR.PREFIX} ${ERROR.FORMAT}`);
  });

  test('로또 구입 금액이 1000원으로 나누어 떨어지지 않는 경우 예외가 발생한다.', () => {
    expect(() => {
      validate.purchaseAmount('8500');
    }).toThrow(`${ERROR.PREFIX} ${ERROR.PURCHASE_AMOUNT}`);
  });

  test('로또 구입 금액이 0원인 경우 예외가 발생한다.', () => {
    expect(() => {
      validate.purchaseAmount('0');
    }).toThrow(`${ERROR.PREFIX} ${ERROR.PURCHASE_AMOUNT}`);
  });

  test('보너스 번호가 숫자로만 이루어져 있지 않은 경우 예외가 발생한다.', () => {
    expect(() => {
      validate.bonus('1.0');
    }).toThrow(`${ERROR.PREFIX} ${ERROR.FORMAT}`);
  });

  test('보너스 번호의 숫자 범위가 1~45를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      validate.bonus('50');
    }).toThrow(`${ERROR.PREFIX} ${ERROR.NUMBER_RANGE}`);
  });
});
