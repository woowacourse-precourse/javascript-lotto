const LottoStore = require('../src/LottoStore');

describe('로또스토어 클래스 테스트', () => {
  test('금액을 입력하면 해당 금액으로 구매할 수 있는 최대 로또 매수가 반환된다.', () => {
    const lottoStore = new LottoStore();
    const testMoney = 5000;
    const expectedBuyCount = 5;
    const testCount = lottoStore.askBuyLottoCount(testMoney);
    expect(testCount).toBe(expectedBuyCount);
  });
});
