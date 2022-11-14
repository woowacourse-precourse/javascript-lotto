const { ERROR_MESSAGES } = require('../src/constant/messages');
const Validator = require('../src/utils/Validator');

describe('유효성 검사 클래스 메서드 테스트', () => {
  test('구입 금액 입력 시 숫자로 된 값이 아니면 타입 에러가 발생한다.', () => {
    expect(() => {
      const validator = new Validator();
      const money = '1000a';
      validator.validateNumber(money);
    }).toThrow(ERROR_MESSAGES.type);
  });

  test('구입 금액 입력 시 1000으로 나누어지지 않으면 에러가 발생한다.', () => {
    const money = '1001';
    const validator = new Validator();

    expect(() => {
      validator.validateUnit(money);
    }).toThrow(ERROR_MESSAGES.divisionByThousand);
  });

  test('로또 숫자가 6개가 아니면 에러가 발생한다.', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    const validateLength = () => {
      if (numbers.length !== 6) {
        throw new Error(ERROR_MESSAGES.length);
      }
    };
    expect(validateLength).toThrow(ERROR_MESSAGES.length);
  });

  test('로또 숫자에 중복된 숫자가 존재하면 에러가 발생한다.', () => {
    const numbers = [1, 2, 3, 3, 4, 5];
    const validator = new Validator();
    expect(() => {
      validator.validateDoubled(numbers);
    }).toThrow(ERROR_MESSAGES.overlap);
  });
});
