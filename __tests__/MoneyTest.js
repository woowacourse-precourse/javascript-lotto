const Money = require("../src/Money.js");

describe("돈 클래스 테스트", () => {
    test("입력값이 음수이면 예외 처리.", () => {
      expect(() => {
        new Money(-8000);
      }).toThrow("[ERROR]");
    });
  
    test("입력값이 실수이면 예외 처리.", () => {
      expect(() => {
        new Money(8000.1);
      }).toThrow("[ERROR]");
    });
  
    test("입력값이 문자이면 예외 처리.", () => {
      expect(() => {
        new Money('a');
      }).toThrow("[ERROR]");
    });
  });