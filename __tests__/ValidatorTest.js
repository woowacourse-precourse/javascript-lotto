const Validator = require('../src/Validator');
const { ERROR_MESSAGES } = require('../src/common/messages');

describe('Validator 클래스 테스트', () => {
  test('🖐 사용자가 1,000으로 나누어 떨어지지 않는 금액을 입력하면 에러가 발생한다.', () => {
    const invalidMoney = '1234';

    expect(() => {
      Validator.checkValidMoney(invalidMoney);
    }).toThrowError(`${ERROR_MESSAGES.INVALID_MONEY}`);
  });
});
