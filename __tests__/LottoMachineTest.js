const LottoMachine = require("../src/model/LottoMachine");

describe("LottoMachineTest 보너스 숫자 관련 테스트", () => {
  const lottoMachine = new LottoMachine();

  test("보너스 숫자가 빈문자열이라면 예외가 발생한다.", () => {
    expect(() => {
      lottoMachine.setBonusNumber("");
    }).toThrow("[ERROR]");
  });

  test("보너스 숫자가 정수가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      lottoMachine.setBonusNumber("이승환");
    }).toThrow("[ERROR]");
  });

  test("보너스 숫자가 1~45 범주를 벗어난다면 예외가 발생한다.", () => {
    expect(() => {
      lottoMachine.setBonusNumber(-3);
    }).toThrow("[ERROR]");

    expect(() => {
      lottoMachine.setBonusNumber(47);
    }).toThrow("[ERROR]");
  });

  test("보너스 숫자가 정답 번호에 존재한다면 예외가 발생한다.", () => {
    expect(() => {
      lottoMachine.setLottoToUse([1, 2, 3, 4, 5, 6]);
      lottoMachine.setBonusNumber(6);
    }).toThrow("[ERROR]");
  });
});
