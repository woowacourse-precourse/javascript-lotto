const LottoGenerator = require("../src/LottoGenerator");
const Lotto = require("../src/Lotto");
const Payment = require("../src/Payment");
const { prizeMsg, toCurrencyFormat } = require("../src/utils/string");
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
describe("toCurrencyFormat 함수 테스트", () => {
  test("숫자 형식을 금액으로 변경하기", () => {
    expect(toCurrencyFormat(5000)).toBe("5,000");
    expect(toCurrencyFormat(2000000000)).toBe("2,000,000,000");
  });
});
describe("prizeMsg 함수 테스트", () => {
  test("3개 일치한 로또 1개 존재", () => {
    expect(prizeMsg("FIFTH", 1)).toBe("3개 일치 (5,000원) - 1개");
    expect(prizeMsg("SECOND", 0)).toBe(
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개"
    );
  });
});
