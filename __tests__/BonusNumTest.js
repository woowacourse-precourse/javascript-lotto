const Vaildation = require("../src/Vaildation");

describe("보너스 번호 유효성 테스트", () => {
  test("보너스 번호가 특수문자이면 예외가 발생한다.", () => {
    const input = "!";
    expect(() => {
      new Vaildation[input];
    }).toThrow("[ERROR] 숫자만 입력하세요.");
  });

  test("보너스 번호가 공백이면 예외가 발생한다.", () => {
    const input = " ";
    expect(() => {
      new Vaildation[input];
    }).toThrow("[ERROR] 숫자만 입력하세요.");
  });

  test("보너스 번호가 문자이면 예외가 발생한다.", () => {
    const input = "a";
    expect(() => {
      new Vaildation[input];
    }).toThrow("[ERROR] 숫자만 입력하세요.");
  });

  test("보너스 번호는 1~45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    const input = 46;
    expect(() => {
      new Vaildation[input];
    }).toThrow("[ERROR] 1~45 사이에 숫자만 입력하세요.");
  });
});
