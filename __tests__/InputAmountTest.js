const InputAmount = require("../src/InputAmount");

describe("구입금액 클래스 테스트", () => {
  test("구매금액이 숫자가 아닌 문자가 들어가면 예외가 발생한다.", () => {
    expect(() => {
      new InputAmount("a");
    }).toThrow("[ERROR]");
  });

  test("구매금액이 천 원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new InputAmount(1111);
    }).toThrow("[ERROR]");
  });

  test("구매금액이 0보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new InputAmount(-1);
    }).toThrow("[ERROR]");
  });

  test("구매금액이 소수이면 예외가 발생한다.", () => {
    expect(() => {
      new InputAmount(1000.2);
    }).toThrow("[ERROR]");
  });
});
