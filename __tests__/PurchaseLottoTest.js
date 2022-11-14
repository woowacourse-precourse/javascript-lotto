const PurchaseLotto = require('../src/PurchaseLotto');

describe('로또 구입 테스트', () => {
  test('금액에 맞개 로또를 구매하는지 테스트', () => {
    const PURCHASE_LOTTO = new PurchaseLotto('5000');
    expect(PURCHASE_LOTTO.purchasedLottoTickets.length).toBe(5);
  });

  test('구매한 로또 번호가 6개인지 테스트', () => {
    const PURCHASE_LOTTO = new PurchaseLotto('5000');
    PURCHASE_LOTTO.purchasedLottoTickets.forEach((lotto) => {
      expect(lotto.length).toBe(6);
    });
  });

  test('구매한 로또 번호가 1 ~ 45 사이인지 테스트', () => {
    const PURCHASE_LOTTO = new PurchaseLotto('1000');
    const NUMBERS = PURCHASE_LOTTO.purchasedLottoTickets[0];
    NUMBERS.forEach((num) => {
      expect(num >= 1 && num <= 45).toBeTruthy();
    });
  });
});
