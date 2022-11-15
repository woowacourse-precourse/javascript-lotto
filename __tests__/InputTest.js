const {
  validateWinNumbers,
  validateBonusNumber,
  validatePurchaseCost,
} = require("../src/validateInput");

describe("구입 가격 클래스 테스트", () => {
  test("구입 가격을 숫자로 입력했는가?", () => {
    expect(() => {
      validatePurchaseCost("1000.");
    }).toThrow("[ERROR]");
  });

  test("구입 금액의 단위는 1,000인가?", () => {
    expect(() => {
      validatePurchaseCost("12345");
    }).toThrow("[ERROR]");
  });

  test("최소 구입 금액을 입력했는가?", () => {
    expect(() => {
      validatePurchaseCost("900");
    }).toThrow("[ERROR]");
  });
});

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
