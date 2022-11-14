const User = require("../src/User");

describe("사용자 클래스 테스트", () => {
  test("사용자로부터 구입금액을 입력 받는다.", () => {
    const user = new User(8000);
    expect(
      user.getMoney()
    ).toBe(8000);
  });

  test("구입금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new User("팔천원");
    }).toThrow("[ERROR]");
  });

  test("구입금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new User(7500);
    }).toThrow("[ERROR]");
  });

});