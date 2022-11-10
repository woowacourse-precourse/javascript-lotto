const {
  checkAmountUnit,
  checkAmountStirng,
  checkAmountEmpty,
} = require('../src/validation/amountValidation');

const { checkWinningEmpty } = require('../src/validation/winningValidation');

describe('사용자 입력 테스트', () => {
  test('입력한 금액이 1000원 단위가 아닐경우 예외가 발생한다.', () => {
    const input = '1001';

    expect(() => {
      checkAmountUnit(input);
    }).toThrow('[ERROR]');
  });

  test('입력한 금액이 숫자가 아닐경우 예외가 발생한다.', () => {
    const input = '1000a';

    expect(() => {
      checkAmountStirng(input);
    }).toThrow('[ERROR]');
  });

  test('입력한 금액이 공백일경우 예외가 발생한다.', () => {
    const input = '';

    expect(() => {
      checkAmountEmpty(input);
    }).toThrow('[ERROR]');
  });
});

describe('당첨 번호 입력 테스트', () => {
  test('입력한 금액이 공백일경우 예외가 발생한다.', () => {
    const input = '';

    expect(() => {
      checkWinningEmpty(input);
    }).toThrow('[ERROR]');
  });
});
