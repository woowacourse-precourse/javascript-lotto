const Validator = require('../src/utils/Validator');

describe('Validator 클래스 Truthy 테스트', () => {
  test('checkTruthy에 true 입력은 true다.', () => {
    expect(Validator.checkTruthy(true)).toBeTruthy();
  });

  test("checkStringType에 'string' 입력은 true다.", () => {
    expect(Validator.checkStringType('string')).toBeTruthy();
  });

  test("checkOnlyNumbersInString에 '12345' 입력은 true다.", () => {
    expect(Validator.checkOnlyNumbersInString('12345')).toBeTruthy();
  });

  test('checkDividedBy1000에 5000 입력은 true다.', () => {
    expect(Validator.checkDividedBy1000(5000)).toBeTruthy();
  });

  test('checkNumberType에 5000 입력은 true다.', () => {
    expect(Validator.checkNumberType(5000)).toBeTruthy();
  });

  test("checkFormatSixNumbers에 '1,2,3,4,5,6' 입력은 true다.", () => {
    expect(Validator.checkFormatSixNumbers('1,2,3,4,5,6')).toBeTruthy();
  });

  test('checkArrayType에 [] 입력은 true다.', () => {
    expect(Validator.checkArrayType([])).toBeTruthy();
  });

  test('checkNumberInArrayType에 [1, 2, 3, 4, 5, 6] 입력은 true다.', () => {
    expect(Validator.checkNumberInArrayType([1, 2, 3, 4, 5, 6])).toBeTruthy();
  });

  test('checkSixLength에 [1, 2, 3, 4, 5, 6] 입력은 true다.', () => {
    expect(Validator.checkSixLength([1, 2, 3, 4, 5, 6])).toBeTruthy();
  });

  test('checkSixNumbersRange에 [1, 2, 3, 4, 5, 6] 입력은 true다.', () => {
    expect(Validator.checkSixNumbersRange([1, 2, 3, 4, 5, 6])).toBeTruthy();
  });

  test('checkRangeOfLottoNumber에 45 입력은 true다.', () => {
    expect(Validator.checkRangeOfLottoNumber(45)).toBeTruthy();
  });

  test('checkUniqueNumber에 [1, 2, 3, 4, 5, 6] 입력은 true다.', () => {
    expect(Validator.checkUniqueNumber([1, 2, 3, 4, 5, 6])).toBeTruthy();
  });
});
