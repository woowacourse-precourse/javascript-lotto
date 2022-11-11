const App = require("../src/App");

describe.only("입출력 값 테스트", () => {
  test("로또 구입 금액을 1,000원 단위가 아닐 시 예외 발생한다.", () => {
    const app = new App();
    const throwErrorFn = () => app.purchaseLotto();

    expect(throwErrorFn).toThrow();
  });
});
