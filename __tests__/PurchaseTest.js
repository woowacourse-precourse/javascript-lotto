/* eslint-disable */
const PurChase = require("../src/PurChase");
const { ERROR_MESSAGES } = require("../src/Constants");

describe("로또 구매 클래스 테스트", () => {
  test("구입 금액이 로또 금액인 1000원이 넘지 않는 경우 예외가 발생한다.", () => {
    expect(() => {
      new PurChase("100");
    }).toThrow(ERROR_MESSAGES.INVALID_COST_MIN);

    expect(() => {
      new PurChase("900");
    }).toThrow(ERROR_MESSAGES.INVALID_COST_MIN);
  });

  test("구입 금액이 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new PurChase("1000a");
    }).toThrow(ERROR_MESSAGES.INVALID_COST_TYPE);

    expect(() => {
      new PurChase("6000-");
    }).toThrow(ERROR_MESSAGES.INVALID_COST_TYPE);
  });

  test("구입 금액이 로또 금액인 1000원으로 떨어지지 않는 경우 예외가 발생한다.", () => {
    expect(() => {
      new PurChase("1300");
    }).toThrow(ERROR_MESSAGES.INVALID_COST_UNIT);

    expect(() => {
      new PurChase("82900");
    }).toThrow(ERROR_MESSAGES.INVALID_COST_UNIT);
  });

  test("로또 클래스 정상 작동 테스트", () => {
    const exampleOne = "8000";
    const exampleTwo = "100000";
    const normalOperationOne = new PurChase(exampleOne);
    const normalOperationTwo = new PurChase(exampleTwo);

    expect(normalOperationOne.getPayment()).toEqual(Number(exampleOne));
    expect(normalOperationTwo.getPayment()).toEqual(Number(exampleTwo));
  });
});
