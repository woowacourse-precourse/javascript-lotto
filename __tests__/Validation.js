const Validation = require("../src/Validation");

describe("Validation 클래스 테스트", () => {
  test("구입 금액에 문자가 포함되어 있으면 에러가 발생한다.", () => {
    expect(() => {
      Validation.checkVaildLottoAmount(",");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000원 단위가 아니면 에러가 발생한다", () => {
    expect(() => {
      Validation.checkVaildLottoAmount(1100);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000원보다 작으면 에러가 발생한다", () => {
    expect(() => {
      Validation.checkVaildLottoAmount(900);
    }).toThrow("[ERROR]");
  });

  test("당첨번호에 형식이 올바르지 않으면 에러가 발생한다.", () => {
    expect(() => {
      Validation.checkVaildWinNumber("1-2-3-4-5-6");
    }).toThrow("[ERROR]");
  });

  test("당첨번호가 1~45 사이가 아니라면 에러가 발생한다.", () => {
    expect(() => {
      Validation.checkVaildWinNumber("1,2,3,4,5,47");
    }).toThrow("[ERROR]");
  });

  test("당첨번호가 6개가 아니라면 에러가 발생한다.", () => {
    expect(() => {
      Validation.checkVaildWinNumber("1,11,22,33,44");
    }).toThrow("[ERROR]");
  });
});
