const Validator = require('../src/services/Validator');

describe('Validator 클래스 테스트', () => {
  test("checkTruthy에 ''는 예외를 발생시킨다.", () => {
    expect(() => Validator.checkTruthy('')).toThrow('[ERROR]');
  });

  test('checkTruthy에 NaN는 예외를 발생시킨다.', () => {
    expect(() => Validator.checkTruthy(NaN)).toThrow('[ERROR]');
  });

  test('checkTruthy에 null는 예외를 발생시킨다.', () => {
    expect(() => Validator.checkTruthy(null)).toThrow('[ERROR]');
  });

  test('checkTruthy에 undefined는 예외를 발생시킨다.', () => {
    expect(() => Validator.checkTruthy(undefined)).toThrow('[ERROR]');
  });

  test('checkTruthy에 0는 예외를 발생시킨다.', () => {
    expect(() => Validator.checkTruthy(0)).toThrow('[ERROR]');
  });

  test('checkTruthy에 -0는 예외를 발생시킨다.', () => {
    expect(() => Validator.checkTruthy(-0)).toThrow('[ERROR]');
  });

  test('checkTruthy에 0n는 예외를 발생시킨다.', () => {
    expect(() => Validator.checkTruthy(0n)).toThrow('[ERROR]');
  });

  test('checkTruthy에 false는 예외를 발생시킨다.', () => {
    expect(() => Validator.checkTruthy(false)).toThrow('[ERROR]');
  });

  test('checkStringType에 123는 예외를 발생시킨다', () => {
    expect(() => Validator.checkStringType(123)).toThrow('[ERROR]');
  });

  test("checkOnlyNumbersInString에 '1134a'는 예외를 발생시킨다", () => {
    expect(() => Validator.checkOnlyNumbersInString('1134a')).toThrow('[ERROR]');
  });

  test('checkDividedBy1000에 5001은 예외를 발생시킨다', () => {
    expect(() => Validator.checkDividedBy1000(5001)).toThrow('[ERROR]');
  });

  test('checkNumberType에 []은 예외를 발생시킨다', () => {
    expect(() => Validator.checkNumberType([])).toThrow('[ERROR]');
  });

  test("checkFormatSixNumbers에 '1, 2, 3, 4, 5, 6' 예외를 발생시킨다", () => {
    expect(() => Validator.checkFormatSixNumbers('1, 2, 3, 4, 5, 6')).toThrow('[ERROR]');
  });

  test("checkFormatSixNumbers에 '1,2.3,4/5,6' 예외를 발생시킨다", () => {
    expect(() => Validator.checkFormatSixNumbers('1,2.3,4/5,6')).toThrow('[ERROR]');
  });

  test('checkArrayType에 {}는 예외를 발생시킨다', () => {
    expect(() => Validator.checkArrayType({})).toThrow('[ERROR]');
  });

  test("checkNumberInArrayType에 [1, 2, 3, 4, 5, '6']는 예외를 발생시킨다", () => {
    expect(() => Validator.checkNumberInArrayType([1, 2, 3, 4, 5, '6'])).toThrow('[ERROR]');
  });

  test('checkSixLength에 [1, 2, 3, 4, 5]는 예외를 발생시킨다', () => {
    expect(() => Validator.checkSixLength([1, 2, 3, 4, 5])).toThrow('[ERROR]');
  });

  test('checkSixNumbersRange에 [1, 2, 3, 4, 5, 46]은 예외를 발생시킨다', () => {
    expect(() => Validator.checkSixNumbersRange([1, 2, 3, 4, 5, 46])).toThrow('[ERROR]');
  });

  test('checkRangeOfLottoNumber에 0은 예외를 발생시킨다', () => {
    expect(() => Validator.checkRangeOfLottoNumber(0)).toThrow('[ERROR]');
  });

  test('checkUniqueNumber에 [1, 2, 3, 4, 5, 1]은 예외를 발생시킨다', () => {
    expect(() => Validator.checkUniqueNumber([1, 2, 3, 4, 5, 1])).toThrow('[ERROR]');
  });
});
