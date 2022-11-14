const PurchaseValidate = require("../src/validate/PurchaseValidate.js");
const { ERROR } = require("../src/utils/constant.js");

describe("구매 클래스 테스트", () => {
  test("입력 금액이 숫자가 아니면 예외처리한다.", () => {
    expect(() => {
      const input = Number("가나다라마바사");
      new PurchaseValidate(input);
    }).toThrow(ERROR.PURCHASE_ERROR);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("입력 금액이 1000원으로 나누어 떨어지지 않으면 예외처리 한다.", () => {
    expect(() => {
      const input = Number(1800);
      new PurchaseValidate(input);
    }).toThrow(ERROR.PURCHASE_CHARGE);
  });

  // 아래에 추가 테스트 작성 가능
  test("입력금액이 1000보다 작으면 예외처리 한다", () => {
    expect(() => {
      const input = Number(900);
      new PurchaseValidate(input);
    }).toThrow(ERROR.PURCHASE_ERROR);
  });

  test("입력 금액 중 공백이 포함되면 예외가 발생한다.", () => {
    expect(() => {
      const input = Number("20 00");
      new PurchaseValidate(input);
    }).toThrow(ERROR.PURCHASE_ERROR);
  });
});
