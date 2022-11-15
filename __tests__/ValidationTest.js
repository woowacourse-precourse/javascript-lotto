const {
  validate,
  isPurchaseInput,
  areLottoNumbers,
  areWinningNumbers,
  isBonusNumber,
} = require('../src/utils/Validator');

describe('Validator 클래스 테스트', () => {
  test('로또 구입 금액이 1000원 단위의 숫자가 아니면 예외 발생', () => {
    const inputs = ['2001', 'abcd', '01000'];
    inputs.forEach(input => {
      expect(() => {
        validate(input, isPurchaseInput);
      }).toThrow('[ERROR]');
    });
  });

  test('로또 번호가 1~45 범위의 중복되지 않는 6개의 숫자가 아니면 예외 발생', () => {
    const inputs = [
      [1, 2, 3, 4, 5, 6, 7],
      [0, 1, 2, 3, 4, 46],
      [1, 1, 2, 3, 4, 5],
    ];
    inputs.forEach(input => {
      expect(() => {
        validate(input, areLottoNumbers);
      }).toThrow('[ERROR]');
    });
  });

  test('당첨 번호가 쉼표로 구분되는 로또 번호가 아니면 예외 발생', () => {
    const inputs = ['123456', '1,2,3,4,5,6,7', '0,1,2,3,4,46', '1,1,2,3,4,5'];
    inputs.forEach(input => {
      expect(() => {
        validate(input, areWinningNumbers);
      }).toThrow('[ERROR]');
    });
  });

  test('보너스 번호가 당첨 번호와 중복되지 않는 로또 번호가 아니면 예외 발생', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const inputs = ['1', 'a', '46'];
    inputs.forEach(input => {
      expect(() => {
        validate(input, isBonusNumber(winningNumbers));
      }).toThrow('[ERROR]');
    });
  });
});
