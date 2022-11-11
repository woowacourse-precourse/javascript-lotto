const Lotto = require("../src/Lotto");
const App = require("../src/App");

describe("로또 구매 비용 입력 테스트", () => {
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
  });
})

describe("로또 당첨 번호 입력 테스트", () => {
  test("입력한 로또 번호 중 숫자가 아닌 것이 있으면 예외가 발생한다.", () => {
    expect(() => {
      const INPUT = "1,2,a,4,5,6";
      APP.convertSixInputsToNumbers(INPUT)
    }).toThrow("[ERROR]")
  });

  test("입력한 로또 번호에 콤마가 올바르지 않게 들어있으면 예외가 발생한다.", () => {
    expect(() => {
      const INPUT = "1,2,3,4,5,6,";
      APP.convertSixInputsToNumbers(INPUT)
    }).toThrow("[ERROR]")
  });

  test("로또 번호를 올바르게 입력했다면 숫자로 변환이 가능하다", () => {
    const INPUT = "1,3,5,7,10,13";
    const RESULT = APP.convertSixInputsToNumbers(INPUT);
    expect(RESULT).toEqual([1, 3, 5, 7, 10, 13])
  });
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

  test("로또 번호에 1-45 범위를 벗어난 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 50, 3, 4, 5]);
    }).toThrow("[ERROR]");
  })
});


