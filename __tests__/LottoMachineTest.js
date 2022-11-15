const LottoMachine = require("../src/LottoMachine");
const { ERROR_MESSAGE } = require("../src/constant/Constant");

describe("로또 자동발행기 클래스 테스트", () => {
  test("구매금액이 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new LottoMachine("문자");
    }).toThrow(ERROR_MESSAGE.INVALID_PURCHASE_AMOUMT.NOT_A_NUMBER);
  });

  test("구매금액이 1000원 단위로 떨어지지 않을 경우 예외가 발생한다.", () => {
    expect(() => {
      new LottoMachine("2022");
    }).toThrow(ERROR_MESSAGE.INVALID_PURCHASE_AMOUMT.INVALID_UNIT);
  });

  test("구매금액이 1000원 이하인 경우 예외가 발생한다.", () => {
    expect(() => {
      new LottoMachine("0");
    }).toThrow(ERROR_MESSAGE.INVALID_PURCHASE_AMOUMT.INVALID_NUMBER);
  });
});
