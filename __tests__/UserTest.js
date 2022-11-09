const User = require("../src/components/User");
const { ERROR } = require("../src/data/constants");

describe("유저 입력 테스트", () => {
  test("1000원으로 나누어 떨어지는지", () => {
    expect(() => {
      new User("1234001");
    }).toThrow(ERROR.DIVIDE);
  });
  test("잘못된 범위", () => {
    expect(() => {
      new User("kangsangwon");
    }).toThrow(ERROR.RANGE);
  });
  test("잘못된 범위2", () => {
    expect(() => {
      new User("-1234001");
    }).toThrow(ERROR.RANGE);
  });
  test("잘못된 범위3", () => {
    expect(() => {
      new User("0");
    }).toThrow(ERROR.RANGE);
  });
});
