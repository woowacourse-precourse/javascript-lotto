const VendingMachine = require("../src/lotto/domain/VendingMachine");

describe("VendingMachine 클래스 테스트", () => {
  test("투입 금액에 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      const vendingMachine = new VendingMachine();
      vendingMachine.setMoney("123");
    }).toThrow("[ERROR]");
    expect(() => {
      const vendingMachine = new VendingMachine();
      vendingMachine.setMoney("1000j");
    }).toThrow("[ERROR]");
    expect(() => {
      const vendingMachine = new VendingMachine();
      vendingMachine.setMoney("jasdasd");
    }).toThrow("[ERROR]");
  });

  test("투입 금액에 1,000원 단위로 나누어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      const vendingMachine = new VendingMachine();
      vendingMachine.setMoney(1001);
    }).toThrow("[ERROR]");
    expect(() => {
      const vendingMachine = new VendingMachine();
      vendingMachine.setMoney(500);
    }).toThrow("[ERROR]");
    expect(() => {
      const vendingMachine = new VendingMachine();
      vendingMachine.setMoney(99999);
    }).toThrow("[ERROR]");
  });
});
