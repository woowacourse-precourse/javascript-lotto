const MissionUtils = require('@woowacourse/mission-utils');
const Checker = require('../src/Checker');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe('Checker 클래스 테스트', () => {
  test("''은 예외를 발생시킨다.", () => {
    mockQuestions(['']);

    expect(() => {
      Checker.isValidPriceString();
    }).toThrow('[ERROR]');
  });

  test('null은 예외를 발생시킨다.', () => {
    mockQuestions([null]);

    expect(() => {
      Checker.isValidPriceString();
    }).toThrow('[ERROR]');
  });

  test('undefined는 예외를 발생시킨다.', () => {
    mockQuestions([undefined]);

    expect(() => {
      Checker.isValidPriceString();
    }).toThrow('[ERROR]');
  });

  test('NaN는 예외를 발생시킨다.', () => {
    mockQuestions([NaN]);

    expect(() => {
      Checker.isValidPriceString();
    }).toThrow('[ERROR]');
  });

  test('0은 예외를 발생시킨다.', () => {
    mockQuestions([0]);

    expect(() => {
      Checker.isValidPriceString();
    }).toThrow('[ERROR]');
  });

  test('false는 예외를 발생시킨다.', () => {
    mockQuestions([false]);

    expect(() => {
      Checker.isValidPriceString();
    }).toThrow('[ERROR]');
  });

  test('숫자 입력은 예외를 발생시킨다.', () => {
    mockQuestions([8000]);

    expect(() => {
      Checker.isValidPriceString();
    }).toThrow('[ERROR]');
  });

  test('오브젝트 입력은 예외를 발생시킨다.', () => {
    mockQuestions([{}]);

    expect(() => {
      Checker.isValidPriceString();
    }).toThrow('[ERROR]');
  });

  test('배열 입력은 예외를 발생시킨다.', () => {
    mockQuestions([[]]);

    expect(() => {
      Checker.isValidPriceString();
    }).toThrow('[ERROR]');
  });

  test('8000ERROR는 예외를 발생시킨다.', () => {
    mockQuestions(['8000ERROR']);

    expect(() => {
      Checker.isValidPriceString();
    }).toThrow('[ERROR]');
  });

  test('80 00은 예외를 발생시킨다.', () => {
    mockQuestions(['80 00']);

    expect(() => {
      Checker.isValidPriceString();
    }).toThrow('[ERROR]');
  });

  test('1단위의 금액은 예외를 발생시킨다.', () => {
    mockQuestions([1]);

    expect(() => {
      Checker.isValidPrice();
    }).toThrow('[ERROR]');
  });

  test('10단위의 금액은 예외를 발생시킨다.', () => {
    mockQuestions([10]);

    expect(() => {
      Checker.isValidPrice();
    }).toThrow('[ERROR]');
  });

  test('100단위의 금액은 예외를 발생시킨다.', () => {
    mockQuestions([100]);

    expect(() => {
      Checker.isValidPrice();
    }).toThrow('[ERROR]');
  });

  test('false는 예외를 발생시킨다.', () => {
    expect(() => {
      Checker.isValidSixNumbersString(false);
    }).toThrow('[ERROR]');
  });

  test("''는 예외를 발생시킨다.", () => {
    expect(() => {
      Checker.isValidSixNumbersString('');
    }).toThrow('[ERROR]');
  });

  test('null은 예외를 발생시킨다.', () => {
    expect(() => {
      Checker.isValidSixNumbersString(null);
    }).toThrow('[ERROR]');
  });

  test('undefined는 예외를 발생시킨다.', () => {
    expect(() => {
      Checker.isValidSixNumbersString(undefined);
    }).toThrow('[ERROR]');
  });

  test('0은 예외를 발생시킨다.', () => {
    expect(() => {
      Checker.isValidSixNumbersString(0);
    }).toThrow('[ERROR]');
  });

  test('NaN은 예외를 발생시킨다.', () => {
    expect(() => {
      Checker.isValidSixNumbersString(NaN);
    }).toThrow('[ERROR]');
  });

  test('1, 2, 3, 4, 5, 6 과 같은 입력은 예외를 발생시킨다.', () => {
    expect(() => {
      Checker.isValidSixNumbersString('1, 2, 3, 4, 5, 6');
    }).toThrow('[ERROR]');
  });

  test('[1, 2, 3, 4, 5, 6] 과 같은 입력은 예외를 발생시킨다.', () => {
    expect(() => {
      Checker.isValidSixNumbersString([1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('false는 예외를 발생시킨다.', () => {
    expect(() => {
      Checker.isValidSixNumbersString(false);
    }).toThrow('[ERROR]');
  });

  test('[1, 2, 3, 4, 5, 6, 7]은 예외를 발생시킨다.', () => {
    expect(() => {
      Checker.isValidSixNumbers([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('[1, 2, 3, 4, 5]은 예외를 발생시킨다.', () => {
    expect(() => {
      Checker.isValidSixNumbers([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('[0, 2, 3, 4, 5, 45]은 예외를 발생시킨다.', () => {
    expect(() => {
      Checker.isValidSixNumbers([0, 2, 3, 4, 5, 45]);
    }).toThrow('[ERROR]');
  });

  test('[1, 1, 3, 4, 5, 6]은 예외를 발생시킨다.', () => {
    expect(() => {
      Checker.isValidSixNumbers([1, 1, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
