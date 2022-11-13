const Exception = require('../src/Exception');

describe('사용자 입력 값에 대한 예외 클래스 테스트', () => {
  test('숫자가 아닌 값을 입력하면 예외가 발생한다', () => {
    expect(() => {
      const exception = new Exception();
      exception.checkIsDigit('abc123');
    }).toThrow('[ERROR]');
  });

  test('1~45 사이의 숫자가 입력되지 않은 경우 에외가 발생한다', () => {
    const exception = new Exception();
    const NUMBER = 56; 

    expect(() => {
      exception.checkIsNumberInRange(NUMBER);
    }).toThrow('[ERROR]');
  });

  test('로또 구매 금액이 1000 단위가 아니면 예외가 발생한다', () => {
    const exception = new Exception();
    const PURCHASE_AMOUNTS = [123, 123456, 1, 100, 200, 3432];

    PURCHASE_AMOUNTS.forEach((amount) => {
      expect(() => {
        exception.validatePurchaseAmount(amount);
      }).toThrow('[ERROR]');
    });
  });

  test('로또 당첨 번호 입력시 중복된 숫자가 있는 경우 예외가 발생한다', () => {
    const exception = new Exception();
    const WINNING_NUMBER = [1, 2, 3, 4, 4, 5];

    expect(() => {
      exception.validateWinningNumber(WINNING_NUMBER);
    }).toThrow('[ERROR]');
  });

  test('로또 당첨 번호 입력시 쉽표를 기준으로 구분하지 않은 경우 예외가 발생한다', () => {
    const exception = new Exception();
    const WINNING_NUMBER_INPUTS = ['123456', '1-2-3-4-5-6', '1 2 3 4 5 6'];

    WINNING_NUMBER_INPUTS.forEach((input) => {
      const WINNING_NUMBER = input.split(',');

      expect(() => {
        exception.validateWinningNumber(WINNING_NUMBER);
      }).toThrow('[ERROR]');
    });
  });

  test('로또 당첨 번호 입력시 6개의 숫자가 아닌 경우 예외가 발생한다', () => {
    const exception = new Exception();
    const WINNING_NUMBER = [1, 2, 3, 4, 5];

    expect(() => {
      exception.validateWinningNumber(WINNING_NUMBER);
    }).toThrow('[ERROR]');
  });

  test('로또 당첨 번호 입력시 1~45 이외의 숫자가 포함된 경우 예외가 발생한다', () => {
    const exception = new Exception();
    const WINNING_NUMBER = [1, 2, 7, 19, 34, 56]; 

    expect(() => {
      exception.validateWinningNumber(WINNING_NUMBER);
    }).toThrow('[ERROR]');
  });
});
