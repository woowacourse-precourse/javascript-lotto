const {
  checkAmountUnit,
  checkAmountStirng,
  checkAmountEmpty,
} = require('../src/validation/amountValidation');

const {
  checkWinningEmpty,
  checkWinningString,
  checkWinningRest,
  checkWinningSixNumber,
} = require('../src/validation/winningValidation');

const {
  DoubleCheckBonus,
  checkBonusOnlyNumber,
} = require('../src/validation/bonusValidation');

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
  test('입력한 당첨 번호가 공백일경우 예외가 발생한다.', () => {
    const input = '';

    expect(() => {
      checkWinningEmpty(input);
    }).toThrow('[ERROR]');
  });

  test('입력한 당첨 번호가 숫자가 아닐경우 예외가 발생한다.', () => {
    const input = '1,2,3,4,5,a';

    expect(() => {
      checkWinningString(input);
    }).toThrow('[ERROR]');
  });

  test('입력한 당첨 번호가 1~45숫자인 쉼표 구분이 아닐경우 예외가 발생한다.', () => {
    const input = '123456';

    expect(() => {
      checkWinningRest(input);
    }).toThrow('[ERROR]');
  });

  test('입력한 당첨 번호가 6개가 아닐경우 예외가 발생한다.', () => {
    const input = '1,2,3,4,5,6,7';

    expect(() => {
      checkWinningSixNumber(input);
    }).toThrow('[ERROR]');
  });
});

describe('보너스 번호 입력 테스트', () => {
  test('입력한 보너스 번호가 당첨번호와 중복일 경우 예외가 발생한다.', () => {
    const input = '1';
    const winningNumber = ['1', '2', '3', '4', '5', '6'];

    expect(() => {
      DoubleCheckBonus(input, winningNumber);
    }).toThrow('[ERROR]');
  });

  test('입력한 보너스 번호가 숫자가 아닐 경우 예외가 발생한다.', () => {
    const input = 'a';

    expect(() => {
      checkBonusOnlyNumber(input);
    }).toThrow('[ERROR]');
  });
});
