const UserNumber = require("../src/model/UserNumber");

describe("UserNumber 유저 구입금액 관련 테스트", () => {
  const userNumber = new UserNumber();

  test("유저 구입금액이 1000원으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      userNumber.setPurchasingAmount(1200);
    }).toThrow("[ERROR]");
  });

  test("유저 구입금액이 빈문자열이라면 예외가 발생한다.", () => {
    expect(() => {
      userNumber.setPurchasingAmount("");
    }).toThrow("[ERROR]");
  });

  test("유저 구입금액이 정수가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      userNumber.setPurchasingAmount("이승환");
    }).toThrow("[ERROR]");
  });
});

describe("UserNumber 보너스 숫자 관련 테스트", () => {
  const userNumber = new UserNumber();

  test("보너스 숫자가 빈문자열이라면 예외가 발생한다.", () => {
    expect(() => {
      userNumber.setBonusNumber("");
    }).toThrow("[ERROR]");
  });

  test("보너스 숫자가 정수가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      userNumber.setBonusNumber("이승환");
    }).toThrow("[ERROR]");
  });

  test("보너스 숫자가 1~45 범주를 벗어난다면 예외가 발생한다.", () => {
    expect(() => {
      userNumber.setBonusNumber(-3);
    }).toThrow("[ERROR]");

    expect(() => {
      userNumber.setBonusNumber(47);
    }).toThrow("[ERROR]");
  });
});
