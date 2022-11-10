const Lotto = require("../src/Lotto");
const App = require("../src/App");

describe("입력 예외 발생 테스트", () => {
  const APP = new App();

  test("입력한 로또 구매 비용이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const INPUT = "abc1000";
      APP.checkCost(INPUT)
    }).toThrow("[ERROR]");
  });

  test("입력한 로또 구매 비용이 천 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const INPUT = "20500";
      APP.checkCost(INPUT)
    }).toThrow("[ERROR]")
  })
})

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });
});


