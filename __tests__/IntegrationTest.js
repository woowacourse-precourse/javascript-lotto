const Lotto = require("../src/Lotto");
const LottoGenerator = require("../src/LottoGenerator");
const LottoPrize = require("../src/LottoPrize");
const Payment = require("../src/Payment");

const { ERROR_MSG, PRIZE } = require("../src/utils/string");

describe("LottoGenerator 클래스 테스트", () => {
  const lotto = LottoGenerator.createLottoNumbers();
  test("로또는 6 개의 숫자로 구성되어있습니다", () => {
    expect(lotto.length).toBe(6);
  });
  test("로또 번호는 서로 중복되지 않습니다.", () => {
    const duplicate = lotto.filter((v, i) => i !== lotto.indexOf(v));
    expect(duplicate.length).toBe(0);
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

describe("LottoPrize 클래스 테스트", () => {
  const lottoMatcher = new LottoPrize();
  const lottos = [
    new Lotto([1, 2, 3, 4, 5, 6]),
    new Lotto([1, 5, 19, 20, 21, 24]),
  ];
  const matchingLotto = {
    winning: new Lotto([1, 5, 19, 20, 21, 22]),
    bonus: 23,
  };
  const prize = lottoMatcher.getLottoPrize(lottos, matchingLotto);
  test("구매한 로또들과 매칭 로또의 숫자를 비교하여 상금을 수령합니다.", () => {
    expect(prize).toBe(PRIZE["THIRD"]);
  });
});
