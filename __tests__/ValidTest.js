const Validation = require("../src/Validation.js");

describe("당첨 번호 입력 예외 테스트", () => {
  test("숫자가 아닌 값이 들어오면 예외가 발생한다", () => {
    expect(() => {
      Validation.validBonus("a");
    }).toThrow("[ERROR]");
  });
});

describe("로또 구입 입력 예외 테스트", () => {
  test("문자열이 포함되면 예외가 발생한다.", () => {
    expect(() => {
      Validation.validPurchase("8000원");
    }).toThrow("[ERROR]");
  });
  test("1000 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      Validation.validPurchase("8200");
    }).toThrow("[ERROR]");
  });
});

describe("당첨 번호 입력 예외 테스트", () => {
  test("숫자가 아닌 값이 들어오면 예외가 발생한다", () => {
    expect(() => {
      Validation.validWinning("1,2,q,4,5,6");
    }).toThrow("[ERROR]");
  });
  test("6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      Validation.validWinning("1,2,3,4,5,6,7");
    }).toThrow("[ERROR]");
  });
  test("중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      Validation.validWinning("1,1,2,3,4,5");
    }).toThrow("[ERROR]");
  });
  test("보너스 번호 추가시 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      Validation.validWinningAndBonus("1,1,2,3,4,5,6");
    }).toThrow("[ERROR]");
  });
});
