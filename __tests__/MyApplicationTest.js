const App = require("../src/App");

describe("App 클래스 추가 테스트", () => {
  test("사용자가 입력한 구입금액에 숫자가 아닌 값이 있을 경우 예외가 발생한다.", () => {
    expect(() => {
      new App().isValidate("rsfa");
      console.log("Zz");
    }).toThrow("[ERROR]");
  });
});
