const Validation = require('../src/Validation');
const validation = new Validation();

describe('예외 체크 클래스 테스트', () => {
  test('양의 정수 예외 테스트 1', () => {
    expect(() => {
      validation.checkPositiveInteger('hello');
    }).toThrow();
  });

  test('양의 정수 예외 테스트 2', () => {
    expect(() => {
      validation.checkPositiveInteger(-34);
    }).toThrow();
  });

  test('금액이 원하는 단위로 나누어떨어지지 않는 경우', () => {
    expect(() => {
      validation.checkSplitIntoDivisor(5000, 2000);
    }).toThrow();
  });

  test('배열 안에 중복이 있는 경우', () => {
    expect(() => {
      validation.checkDuplication([1, 2, 3, 4, 5, 5]);
    }).toThrow();
  });

  test('범위에서 벗어난 숫자를 입력하는 경우', () => {
    expect(() => {
      validation.checkNumberIncludeInRange(46, 1, 45);
    }).toThrow();
  });

  test('배열의 원하는 길이를 넘어가는 경우', () => {
    expect(() => {
      validation.checkArrayLength([1, 2, 3, 4, 5, 6, 7], 6);
    }).toThrow();
  });
});
