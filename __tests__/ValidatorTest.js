const Validator = require('../src/Validator');
const { ERROR_MESSAGES } = require('../src/common/messages');

describe('Validator 클래스 : 구입 금액 테스트', () => {
  test('🖐 사용자가 1,000으로 나누어 떨어지지 않는 금액을 입력하면 에러가 발생한다.', () => {
    const invalidMoney = '1234';

    expect(() => {
      Validator.checkValidMoney(invalidMoney);
    }).toThrowError(`${ERROR_MESSAGES.INVALID_MONEY}`);
  });
});

describe('Validator 클래스 : 당첨 번호 테스트', () => {
  test('🖐 사용자가 숫자가 아닌 번호를 입력하면 에러가 발생한다', () => {
    const invalidInputs = ['우테코 조아요', '', ' ', 'Reason', '1a', '1e4'];

    expect(() => {
      invalidInputs.forEach((input) => {
        Validator.checkWinNumbers(input);
      });
    }).toThrowError(`${ERROR_MESSAGES.INVALID_INPUT}`);
  });
});
