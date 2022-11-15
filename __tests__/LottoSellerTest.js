const { Console } = require('@woowacourse/mission-utils');
const LottoSeller = require('../src/LottoSeller');

describe('로또셀러 클래스 테스트', () => {
  test('발행한 로또 번호가 오름차순으로 정렬되었는지 확인', () => {
    const sellLotto = new LottoSeller().sellLotto(3000);
    const lottos = sellLotto.map((lotto) => JSON.parse(lotto));

    lottos.forEach((lotto) => expect(lotto).toEqual(lotto.sort((a, b) => a - b)));
  });

  test('1000원으로 나누어 떨어지지 않는 금액을 입력하면 예외가 발생한다.', () => {
    const lottoSeller = new LottoSeller();

    expect(() => {
      lottoSeller.sellLotto(1999);
    }).toThrow('[ERROR]');
  });

  test('로또 금액이 1000원인지 확인', () => {
    const lottoPrice = new LottoSeller().getLottoPrice();

    expect(lottoPrice).toEqual(1000);
  });

  test('구매한 로또 개수 확인', () => {
    const lottoSeller = new LottoSeller();
    const lottoPrice = lottoSeller.getLottoPrice();
    const count = 3;
    const sellLotto = lottoSeller.sellLotto(count * lottoPrice);

    expect(sellLotto.length).toEqual(count);
  });
});

afterAll(() => {
  Console.close();
});
