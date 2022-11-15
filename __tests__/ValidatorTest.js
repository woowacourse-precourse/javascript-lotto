const Validator = require('../src/Validator');

describe('Validator 클래스 - checkNumberOfDigits 함수 테스트', () => {
  test('입력값의 길이가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Validator.checkNumberOfDigits([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.checkNumberOfDigits([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('입력값의 길이가 6개이면 예외가 발생하지않는다.', () => {
    expect(() => {
      Validator.checkNumberOfDigits([1, 2, 3, 4, 5, 6]);
    }).not.toThrow('[ERROR]');
    expect(() => {
      Validator.checkNumberOfDigits([1, 1, 1, 66, 1, 1]);
    }).not.toThrow('[ERROR]');
  });
});

describe('Validator 클래스 - checkInteger 함수 테스트', () => {
  test('입력값(들)이 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Validator.checkInteger([1.1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.checkInteger(1.1);
    }).toThrow('[ERROR]');
  });

  test('입력값(들)이 정수이면 예외가 발생하지않는다.', () => {
    expect(() => {
      Validator.checkInteger([1, 2, 3, 4, 5, 6]);
    }).not.toThrow('[ERROR]');
    expect(() => {
      Validator.checkInteger([1, 2, 365]);
    }).not.toThrow('[ERROR]');
    expect(() => {
      Validator.checkInteger(1);
    }).not.toThrow('[ERROR]');
  });
});

describe('Validator 클래스 - checkRange 함수 테스트', () => {
  test('입력값(들)의 범위가 1~45가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Validator.checkRange([1, 2, 3, 4, 5, 65]);
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.checkRange(46);
    }).toThrow('[ERROR]');
  });

  test('입력값(들)의 범위가 1~45가 이면 예외가 발생하지않는다.', () => {
    expect(() => {
      Validator.checkRange([1, 2, 5.5, 6]);
    }).not.toThrow('[ERROR]');
    expect(() => {
      Validator.checkRange([1, 2]);
    }).not.toThrow('[ERROR]');
    expect(() => {
      Validator.checkRange(11);
    }).not.toThrow('[ERROR]');
  });
});

describe('Validator 클래스 - checkDuplication 함수 테스트', () => {
  test('입력값(들)에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      Validator.checkDuplication([1, 2, 2, 4, 5, 6]);
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.checkDuplication(4, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('입력값(들)에 중복된 숫자가 없으면 예외가 발생하지않는다.', () => {
    expect(() => {
      Validator.checkDuplication([1, 2, 5.5, 6]);
    }).not.toThrow('[ERROR]');
    expect(() => {
      Validator.checkDuplication([1, 2, 46, 3, 7]);
    }).not.toThrow('[ERROR]');
    expect(() => {
      Validator.checkDuplication(11, [1, 2, 3, 7, 5]);
    }).not.toThrow('[ERROR]');
  });
});

describe('Validator 클래스 - checkSingleNumber 함수 테스트', () => {
  test('입력값이 하나의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Validator.checkSingleNumber(Number('1,2'));
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.checkSingleNumber(Number('1,2,3,4,5,6'));
    }).toThrow('[ERROR]');
  });

  test('입력값이 하나의 숫자이면 예외가 발생하지않는다.', () => {
    expect(() => {
      Validator.checkSingleNumber(Number('7'));
    }).not.toThrow('[ERROR]');
    expect(() => {
      Validator.checkSingleNumber(Number('7.5'));
    }).not.toThrow('[ERROR]');
    expect(() => {
      Validator.checkSingleNumber(Number('-3'));
    }).not.toThrow('[ERROR]');
  });
});

describe('Validator 클래스 - validateMoney 함수 테스트', () => {
  test('입력값에 숫자가 아닌 문자가 포함되면 예외가 발생한다.', () => {
    expect(() => {
      Validator.validateMoney(Number('천원'));
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.validateMoney(Number('1,000'));
    }).toThrow('[ERROR]');
  });

  test('입력값이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      Validator.validateMoney(Number('1200'));
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.validateMoney(Number('75'));
    }).toThrow('[ERROR]');
  });

  test('입력값이 1000으로 나누어 떨어지는 숫자이면 예외가 발생하지않는다.', () => {
    expect(() => {
      Validator.validateMoney(Number('12000'));
    }).not.toThrow('[ERROR]');
    expect(() => {
      Validator.validateMoney(Number('750000'));
    }).not.toThrow('[ERROR]');
  });
});
