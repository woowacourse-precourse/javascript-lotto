const LottoAmount = require("../src/Lotto/LottoAmount")

describe("구입한 금액 유효성 테스트", () => {
  test("구입한 금액이 1000원 이하면 예외가 발생한다.", () => {
    let money = "500";
    expect(() => {
      new LottoAmount(money);
    }).toThrow("[ERROR]");

    money = "0";
    expect(() => {
      new LottoAmount(money);
    }).toThrow("[ERROR]");

    money = "-1";
    expect(() => {
      new LottoAmount(money);
    }).toThrow("[ERROR]");
  });
  
  test("구입한 금액이 숫자 타입이 아니면 예외가 발생한다.", () => {
    const money = "abc";
    expect(() => {
      new LottoAmount(money);
    }).toThrow("[ERROR]");
  });

  test("구입한 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    const money = "5500";
    expect(() => {
      new LottoAmount(money);
    }).toThrow("[ERROR]");
  });

  test("구입한 금액이 공백이면 예외가 발생한다.", () => {
    let money = " ";
    expect(() => {
      new LottoAmount(money);
    }).toThrow("[ERROR]");

    money = "";
    expect(() => {
      new LottoAmount(money);
    }).toThrow("[ERROR]");
  });

  test("구입한 금액이 정상적으로 입력되면, 아무 문제가 발생하지 않는다.", () => {
    const money = "5000"
    expect(() => {
      new LottoAmount(money)
    }).not.toThrow()
  })
});