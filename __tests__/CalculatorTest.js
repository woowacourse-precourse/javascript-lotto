const App = require("../src/App");
const { Console } = require("@woowacourse/mission-utils");
const Calculator = require("../src/Calculator");


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

describe("Utils 클래스 matchNumberCount() 테스트", () => {
  test("당첨 숫자와 유저 구매 숫자의 같은 값 개수 확인", () => {
    const calculator = new Calculator();
    const winNumbers = [1, 2, 3, 4, 5, 6, 7];
    const userlottoNumbers = [1, 3, 5, 9, 40, 41];
    const count = calculator.matchNumberCount(winNumbers, userlottoNumbers);
    expect(count).toEqual(3);
  });
});
