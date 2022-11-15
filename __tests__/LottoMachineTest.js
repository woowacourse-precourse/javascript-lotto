const { ERROR_MESSAGE } = require("../src/constants");
const LottoMachine = require("../src/LottoMachine");

describe("로또머신 클래스 테스트", () => {
  test("6개의 로또를 발행한다.", () => {
    const lottoMachine = new LottoMachine(7700);
    const result = lottoMachine.makeLotto();
    expect(result).toHaveLength(6);
  });

  test("구매금액 만큼 로또를 발행한다.", () => {
    const lottoMachine = new LottoMachine(7700);
    const result = lottoMachine.getLottoList();
    expect(result).toHaveLength(7);
  });

  test("구매금액이 1000원 이하면 예외가 발생한다.", () => {
    expect(() => {
    new LottoMachine(700);
    }).toThrow(ERROR_MESSAGE.PURCHASE_MONEY_ERROR);
  });

  test("구매금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
    new LottoMachine('70hello');
    }).toThrow(ERROR_MESSAGE.PURCHASE_IS_NAN_ERROR);
  });
});
