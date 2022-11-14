const { validate } = require('../src/Game');
const { ERROR_MSG } = require('../src/Constant');

describe('게임 클래스 테스트', () => {
  test('입력 금액이 1,000원 단위가 아니면 예외가 발생한다.', () => {
    const validMoney = 5000;
    const invalidMoney = 5555;
    expect(() => {
      validate(invalidMoney);
    }).toThrow(ERROR_MSG.only1000WonUnits);
    expect(() => {
      validate(validMoney);
    }).not.toThrow(ERROR_MSG.only1000WonUnits);
  });
});
