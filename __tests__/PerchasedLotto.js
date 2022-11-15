const { ERROR_MESSAGE } = require("../src/constants");
const PurchasedLotto = require("../src/PurchasedLotto");

describe("구매한 로또 클래스 테스트", () => {
  test("구매금액이 1000원 이하면 예외가 발생한다.", () => {
    expect(() => {
    new PurchasedLotto(700);
    }).toThrow(ERROR_MESSAGE.PURCHASE_MONEY_ERROR);
  });

  test("구매금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
    new PurchasedLotto('70hello');
    }).toThrow(ERROR_MESSAGE.PURCHASE_IS_NAN_ERROR);
  });
});
