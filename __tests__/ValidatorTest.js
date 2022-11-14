const Validator = require('../src/Validator');

test('공백을 포함한 경우 예외 발생', () => {
  const inputValues = ['q e', ' 123', '123 ', ' '];

  inputValues.forEach((value) => {
    expect(() => Validator.throwErrorIfHasBlack(value)).toThrow('[ERROR]');
  });
});

test('0으로 시작하는 경우 예외 발생', () => {
  const inputValues = ['0', '05', '01000', '0000'];

  inputValues.forEach((value) => {
    expect(() => Validator.throwErrorIfStartsWithZero(value)).toThrow(
      '[ERROR]'
    );
  });
});

test('1이상 45이하의 수가 아닌 경우 예외 발생', () => {
  const numbers = [0, 50, -4, '49', '2000', '-12'];

  numbers.forEach((number) => {
    expect(() => Validator.throwErrorIfOutOfRange(number)).toThrow('[ERROR]');
  });
});

describe('입력된 돈에 대한 유효성 검사 테스트', () => {
  test('공백을 포함한 경우 예외 발생', () => {
    const inputValues = ['q e', ' 123', '123 ', ' '];

    inputValues.forEach((value) => {
      expect(() => Validator.throwErrorIfInvalidMoney(value)).toThrow(
        '[ERROR]'
      );
    });
  });

  test('0으로 시작하는 경우 예외 발생', () => {
    const inputValues = ['0', '05', '01000', '0000'];

    inputValues.forEach((value) => {
      expect(() => Validator.throwErrorIfInvalidMoney(value)).toThrow(
        '[ERROR]'
      );
    });
  });

  test('숫자가 아닌 경우 예외 발생', () => {
    const inputValues = ['1e3', '5214!', '!@#', '한글'];

    inputValues.forEach((value) => {
      expect(() => Validator.throwErrorIfInvalidMoney(value)).toThrow(
        '[ERROR]'
      );
    });
  });

  test('1000의 배수가 아닌 경우 예외 발생', () => {
    const inputValues = ['1e3', '5214!', '!@#', '한글'];

    inputValues.forEach((value) => {
      expect(() => Validator.throwErrorIfInvalidMoney(value)).toThrow(
        '[ERROR]'
      );
    });
  });
});
