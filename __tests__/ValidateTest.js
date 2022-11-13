const Validate = require('../src/Validate');
const { ERROR } = require('../src/Constants');

const validate = new Validate();

describe('구매 금액 예외 테스트', () => {
  test('구매 금액이 로또 금액으로 나누어 떨어지지 않는 경우', () => {
    expect(() => {
      validate.checkAmount('3500');
    }).toThrow(ERROR.AMOUNT);
  });

  test('구매 금액이 숫자가 아닌 경우', () => {
    expect(() => {
      validate.checkAmount('abc');
    }).toThrow(ERROR.AMOUNT);
  });

  test('구매 금액에 공백이 포함된 경우', () => {
    expect(() => {
      validate.checkAmount('3 000');
    }).toThrow(ERROR.AMOUNT);
  });

  test('구매 금액에 특수문자가 포함된 경우', () => {
    expect(() => {
      validate.checkAmount('3,000');
    }).toThrow(ERROR.AMOUNT);
  });
});

describe('당첨 번호 예외 테스트', () => {
  test('숫자 6개가 아닌 경우', () => {
    expect(() => {
      validate.checkWinningNumber('1, 2, 3');
    }).toThrow(ERROR.SELECT);
  });

  test('1~45 사이의 숫자가 아닌 경우', () => {
    expect(() => {
      validate.checkWinningNumber('1, 2, 3, 4, 5, 50');
    }).toThrow(ERROR.NUMBER);
  });

  test('쉼표가 없는 경우', () => {
    expect(() => {
      validate.checkWinningNumber('1 2 3 4 5 6');
    }).toThrow(ERROR.SELECT);
  });
});

describe('보너스 번호 예외 테스트', () => {
  test('1~45 사이의 숫자가 아닌 경우', () => {
    expect(() => {
      validate.checkBonusNumber('-1', '1, 2, 3, 4, 5, 6');
    }).toThrow(ERROR.NUMBER);
  });

  test('당첨번호에 있는 숫자일 경우', () => {
    expect(() => {
      validate.checkBonusNumber('1', '1, 2, 3, 4, 5, 6');
    }).toThrow(ERROR.BONUS);
  });
});
