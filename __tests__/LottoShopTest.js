const { Console } = require("@woowacourse/mission-utils");
const LottoShop = require("../src/LottoShop");

describe("로또 판매 기능 테스트", () => {
  test("로또 1개당 금액이 1000원인지 테스트", () => {
    const lottoPrice = new LottoShop(1000).getLottoPrice();

    expect(lottoPrice).toEqual(1000);
  });

  test("1000으로 나누어 떨어지지 않는 구매 금액이 입력되면 에러를 발생시키는지 테스트", () => {
    expect(() => {
      const lottoShop = new LottoShop(8001);
    }).toThrow("[ERROR]");
  });

  test("구매한 로또 개수가 정확한지 테스트", () => {
    const lottoShop = new LottoShop(3000);
    const count = 3;
    const userLotto = lottoShop.getLottos();

    expect(userLotto.length).toEqual(count);
  });

  test("판매한 로또 번호가 오름차순 정렬되었는지 테스트", () => {
    const userLotto = new LottoShop(8000).getLottos();
    const lottos = userLotto.map((lotto) => lotto);

    lottos.forEach((lotto) => expect(lotto).toEqual(lotto.sort((a, b) => a - b)));
  });
});

afterAll(() => {
  Console.close();
});
