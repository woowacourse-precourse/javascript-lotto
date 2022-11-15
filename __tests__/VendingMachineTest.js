const VendingMachine = require('../src/VendingMachine');

describe('자판기 테스트', () => {
  describe('구입 금액을 입력받는 기능', () => {
    let vm;
    beforeEach(() => {
      vm = new VendingMachine();
    });

    it('구입금액은 1000원 단위의 숫자로 입력한다.', () => {
      const amounts = ['1000', '3000', '1000000', '95000'];

      amounts.forEach((amount) => {
        const result = vm.validate(amount);
        expect(result).toBeTruthy();
      });
    });

    it('구입금액이 1000원 단위 숫자가 아니면 에러가 발생한다.', () => {
      const input = '1234';

      expect(() => {
        vm.validate(input);
      }).toThrow('[ERROR]');
    });

    it('구입금액이 숫자가 아니면 에러가 발생한다.', () => {
      const input = 'qwer ';

      expect(() => {
        vm.validate(input);
      }).toThrow('[ERROR]');
    });
  });
});
