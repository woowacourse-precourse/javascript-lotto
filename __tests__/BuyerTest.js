const Buyer = require("../src/Buyer");

describe("구매자 클래스 테스트", () => {
  test("금액 입력을 확인한다.", () => {
    const buyer = new Buyer(5000);
    expect(buyer.getMoney()).toBe(5000);
  });
});
