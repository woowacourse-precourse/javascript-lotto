const Validator = require('../src/Validator');
const { COMMON_INVALID_ERROR_MESSAGES, UNIT_INVALID_ERROR_MESSAGES } = require('../src/Constant');

describe('Validator 클래스 유닛 테스트', () => {
  test('입력한 수가 1000원 단위가아니라면 예외를 발생시킨다.', () => {
    const inputs = [2222, 4004, 100, 23, 50020];

    inputs.forEach((input) => {
      expect(() => {
        Validator.unit(input);
      }).toThrow(UNIT_INVALID_ERROR_MESSAGES);
    });
  });

  test('입력한 수가 음수이거나 정수가 아니라면 예외를 발생시킨다', () => {
    const inputs = [-1, 20.33, -231, 2.123];

    inputs.forEach((input) => {
      expect(() => {
        Validator.common(input);
      }).toThrow(COMMON_INVALID_ERROR_MESSAGES.NOT_DECIMAL_AND_MINUS);
    });
  });

  test('입력한 값이 공백이거나 공백이 들어가있다면 예외를 발생시킨다', () => {
    const inputs = ['', '    ', '  ', '1  '];

    inputs.forEach((input) => {
      expect(() => {
        Validator.common(input);
      }).toThrow(COMMON_INVALID_ERROR_MESSAGES.NOT_EMPTY);
    });
  });

  test('입력한 값이 1보다 작거나 45보다 크면 예외를 발생시킨다', () => {
    const inputs = [0, -23, 46, 75];

    inputs.forEach((input) => {
      expect(() => {
        Validator.checkRange(input);
      }).toThrow(COMMON_INVALID_ERROR_MESSAGES.ONLY_NUMBER_BETWEEN_1_45);
    });
  });

  test('입력한 값이 NaN일때 예외를 발생시킨다', () => {
    const inputs = [NaN];

    inputs.forEach((input) => {
      expect(() => {
        Validator.common(input);
      }).toThrow(COMMON_INVALID_ERROR_MESSAGES.ONLY_NUMBER);
    });
  });
});
