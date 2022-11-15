const UserLotto = require("../src/UserLotto");

describe("유저 로또 클래스 테스트", () => {
  test("로또 구입 금액을 입력하지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new UserLotto("");
    }).toThrow("[ERROR]");
  });

  test("로또 구입 금액이 숫자가 아닐시 예외가 발생한다.", () => {
    expect(() => {
      new UserLotto("1111j");
    }).toThrow("[ERROR]");
  });

  test("로또 구입 금액이 천단위가 아니면 예외가 발생한다", () => {
    expect(() => {
      new UserLotto("1111");
    }).toThrow("[ERROR]");
  });

  test("로또 구입 금액에 따른 구매 수량", () => {
    const userLotto = new UserLotto("5000");
    userLotto.getCount();
    expect(userLotto.count).toBe(5);
  });
});
