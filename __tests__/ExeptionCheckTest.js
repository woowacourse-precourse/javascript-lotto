const App = require("../src/App");
const ExeptionCheck = require("../src/ExeptionCheck");
const { Console } = require("@woowacourse/mission-utils");

afterEach(() => {
  Console.close();
});

describe("App 클래스의 예외 처리 테스트", () => {
  test("유저 입력값이 1,000단위가 아닐때 예외를 throw 하는지 확인", () => {
    const exeptionCheck = new ExeptionCheck();
    const moneyValue = 1100;
    expect(() => { exeptionCheck.userInputMoneyValue(moneyValue); }).toThrow();
  });
});