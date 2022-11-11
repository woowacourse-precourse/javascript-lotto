const Exception = require('../src/Exception');

describe('사용자 입력 값에 대한 예외 클래스 테스트', () => {
  test('숫자가 아닌 값을 입력하면 예외가 발생한다', () => {
    expect(() => {
      const exceptionChecker = new Exception();
      exceptionChecker.checkIsDigit('abc123');
    }).toThrow('[ERROR]');
  });
});
