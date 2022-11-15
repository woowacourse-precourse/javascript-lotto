const LottoGenerator = require("../src/LottoGenerator");
const { ERROR_MESSAGE } = require("../src/constant/message");

describe("로또 생성기 예외 테스트", () => {
  test("구매금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoGenerator("money");
    }).toThrow(ERROR_MESSAGE.NOT_NUMBER);
  });

  test("구매금액이 1,000원 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new LottoGenerator("900");
    }).toThrow(ERROR_MESSAGE.LESS_MONEY);
  });

  test("구매금액이 1,000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoGenerator("1234");
    }).toThrow(ERROR_MESSAGE.NOT_DIVIDED);
  });
});
