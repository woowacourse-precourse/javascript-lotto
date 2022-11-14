const InputException = require('../src/InputException');
const inputException = new InputException();

describe('handlePurchaseAmountException 테스트', () => {
  test('1000원으로 나누어 떨어지지 않는 경우 예외가 발생한다.', () => {
    expect(() => {
      inputException.handlePurchaseAmountException(8800);
    }).toThrow('[ERROR]');
    expect(() => {
      inputException.handlePurchaseAmountException(800);
    }).toThrow('[ERROR]');
  });

  test('음수 또는 0인 경우 예외가 발생한다.', () => {
    expect(() => {
      inputException.handlePurchaseAmountException(-1000);
    }).toThrow('[ERROR]');
    expect(() => {
      inputException.handlePurchaseAmountException(0);
    }).toThrow('[ERROR]');
  });

  test('숫자가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      inputException.handlePurchaseAmountException(NaN);
    }).toThrow('[ERROR]');
  });

  test('아무 값도 입력하지 않은 경우 예외가 발생한다.', () => {
    expect(() => {
      inputException.handlePurchaseAmountException('');
    }).toThrow('[ERROR]');
  });
});
