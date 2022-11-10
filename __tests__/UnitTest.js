const LottoGenerator = require("../src/LottoGenerator");
const Lotto = require("../src/Lotto");
const Payment = require("../src/Payment");

describe("LottoGenerator 클래스 테스트", () => {
  test("6 개의 서로 다른 로또 숫자 뽑기.", () => {
    expect(LottoGenerator.createLottoNumbers().length).toBe(6);
  });
});

describe("Payment 클래스 테스트", () => {
  test("5000원으로 로또 5 개 발행하기", () => {
    const money = 5000;
    const payment = new Payment(money);
    const lottos = payment.issueLottos();
    expect(lottos.length).toBe(5);
    expect(lottos[0].getNumbers().length).toBe(6);
  });
});
