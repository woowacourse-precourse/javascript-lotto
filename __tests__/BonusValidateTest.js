const BonusValidate = require('../src/BonusValidate');

describe('보너스 클래스 테스트', () => {
  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
    const wrongInput = 'ㄹ';

    expect(() => {
      new BonusValidate(wrongInput);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1~45 범위를 벗어난 경우 예외가 발생한다.', () => {
    const BonusNumbersInput = [-1, 46];

    BonusNumbersInput.map(bonusNumber => {
      expect(() => {
        new BonusValidate(bonusNumber);
      }).toThrow('[ERROR]');
    });
  });
});
