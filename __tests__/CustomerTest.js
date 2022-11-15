const Customer = require("../src/Customer");

describe("customer 클래스 입력값 테스트", () => {
  test("구매금액이 1000원 이하일 경우 에러가 발생한다.", () => {
    expect(() => {
      const customer = new Customer();
      customer.publishLotto(500);
    }).toThrow("[ERROR]");
  });
});
