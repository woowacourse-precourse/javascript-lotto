const Validation = require("../src/validator/Validation");
const { ERROR_MONEY } = require("../src/constants/messages.js");
const validation = new Validation();

describe("로또 구입 금액 입력 유효성 검증 테스트", () => {
  it("금액이 천원 단위가 아닐 경우 예외처리", () => {
    const purchaseMoney = 8300;
    expect(() => validation.isValidMoney(purchaseMoney)).toThrow(
      ERROR_MONEY.NOT_THOUSAND_UNIT
    );
  });

  it("금액에 0이 입력될 경우 예외처리", () => {
    const purchaseMoney = "0";
    expect(() => validation.isValidMoney(purchaseMoney)).toThrow(
      ERROR_MONEY.ZERO
    );
  });

  it("금액에 숫자가 아닌 값을 입력할 경우 예외처리", () => {
    const purchaseMoney = "ab#";
    expect(() => validation.isValidMoney(purchaseMoney)).toThrow(
      ERROR_MONEY.TYPE_NUMBER
    );
  });

  it("금액에 공백이 입력될 경우 예외처리", () => {
    const purchaseMoney = "";
    expect(() => validation.isValidMoney(purchaseMoney)).toThrow(
      ERROR_MONEY.EMPTY
    );
  });

  it("금액에 소수점을 입력할 경우 예외처리", () => {
    const purchaseMoney = 1000.123;
    expect(() => validation.isValidMoney(purchaseMoney)).toThrow(
      ERROR_MONEY.NOT_THOUSAND_UNIT
    );
  });

  it("금액이 1000원 이하일 경우 예외처리", () => {
    const purchaseMoney = 500;
    expect(() => validation.isValidMoney(purchaseMoney)).toThrow(
      ERROR_MONEY.NOT_THOUSAND_UNIT
    );
  });

  it("금액이 음수일 경우 예외처리", () => {
    const purchaseMoney = -1;
    expect(() => validation.isValidMoney(purchaseMoney)).toThrow(
      ERROR_MONEY.NEGATIVE_INPUT
    );
  });
});
