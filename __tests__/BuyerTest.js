const Buyer = require("../src/Buyer");

describe("구매자 클래스 테스트", () => {
  test("금액 입력을 확인한다.", () => {
    const buyer = new Buyer(5000);
    expect(buyer.getMoney()).toBe(5000);
  });

  test("입력된 금액이 정수가 아닐경우 예외처리한다.", () => {
    expect(() => {
      new Buyer('string');
    }).toThrowError("[ERROR] 금액은 정수로 입력해야 합니다.");
  });
});
