const LottoSeller = require('./LottoSeller.js');
const LottoPrice = require('../UserMoney/UserMoney.js');
const { mockRandoms } = require('../../testFunction.js');

describe('LottoBuyer 클래스 테스트', () => {
  test('로또를 8개를 판매한다.', () => {
    const lottoNumbersList = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    mockRandoms(lottoNumbersList);

    const lottoSeller = new LottoSeller();
    const lottos = lottoSeller.sellLotto(new LottoPrice(8000));

    expect(lottos).toHaveLength(8);
  });
});
