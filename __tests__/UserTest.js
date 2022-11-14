const User = require("../src/User");

describe("사용자 클래스 테스트", () => {
  test("사용자로부터 구입금액을 입력 받는다.", () => {
    const user = new User(8000);
    expect(
      user.getMoney()
    ).toBe(8000);
  });
});