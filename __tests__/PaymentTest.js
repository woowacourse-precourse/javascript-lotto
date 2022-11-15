const Payment = require("../src/model/Payment");
const { ERROR_MESSAGE } = require("../src/constants");

describe("지불 금액 클래스 테스트", () => {
  test("지불 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Payment('abcd');
    }).toThrow(ERROR_MESSAGE.NAN);
  });

  test("지불 금액이 1000원보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new Payment("0");
    }).toThrow(ERROR_MESSAGE.MIN_PRICE);
  });

  test("지불금액이 1000원으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Payment(1001);
    }).toThrow(ERROR_MESSAGE.PRICE_UNIT);
  });
});
