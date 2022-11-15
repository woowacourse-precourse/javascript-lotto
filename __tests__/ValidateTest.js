const Validate = require('../src/Validate');

describe('유효성 검사', () => {
  const validate = new Validate();

  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
    const bonusNumber = '가';
    const winningList = [1, 2, 3, 4, 5];
    expect(() => {
      validate.validateBonusNumber(bonusNumber, winningList);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1~45 사이가 아니면 예외가 발생한다.', () => {
    const bonusNumber = 46;
    const winningList = [1, 2, 3, 4, 5];
    expect(() => {
      validate.validateBonusNumber(bonusNumber, winningList);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 같다면 예외가 발생한다.', () => {
    const bonusNumber = 5;
    const winningList = [1, 2, 3, 4, 5];
    expect(() => {
      validate.validateBonusNumber(bonusNumber, winningList);
    }).toThrow('[ERROR]');
  });

  test('구매 금액이 1000원 미만이면 예외가 발생한다.', () => {
    expect(() => {
      validate.validateMoney(900);
    }).toThrow('[ERROR]');
  });

  test('구매 금액에 1000으로 나눠 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      validate.validateMoney(1100);
    }).toThrow('[ERROR]');
  });
});
