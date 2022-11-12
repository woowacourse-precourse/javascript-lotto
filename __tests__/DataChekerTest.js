const MissionUtils = require('@woowacourse/mission-utils');
const DataChecker = require('../src/DataChecker');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe('DataChecker 클래스 테스트', () => {
  test("''은 예외를 발생시킨다.", () => {
    mockQuestions(['']);

    expect(() => {
      DataChecker.isValidRowDataOfPurchaseAmount();
    }).toThrow('[ERROR]');
  });

  test('null은 예외를 발생시킨다.', () => {
    mockQuestions([null]);

    expect(() => {
      DataChecker.isValidRowDataOfPurchaseAmount();
    }).toThrow('[ERROR]');
  });

  test('undefined는 예외를 발생시킨다.', () => {
    mockQuestions([undefined]);

    expect(() => {
      DataChecker.isValidRowDataOfPurchaseAmount();
    }).toThrow('[ERROR]');
  });

  test('NaN는 예외를 발생시킨다.', () => {
    mockQuestions([NaN]);

    expect(() => {
      DataChecker.isValidRowDataOfPurchaseAmount();
    }).toThrow('[ERROR]');
  });

  test('0은 예외를 발생시킨다.', () => {
    mockQuestions([0]);

    expect(() => {
      DataChecker.isValidRowDataOfPurchaseAmount();
    }).toThrow('[ERROR]');
  });

  test('false는 예외를 발생시킨다.', () => {
    mockQuestions([false]);

    expect(() => {
      DataChecker.isValidRowDataOfPurchaseAmount();
    }).toThrow('[ERROR]');
  });

  test('숫자 입력은 예외를 발생시킨다.', () => {
    mockQuestions([8000]);

    expect(() => {
      DataChecker.isValidRowDataOfPurchaseAmount();
    }).toThrow('[ERROR]');
  });

  test('오브젝트 입력은 예외를 발생시킨다.', () => {
    mockQuestions([{}]);

    expect(() => {
      DataChecker.isValidRowDataOfPurchaseAmount();
    }).toThrow('[ERROR]');
  });

  test('배열 입력은 예외를 발생시킨다.', () => {
    mockQuestions([[]]);

    expect(() => {
      DataChecker.isValidRowDataOfPurchaseAmount();
    }).toThrow('[ERROR]');
  });

  test('8000ERROR는 예외를 발생시킨다.', () => {
    mockQuestions(['8000ERROR']);

    expect(() => {
      DataChecker.isValidRowDataOfPurchaseAmount();
    }).toThrow('[ERROR]');
  });

  test('80 00은 예외를 발생시킨다.', () => {
    mockQuestions(['80 00']);

    expect(() => {
      DataChecker.isValidRowDataOfPurchaseAmount();
    }).toThrow('[ERROR]');
  });

  test('1단위의 금액은 예외를 발생시킨다.', () => {
    mockQuestions([1]);

    expect(() => {
      DataChecker.isValidPurchaseAmount();
    }).toThrow('[ERROR]');
  });

  test('10단위의 금액은 예외를 발생시킨다.', () => {
    mockQuestions([10]);

    expect(() => {
      DataChecker.isValidPurchaseAmount();
    }).toThrow('[ERROR]');
  });

  test('100단위의 금액은 예외를 발생시킨다.', () => {
    mockQuestions([100]);

    expect(() => {
      DataChecker.isValidPurchaseAmount();
    }).toThrow('[ERROR]');
  });

  test('false는 예외를 발생시킨다.', () => {
    expect(() => {
      DataChecker.isValidRowDataOfSixNumbers(false);
    }).toThrow('[ERROR]');
  });

  test("''는 예외를 발생시킨다.", () => {
    expect(() => {
      DataChecker.isValidRowDataOfSixNumbers('');
    }).toThrow('[ERROR]');
  });

  test('null은 예외를 발생시킨다.', () => {
    expect(() => {
      DataChecker.isValidRowDataOfSixNumbers(null);
    }).toThrow('[ERROR]');
  });

  test('undefined는 예외를 발생시킨다.', () => {
    expect(() => {
      DataChecker.isValidRowDataOfSixNumbers(undefined);
    }).toThrow('[ERROR]');
  });

  test('0은 예외를 발생시킨다.', () => {
    expect(() => {
      DataChecker.isValidRowDataOfSixNumbers(0);
    }).toThrow('[ERROR]');
  });

  test('NaN은 예외를 발생시킨다.', () => {
    expect(() => {
      DataChecker.isValidRowDataOfSixNumbers(NaN);
    }).toThrow('[ERROR]');
  });

  test('1, 2, 3, 4, 5, 6 과 같은 입력은 예외를 발생시킨다.', () => {
    expect(() => {
      DataChecker.isValidRowDataOfSixNumbers('1, 2, 3, 4, 5, 6');
    }).toThrow('[ERROR]');
  });

  test('[1, 2, 3, 4, 5, 6] 과 같은 입력은 예외를 발생시킨다.', () => {
    expect(() => {
      DataChecker.isValidRowDataOfSixNumbers([1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('false는 예외를 발생시킨다.', () => {
    expect(() => {
      DataChecker.isValidRowDataOfSixNumbers(false);
    }).toThrow('[ERROR]');
  });

  test('[1, 2, 3, 4, 5, 6, 7]은 예외를 발생시킨다.', () => {
    expect(() => {
      DataChecker.isValidSixNumbers([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('[1, 2, 3, 4, 5]은 예외를 발생시킨다.', () => {
    expect(() => {
      DataChecker.isValidSixNumbers([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('[0, 2, 3, 4, 5, 45]은 예외를 발생시킨다.', () => {
    expect(() => {
      DataChecker.isValidSixNumbers([0, 2, 3, 4, 5, 45]);
    }).toThrow('[ERROR]');
  });

  test('[1, 1, 3, 4, 5, 6]은 예외를 발생시킨다.', () => {
    expect(() => {
      DataChecker.isValidSixNumbers([1, 1, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
