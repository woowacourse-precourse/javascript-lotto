const App = require("../src/App.js");
const { Console } = require("@woowacourse/mission-utils");
const {
  IS_NUMBER,
  IS_ENOUGH,
  IS_RANGE,
  IS_NOT_IN_WINNER_NUMBER,
} = require("../src/const/ErrorMessages");

afterAll(() => {
  Console.close();
});

describe("보너스 번호 유효성 검사", () => {
  test("문자열 입력", () => {
    expect(() => {
      const app = new App();
      app.validateBonusNumbers("hello");
    }).toThrow(IS_NUMBER);
  });

  test("빈 문자열(whiteSpace) 입력 1", () => {
    expect(() => {
      const app = new App();
      app.validateBonusNumbers(" ");
    }).toThrow(IS_NUMBER);
  });

  test("빈 문자열(whiteSpace) 입력 2", () => {
    expect(() => {
      const app = new App();
      app.validateBonusNumbers("");
    }).toThrow(IS_NUMBER);
  });

  test("숫자와 문자 함께 입력", () => {
    expect(() => {
      const app = new App();
      app.validateBonusNumbers("44ff");
    }).toThrow(IS_NUMBER);
  });

  test("마이너스 값 입력", () => {
    expect(() => {
      const app = new App();
      app.validateBonusNumbers("-3");
    }).toThrow(IS_NUMBER);
  });

  test("소숫값 입력", () => {
    expect(() => {
      const app = new App();
      app.validateBonusNumbers("4.15");
    }).toThrow(IS_NUMBER);
  });

  test("범위 밖의 숫자 입력 1", () => {
    expect(() => {
      const app = new App();
      app.validateBonusNumbers("0");
    }).toThrow(IS_RANGE);
  });

  test("범위 밖의 숫자 입력 2", () => {
    expect(() => {
      const app = new App();
      app.validateBonusNumbers("46");
    }).toThrow(IS_RANGE);
  });

  test("당첨 번호에 존재하는 숫자 입력", () => {
    expect(() => {
      const app = new App();
      app.setWinnerNumbers([1, 2, 3, 4, 5, 6]);
      app.validateBonusNumbers("6");
    }).toThrow(IS_NOT_IN_WINNER_NUMBER);
  });
});
