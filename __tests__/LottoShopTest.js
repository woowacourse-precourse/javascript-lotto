const LottoShop = require('../src/LottoShop');

describe('구매 테스트', () => {
  test('몇장의 로또를 구입할 수 있는지 계산하는 테스트.', () => {
    const lottoShop = new LottoShop(8000);
    const result = lottoShop.countLottoAmount(8000);

    expect(result).toEqual(8);
  });

  test('로또 생성 테스트.', () => {
    const lottoShop = new LottoShop(8000);
    const result = lottoShop.createPurchasedNumbers(8).length;

    expect(result).toEqual(8);
  });
});
