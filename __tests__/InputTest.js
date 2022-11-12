const {
  validateWinNumbers,
  validateBonusNumber,
} = require("../src/validateNumber");

describe("당첨 번호 클래스 테스트", () => {
  test("당첨 번호의 개수가 6개인가?", () => {
    expect(() => {
      validateWinNumbers("1,2,3,4,5,6,7");
    }).toThrow("[ERROR]");
  });

  test("1 ~ 45 내의 번호만 입력했는가?", () => {
    expect(() => {
      validateWinNumbers("21,27,28,11,34,46");
    }).toThrow("[ERROR]");
  });

  test("중복되는 번호를 입력했는가?", () => {
    expect(() => {
      validateWinNumbers("1,7,5,22,11,7");
    }).toThrow("[ERROR]");
  });

  test("숫자 이외의 값이 들어있는가?", () => {
    expect(() => {
      validateWinNumbers("1,2,3,4,5,6.");
    }).toThrow("[ERROR]");
  });
});

describe("보너스 번호 클래스 테스트", () => {
  test("숫자 이외의 값이 들어있는가?", () => {
    expect(() => {
      validateBonusNumber("2.7");
    }).toThrow("[ERROR]");
  });

  test("1 ~ 45 내의 번호만 입력했는가?", () => {
    expect(() => {
      validateBonusNumber("0");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호와 보너스 번호가 중복되는가?", () => {
    expect(() => {
      validateBonusNumber("23", [1, 2, 8, 9, 23, 7]);
    }).toThrow("[ERROR]");
  });
});
