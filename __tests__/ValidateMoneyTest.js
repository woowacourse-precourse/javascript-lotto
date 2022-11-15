const App = require("../src/App.js");
const MissionUtils = require("@woowacourse/mission-utils");
const ERROR_MESSAGES = require("../src/const/ErrorMessages");
const { Console } = MissionUtils;
const { IS_NUMBER, IS_OVER_MIN_COST, IS_NO_CHARGE } = ERROR_MESSAGES;

afterAll(() => {
  Console.close();
});

describe("숫자 외 다른 문자가 입력되면 에러가 발생한다.", () => {
  test("문자열 입력", () => {
    expect(() => {
      const app = new App();
      app.validateMoney("hello");
    }).toThrow(IS_NUMBER);
  });

  test("빈 문자열(whiteSpace) 입력", () => {
    expect(() => {
      const app = new App();
      app.validateMoney(" ");
    }).toThrow(IS_NUMBER);
  });

  test("숫자와 문자 함께 입력", () => {
    expect(() => {
      const app = new App();
      app.validateMoney("1000js");
    }).toThrow(IS_NUMBER);
  });
});

describe("최소 금액을 입력하지 않는 경우, 에러가 발생한다.", () => {
  test("마이너스 값 입력", () => {
    expect(() => {
      const app = new App();
      app.validateMoney("-3000");
    }).toThrow(IS_NUMBER);
  });

  test("소숫값 입력", () => {
    expect(() => {
      const app = new App();
      app.validateMoney("0.01");
    }).toThrow(IS_NUMBER);
  });

  test("0원 입력", () => {
    expect(() => {
      const app = new App();
      app.validateMoney("0");
    }).toThrow(IS_OVER_MIN_COST);
  });

  test("1000원 이하 입력", () => {
    expect(() => {
      const app = new App();
      app.validateMoney("100");
    }).toThrow(IS_OVER_MIN_COST);
  });
});

describe("1,000원으로 나누어 떨어지지 않는 경우, 예외가 발생한다. ", () => {
  test("10001원을 입력하는 경우", () => {
    expect(() => {
      const app = new App();
      app.validateMoney("10001");
    }).toThrow(IS_NO_CHARGE);
  });

  test("3444원을 입력하는 경우", () => {
    expect(() => {
      const app = new App();
      app.validateMoney("3444");
    }).toThrow(IS_NO_CHARGE);
  });

  test("4005657원을 입력하는 경우", () => {
    expect(() => {
      const app = new App();
      app.validateMoney("4005657");
    }).toThrow(IS_NO_CHARGE);
  });
});
