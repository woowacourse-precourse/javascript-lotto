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

  test("로또 구매 비용을 올바르게 입력하면 예외가 발생하지 않는다.", () => {
    expect(() => {
      const INPUT = "15000";
      APP.checkCost(INPUT)
    }).not.toThrow("[ERROR]")
  });
})

describe("로또 당첨 번호 입력 테스트", () => {
  const APP = new App();

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
    const INPUT = "1,3,5,13,7,10";
    const RESULT = APP.convertSixInputsToNumbers(INPUT);
    expect(RESULT).toEqual([1, 3, 5, 7, 10, 13])
  });
})

describe("로또 보너스 번호 입력 테스트", () => {
  const APP = new App();
  const WON_LOTTO = new Lotto([1, 4, 10, 11, 12, 13]);

  test("보너스 번호에 아무 것도 입력하지 않으면 예외가 발생한다.", () => {
    expect(() => {
      const INPUT = "";
      APP.checkBonusNumber(INPUT, WON_LOTTO)
    }).toThrow("[ERROR]")
  });

  test("보너스 번호에 숫자가 아닌 문자를 입력하면 예외가 발생한다.", () => {
    expect(() => {
      const INPUT = "ab";
      APP.checkBonusNumber(INPUT, WON_LOTTO)
    }).toThrow("[ERROR]")
  });

  test("보너스 번호에 1-45를 벗어난 숫자를 입력하면 예외가 발생한다.", () => {
    expect(() => {
      const INPUT = "50";
      APP.checkBonusNumber(INPUT, WON_LOTTO)
    }).toThrow("[ERROR]")
  });

  test("보너스 번호에 당첨 번호 중 하나를 입력하면 예외가 발생한다.", () => {
    expect(() => {
      const INPUT = "4";
      APP.checkBonusNumber(INPUT, WON_LOTTO)
    }).toThrow("[ERROR]")
  });

  test("보너스 번호를 올바르게 입력하면 예외가 발생하지 않는다.", () => {
    expect(() => {
      const INPUT = "30";
      APP.checkBonusNumber(INPUT, WON_LOTTO)
    }).not.toThrow("[ERROR]")
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
  });

  test("로또 번호를 올바르게 넣으면 예외가 발생하지 않는다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow("[ERROR]");
  });
});


