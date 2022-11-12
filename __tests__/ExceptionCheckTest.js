const App = require("../src/App");
const ExceptionCheck = require("../src/ExceptionCheck");
const { Console } = require("@woowacourse/mission-utils");

afterEach(() => {
  Console.close();
});

describe("App 클래스의 예외 처리 테스트", () => {
  test("유저 입력값이 1,000단위가 아닐때 예외를 throw 하는지 확인", () => {
    const exceptionCheck = new ExceptionCheck();
    const moneyValue = 1100;
    expect(() => { exceptionCheck.userInputMoneyValue(moneyValue); }).toThrow();
  });

  test("예외 처리 발생시에 [ERROR]문구가 메세지의 맨앞에 있는지 확인", () => {
    const exceptionCheck = new ExceptionCheck();
    const moneyValue = 1100;
    expect(() => { exceptionCheck.userInputMoneyValue(moneyValue); }).toThrowError(/^\[ERROR\]/);
  });
});