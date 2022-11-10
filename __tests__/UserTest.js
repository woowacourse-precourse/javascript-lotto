/* eslint-disable max-lines-per-function */
const User = require('../src/model/User');

describe('유저 클래스 테스트', () => {
  test('금액의 형식이 숫자가 아니면 예외가 발생한다.', () => {
    const money = ['a', 'true', ' ', '', 'e'];

    money.forEach((value) => {
      expect(() => {
        const user = new User();
        user.validateMoney(value);
      }).toThrow('[ERROR]');
    });
  });

  test('금액이 1000원으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    const money = ['1', '10', '999', '1001', 'Infinity'];

    money.forEach((value) => {
      expect(() => {
        const user = new User();
        user.validateMoney(value);
      }).toThrow('[ERROR]');
    });
  });
});
