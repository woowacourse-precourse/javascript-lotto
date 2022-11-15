const SixNumbersChecker = require('../src/services/SixNumbersChecker');

describe('SixNumbersChecker 클래스 테스트', () => {
  test('"" 입력은 예외를 발생시킨다.', () => {
    expect(() => SixNumbersChecker.checkRowDataOfSixNumbers('')).toThrow('[ERROR]');
  });

  test('[1, 2, 3, 4, 5, 6] 입력은 예외를 발생시킨다.', () => {
    expect(() => SixNumbersChecker.checkRowDataOfSixNumbers([1, 2, 3, 4, 5, 6])).toThrow('[ERROR]');
  });

  test('"1, 2, 3, 4, 5, 6" 입력은 예외를 발생시킨다.', () => {
    expect(() => SixNumbersChecker.checkRowDataOfSixNumbers('1, 2, 3, 4, 5, 6')).toThrow('[ERROR]');
  });

  test('0 입력은 예외를 발생시킨다.', () => {
    expect(() => SixNumbersChecker.checkSixNumbers(0)).toThrow('[ERROR]');
  });

  test('"string" 입력은 예외를 발생시킨다.', () => {
    expect(() => SixNumbersChecker.checkSixNumbers('string')).toThrow('[ERROR]');
  });

  test('["1", 2, 3, 4, 5, 6] 입력은 예외를 발생시킨다.', () => {
    expect(() => SixNumbersChecker.checkSixNumbers(['1', 2, 3, 4, 5, 6])).toThrow('[ERROR]');
  });

  test('[1, 2, 3, 4, 5, 6, 7] 입력은 예외를 발생시킨다.', () => {
    expect(() => SixNumbersChecker.checkSixNumbers([1, 2, 3, 4, 5, 6, 7])).toThrow('[ERROR]');
  });

  test('[1, 2, 3, 4, 5, 46] 입력은 예외를 발생시킨다.', () => {
    expect(() => SixNumbersChecker.checkSixNumbers([1, 2, 3, 4, 5, 46])).toThrow('[ERROR]');
  });

  test('[1, 2, 3, 4, 5, 5] 입력은 예외를 발생시킨다.', () => {
    expect(() => SixNumbersChecker.checkSixNumbers([1, 2, 3, 4, 5, 5])).toThrow('[ERROR]');
  });
});
