const App = require("../src/App.js");
const { Console } = require("@woowacourse/mission-utils");
const {
  IS_WINNER_NUMBER,
  IS_ENOUGH,
  IS_RANGE,
} = require("../src/const/ErrorMessages");

afterAll(() => {
  Console.close();
});

describe("당첨 번호 유효성 검사", () => {
  test("문자열 입력", () => {
    expect(() => {
      const app = new App();
      app.validateWinnerNumbers("hello");
    }).toThrow(IS_WINNER_NUMBER);
  });

  test("빈 문자열(whiteSpace) 입력 1", () => {
    expect(() => {
      const app = new App();
      app.validateWinnerNumbers("4,5,6, ,7");
    }).toThrow(IS_WINNER_NUMBER);
  });

  test("빈 문자열(whiteSpace) 입력 2", () => {
    expect(() => {
      const app = new App();
      app.validateWinnerNumbers("4,5,6,,7");
    }).toThrow(IS_WINNER_NUMBER);
  });

  test("쉼표로 입력이 끝나는 경우", () => {
    expect(() => {
      const app = new App();
      app.validateWinnerNumbers("4,5,6,8,7,35,");
    }).toThrow(IS_WINNER_NUMBER);
  });

  test("숫자와 문자 함께 입력", () => {
    expect(() => {
      const app = new App();
      app.validateWinnerNumbers("4,5,6,45,hi,[e/");
    }).toThrow(IS_WINNER_NUMBER);
  });

  test("6글자 이상 입력한 경우", () => {
    expect(() => {
      const app = new App();
      app.validateWinnerNumbers("1,34,6,68,43,23,67");
    }).toThrow(IS_WINNER_NUMBER);
  });

  test("마이너스 값 입력", () => {
    expect(() => {
      const app = new App();
      app.validateWinnerNumbers("-3,34,45,1,2,5");
    }).toThrow(IS_WINNER_NUMBER);
  });

  test("중복되는 값 입력", () => {
    expect(() => {
      const app = new App();
      app.validateWinnerNumbers("1,1,2,3,4,5");
    }).toThrow(IS_ENOUGH);
  });

  test("범위 밖의 숫자 입력 1", () => {
    expect(() => {
      const app = new App();
      app.validateWinnerNumbers("0,3,4,6,7,8");
    }).toThrow(IS_RANGE);
  });

  test("범위 밖의 숫자 입력 2", () => {
    expect(() => {
      const app = new App();
      app.validateWinnerNumbers("4,5,757,32,42,12");
    }).toThrow(IS_RANGE);
  });
});
