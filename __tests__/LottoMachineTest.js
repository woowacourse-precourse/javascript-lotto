const LottoMachine = require("../src/LottoMachine");

describe("로또 머신 클래스 테스트", () => {
  test("금액이 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new LottoMachine("천원");
    }).toThrow("[ERROR]");
  });

  test("금액이 1,000원 단위로 입력되지 않을 경우 예외가 발생한다.", () => {
    expect(() => {
      new LottoMachine("1500");
    }).toThrow("[ERROR]");
  });

});
