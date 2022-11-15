const LottoValidation = require('../src/LottoValidation');

describe('LottoValidation 클래스 테스트', () => {
  test('숫자가 1~45범위의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      LottoValidation.checkNumberRange(46);
    }).toThrow('[ERROR]');
    expect(() => {
      LottoValidation.checkNumberRange(0);
    }).toThrow('[ERROR]');
    expect(() => {
      LottoValidation.checkNumberRange(-12);
    }).toThrow('[ERROR]');
  });

  test('배열에 1~45범위가 아닌 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      LottoValidation.checkLottoRange([11, 12, 13, 14, 15, 49]);
    }).toThrow('[ERROR]');
    expect(() => {
      LottoValidation.checkLottoRange([0, 19, 13, 14, 15, 45]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      LottoValidation.checkLength([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
    expect(() => {
      LottoValidation.checkLength([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      LottoValidation.checkDuplicate([1, 2, 3, 4, 5, 2]);
    }).toThrow('[ERROR]');
    expect(() => {
      LottoValidation.checkDuplicate([11, 34, 44, 12, 44, 11]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호에 중복된 숫자면 예외가 발생한다.', () => {
    expect(() => {
      LottoValidation.checkBonusNumberDuplicate(2, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
    expect(() => {
      LottoValidation.checkBonusNumberDuplicate(12, [11, 45, 32, 12, 6, 28]);
    }).toThrow('[ERROR]');
  });

  test('입력값이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      LottoValidation.checkInputIsNumber('12a');
    }).toThrow('[ERROR]');
    expect(() => {
      LottoValidation.checkInputIsNumber('hello');
    }).toThrow('[ERROR]');
    expect(() => {
      LottoValidation.checkInputIsNumber('1e3');
    }).toThrow('[ERROR]');
  });

  test('입력값이 0이면 예외가 발생한다.', () => {
    expect(() => {
      LottoValidation.checkInputIsZero('0');
    }).toThrow('[ERROR]');
  });
});
