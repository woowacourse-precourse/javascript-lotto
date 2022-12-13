const Accounting = require('../src/Accounting');
const MESSAGE = require('../src/constants/lottoMessage');

describe('Accounting 클래스 테스트', () => {
  test.each([[-5000], [0]])(
    '구입 금액이 1000원 미만일 경우 예외가 발생한다.',
    (input) => {
      const accounting = new Accounting();
      expect(() => {
        accounting.setMoney(input);
      }).toThrow(MESSAGE.ERROR.invalidMoney);
    },
  );

  test.each([[1005], [500]])(
    '구입 금액은 1000원 단위로 입력할 수 있습니다.',
    (input) => {
      const accounting = new Accounting();
      expect(() => {
        accounting.setMoney(input);
      }).toThrow(MESSAGE.ERROR.remainChange);
    },
  );

  test.each([
    [6000, 30000, '500.0'],
    [3000, 50000, '1666.7'],
    [6000, 50000, '833.3'],
  ])(
    '수익률 소수점 둘째 자리 반올림 테스트',
    (input, totalPrizeMoney, result) => {
      const accounting = new Accounting();
      accounting.setMoney(input);
      accounting.calcProfitRate(totalPrizeMoney);
      expect(accounting.getProfitRate()).toEqual(result);
    },
  );
});
