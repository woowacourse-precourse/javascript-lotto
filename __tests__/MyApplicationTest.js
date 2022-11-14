const App = require("../src/App");

describe("App 클래스 추가 테스트", () => {
  test("사용자가 입력한 구입금액에 숫자가 아닌 값이 있을 경우 예외가 발생한다.", () => {
    expect(() => {
      new App().isValidate("rsfa");
    }).toThrow("[ERROR]");
  });

  test("사용자가 원하는 수 만큼의 로또를 발행해야한다.", () => {
    expect(new App().issueLotto(3).length).toBe(3);
  });
});
