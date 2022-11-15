const App = require("../src/App");

describe("구매 금액 입력 에외 테스트", () => {
  test("숫자가 아닌 입력값일 경우에 예외가 발생한다.", () => {
    const app = new App();
    const inputBuyMoney = "800p";

    expect(() => {
      app.validateIsNumber(inputBuyMoney);
    }).toThrow("[ERROR]숫자를 입력해주세요");
  });

  test("1000원 이하의 금액을 입력하면 예외가 발생한다.", () => {
    const app = new App();
    const inputBuyMoney = "800 ";

    expect(() => {
      app.validateIsOverThousand(inputBuyMoney);
    }).toThrow("[ERROR]1000원 이상의 금액을 입력해주세요.");
  });

  test("1000원 단위가 아닌 숫자를 입력하면 예외가 발생한다.", () => {
    const app = new App();
    const inputBuyMoney = "8800";

    expect(() => {
      app.validateIsDividedByThounsand(inputBuyMoney);
    }).toThrow("[ERROR]1000원 단위의 숫자를 입력해주세요.");
  });
});

describe("보너스 숫자 입력 에외 테스트", () => {
  test("1부터 45 사이의 숫자가 아닌 경우에 예외가 발생한다.", () => {
    const app = new App();
    const input = "80";

    expect(() => {
      app.validateRange(input);
    }).toThrow("[ERROR]1부터 45 사이의 숫자를 입력해주세요.");
  });
});
