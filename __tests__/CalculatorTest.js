const App = require("../src/App");
const { Console } = require("@woowacourse/mission-utils");


afterEach(() => {
  Console.close();
});

describe("계산 기능 테스트", () => {
  test("App클래스의 calculatorLottoCount() 기능 테스트", () => {
    const app = new App();
    const input = 4000;
    const lottoCount = app.calculatorLottoCount(input);
    expect(lottoCount).toEqual(4);
  });
});