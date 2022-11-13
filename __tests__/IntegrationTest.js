const LottoGenerator = require("../src/LottoGenerator");
const Payment = require("../src/Payment");

const { ERROR_MSG } = require("../src/utils/string");

describe("LottoGenerator 클래스 테스트", () => {
  test("6 개의 서로 다른 로또 숫자 뽑기.", () => {
    expect(LottoGenerator.createLottoNumbers().length).toBe(6);
  });
});

describe("Payment 클래스 테스트", () => {
  test("로또를 구매하려면 숫자를 입력해야 합니다.", () => {
    expect(() => {
      const payment = new Payment("가나다");
      payment.issueLottos();
    }).toThrow(ERROR_MSG.PAYMENT_VAL_NUMBER);
  });
  test("로또는 1000 원 단위로만 구매할 수 있습니다", () => {
    expect(() => {
      const payment = new Payment(4800);
      payment.issueLottos();
    }).toThrow(ERROR_MSG.PAYMENT_VAL_UNIT);
  });
  test("5000원으로 로또 5 개 발행하기", () => {
    const payment = new Payment(5000);
    const lottos = payment.issueLottos();
    expect(lottos.length).toBe(5);
    expect(lottos[0].getNumbers().length).toBe(6);
  });
});
