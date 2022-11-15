const {
  validateSixLength,
  validatePurchaseAmount,
  validateNumberArray,
  validateBonusDuplicate,
  validateBlank,
} = require("../src/LottoValidate.js");

describe("로또 길이 유효성 검사", () => {
  test("로또 번호의 개수가 6개가 넘어가면 에러 발생.", () => {
    expect(() => {
      validateSixLength([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });
});

describe("사용자 로또 구매 입력 검사", () => {
  test("사용자 구매 입력은 숫자여야 한다.", () => {
    expect(() => {
      validatePurchaseAmount("abcde");
    }).toThrow("[ERROR]");
  });
  test("사용자 구매 입력은 1000원 이상이어야 한다.", () => {
    expect(() => {
      validatePurchaseAmount(800);
    }).toThrow("[ERROR]");
  });
  test("사용자 구매 입력은 1000의 배수여야 한다..", () => {
    expect(() => {
      validatePurchaseAmount(2500);
    }).toThrow("[ERROR]");
  });
});

describe("당첨 번호 유효성 검사", () => {
  test("당첨 번호는 1 ~ 45사이의 숫자", () => {
    expect(() => {
      validateNumberArray([1, 2, 3, 4, 5, "a"]);
    }).toThrow("[ERROR]");
  });
});

describe("보너스 번호 유효성 검사", () => {
  test("보너스 번호는 기존의 당첨 번호와 겹치지 않아야 한다.", () => {
    expect(() => {
      validateBonusDuplicate(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});
