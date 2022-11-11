const App = require('../src/App');

describe('로또 구매 테스트', () => {
  test('입력금액에 따른 로또 개수 테스트', () => {
    const inputPricesAndLottoCount = [
      {
        price: 1000,
        count: 1,
      },
      {
        price: 2000,
        count: 2,
      },
      {
        price: 5000,
        count: 5,
      },
      {
        price: 15000,
        count: 15,
      },
      {
        price: 21000,
        count: 21,
      },
    ];
    const { lottoCountGetter } = App;

    inputPricesAndLottoCount.map((priceAndCount) => {
      expect(lottoCountGetter(priceAndCount.price)).toEqual(
        priceAndCount.count,
      );
    });
  });
});
