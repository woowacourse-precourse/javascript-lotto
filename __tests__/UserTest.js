const User = require("../src/User");

describe("유저 클래스 테스트", () => {
  test("changeMoney 메소드로 유저의 구매금액을 변경할 때, 천원 단위가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      const user = new User();
      user.changeMoney("300");
    }).toThrow("[ERROR]");
    expect(() => {
      const user = new User();
      user.changeMoney("1500");
    }).toThrow("[ERROR]");
  });
  test("getMoney 메소드를 호출하였을 때, 유저의 구매금액을 반환한다.", () => {
    const user = new User();
    user.changeMoney("1000");
    const result = user.getMoney();

    expect(result).toEqual(1000);
  });
});
