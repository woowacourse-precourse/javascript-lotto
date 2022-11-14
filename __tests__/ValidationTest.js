const App = require("../src/App.js");

describe("App 내부의 Validation 메서드에 대한 테스트", () => {
  test("입력한 돈이 숫자가 아닐 때 오류가 발생한다.", () => {
    const app = new App();
    expect(() => {
      app.validateMoney("abcde");
    }).toThrow("[ERROR] 숫자가 아닙니다.");
  });
  test("입력한 돈이 unit(1000) 단위로 나누어 떨어지지 않을 때 오류가 발생한다.", () => {
    const app = new App();
    expect(() => {
      app.validateMoney("1200");
    }).toThrow("[ERROR] 1000원 단위로 금액을 입력해주세요.");
  });
});
