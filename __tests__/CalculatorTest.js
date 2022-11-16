const Calculator = require('../src/Calculator');

describe('계산기 클래스 테스트', () => {
  describe('예외 테스트', () => {
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

  describe('로또 구매 개수 계산 테스트', () => {
    test('8000원이면 구매 개수는 8개이다.', () => {
      const calculator = new Calculator(8000);
      expect(calculator.calcBuyCount()).toEqual(8);
    });
  });

  describe('수익률 계산 테스트', () => {
    test('8000원에 5등 1개면 수익률은 62.5%이다.', () => {
      const calculator = new Calculator(8000);
      calculator.addPrize(5);
      expect(calculator.calcProfitRate()).toEqual('62.5');
    });

    test('1000원에 1등 1개면 수익률은 200,000,000.0%이다.', () => {
      const calculator = new Calculator(1000);
      calculator.addPrize(1);
      expect(calculator.calcProfitRate()).toEqual('200,000,000.0');
    });
  });
});
