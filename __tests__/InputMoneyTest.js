const InputMoney = require("../src/InputMoney");
const MissionUtils = require("@woowacourse/mission-utils");

afterAll(() => {
  MissionUtils.Console.close();
});

describe("InputMoney 클래스 테스트", () => {
  test("입력값이 숫자가 아닌 경우 예외가 발생합니다.", () => {
    expect(() => {
      new InputMoney('money');
    }).toThrow();
    expect(() => {
      new InputMoney('woowacourse');
    }).toThrow();
    expect(() => {
      new InputMoney('');
    }).toThrow();
  });

  test("입력값이 음수인 경우 예외가 발생합니다.", () => {
    expect(() => {
      new InputMoney('-1000');
    }).toThrow();
    expect(() => {
      new InputMoney('-100000');
    }).toThrow();
    expect(() => {
      new InputMoney('-200000');
    }).toThrow();
  });

  test("입력값이 자연수가 아닌 경우 예외가 발생합니다.", () => {
    expect(() => {
      new InputMoney('1000.0001');
    }).toThrow();
    expect(() => {
      new InputMoney('100000.5');
    }).toThrow();
    expect(() => {
      new InputMoney('200000.200002');
    }).toThrow();
  });

  test("입력값이 1000원 단위가 아닌 경우 예외가 발생합니다.", () => {
    expect(() => {
      new InputMoney('1200');
    }).toThrow();
    expect(() => {
      new InputMoney('100010');
    }).toThrow();
    expect(() => {
      new InputMoney('999');
    }).toThrow();
  });
});