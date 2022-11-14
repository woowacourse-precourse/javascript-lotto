const Store = require('../src/Store');

describe('예외 상황 테스트', () => {
  describe('구입 금액 유효성 검사', () => {
    test('사용자가 입력하지 않을 경우', () => {
      expect(() => {
        new Store().setMoney('');
      }).toThrow('[ERROR]');
    });

    test('사용자가 숫자가 아닌 다른 문자가 포함된 금액을 입력할 경우', () => {
      expect(() => {
        new Store().setMoney('test1');
      }).toThrow('[ERROR]');
    });

    test('사용자가 1,000으로 나눠지는 숫자가 아닌 다른 숫자를 입력할 경우', () => {
      expect(() => {
        new Store().setMoney('3928');
      }).toThrow('[ERROR]');
    });
  });
});
