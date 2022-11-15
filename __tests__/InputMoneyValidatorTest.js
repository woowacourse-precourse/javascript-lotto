const { Validator } = require("../src/utils/Validator");

describe("금액 입력 예외 테스트", () => {
  //expectThrow();
  test("입력 받은 금액이 숫자로 구성 되어있지 않다면 예외가 발생한다.", () => {
    expect(() => {
      Validator.isInputMoneyValid(" ");
    }).toThrow("[ERROR] 숫자만 입력 가능합니다.");
    expect(() => {
      Validator.isInputMoneyValid("122415000a");
    }).toThrow("[ERROR] 숫자만 입력 가능합니다.");
  });
  test("입력 받은 금액이 음수라면 예외가 발생한다.", () => {
    expect(() => {
      Validator.isInputMoneyValid("-1");
    }).toThrow("ERROR] 양수만 입력해주세요.");
    expect(() => {
      Validator.isInputMoneyValid("-5000");
    }).toThrow("ERROR] 양수만 입력해주세요.");
  });
  test("입력 받은 금액이 1000원 단위가 아니라면, 예외가 발생한다.", () => {
    expect(() => {
      Validator.isInputMoneyValid("5200");
    }).toThrow("[ERROR] 천원 단위 입력을 해주세요.");
    expect(() => {
      Validator.isInputMoneyValid("10009");
    }).toThrow("[ERROR] 천원 단위 입력을 해주세요.");
  });
  test("입력 받은 금액이 없다면 예외가 발생한다.", () => {
    expect(() => {
      Validator.isInputMoneyValid("");
    }).toThrow("[ERROR] 입력이 없습니다.");
  });

  test("입력 받은 금액이 6개가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      Validator.winnigLottoNumberValidator([1, 2, 3, 4, 5], 7);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });
});
