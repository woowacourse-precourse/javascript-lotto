const validationCheck = require("../src/util/ValidationCheck");

describe("로또 구입금액 입력 테스트", () => {
  test("구입금액이 빈값인 경우, false 반환", () => {
    expect(() => {
      const input = "";
      validationCheck.purchaseMoney(input);
    }).toThrow("[ERROR]");
  });

  test("구입금액에 공백이 포함된 경우, false 반환", () => {
    expect(() => {
      const input = "70 00";
      validationCheck.purchaseMoney(input);
    }).toThrow("[ERROR]");
  });

  test("구입금액에 숫자가 아닌 문자가 포함되어 있는 경우, false 반환", () => {
    expect(() => {
      const input = "7000a";
      validationCheck.purchaseMoney(input);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000원 단워가 아닌 경우 false 반환", () => {
    expect(() => {
      const input = "7777";
      validationCheck.purchaseMoney(input);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 0인 경우 false 반환", () => {
    expect(() => {
      const input = "0";
      validationCheck.purchaseMoney(input);
    }).toThrow("[ERROR]");
  });
});
