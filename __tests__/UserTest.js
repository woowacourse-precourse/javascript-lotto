const { User, ERROR_MESSAGE } = require('../src/User');

describe('구입 금액 입력 검증', () => {
  test('숫자가 아닌 경우', () => {
    const user = new User();
    expect(() => user.checkPurchaseAmount(Number('a'))).toThrow(
      ERROR_MESSAGE.NOT_A_NUMBER,
    );
  });

  test('1,000원 미만인 경우', () => {
    const user = new User();
    expect(() => user.checkPurchaseAmount(Number('900'))).toThrow(
      ERROR_MESSAGE.LESS_THAN_1000,
    );
  });

  test('1,000원으로 나누어 떨어지지 않는 경우', () => {
    const user = new User();
    expect(() => user.checkPurchaseAmount(Number('1100'))).toThrow(
      ERROR_MESSAGE.NOT_MULTIPLE_OF_1000,
    );
  });
});
