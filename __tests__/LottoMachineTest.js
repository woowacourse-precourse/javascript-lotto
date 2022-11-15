const LottoMachineTest = require("../src/model/LottoMachine");

describe("LottoMachineTest 보너스 숫자 관련 테스트", () => {
  const userNumber = new LottoMachineTest();

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
