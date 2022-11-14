const Calculator = require('../src/Calculator');

describe('계산기 클래스 테스트', () => {
  decribe('예외 테스트', () => {
    test('구입 금액이 로또 단가 이하면 예외가 발생한다.', () => {
      const payList = [-1000, 0, 999];
      payList.forEach((pay) => {
        expect(() => {
          new Calculator(pay);
        }).toThrow('[ERROR]');
      });
    });

    test('구입 금액이 로또 단가에 나누어 떨어지지 않으면 예외가 발생한다.', () => {
      const pay = 1001;
      expect(() => {
        new Calculator(pay);
      }).toThrow('[ERROR]');
    });
  });
});
