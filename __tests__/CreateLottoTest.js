const LottoPerchaseMachine = require("../src/domain/LottoPurchaseMachine.js");
const Lotto = require("../src/Lotto.js");
const { Console } = require("@woowacourse/mission-utils");

describe("LottoGame.purchaseLottos", () => {
  afterEach(() => Console.close());

  test("금액이 투입되면 투입금 만큼의 로또가 발행되어야 한다.", () => {
    const lottoPerchaseMachine = new LottoPerchaseMachine();
    const input = "5000";
    lottoPerchaseMachine.insertMoney(input);

    const result = lottoPerchaseMachine.purchaseLottos();

    expect(result).toHaveLength(5);
  });

  test("발행된 로또는 모두 Lotto클래스의 instance여야 한다.", () => {
    const lottoPerchaseMachine = new LottoPerchaseMachine();
    const result = lottoPerchaseMachine.purchaseLottos();

    result.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
    });
  });
});
