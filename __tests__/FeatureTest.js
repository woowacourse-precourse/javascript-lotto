const App = require("../src/App");

describe("예외 발생", () => {
  test("1000원 단위 이외의 수가 들어오면 예외가 발생한다.", () => {
    expect(() => {
      new App().validateMoney(123);
    }).toThrow("[ERROR]");

    expect(() => {
      new App().validateMoney("오천원");
    }).toThrow("[ERROR]");
  });
});
