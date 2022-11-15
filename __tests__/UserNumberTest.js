const UserNumber = require("../src/model/UserNumber");
const Lotto = require("../src/model/Lotto");

describe("UserNumber 유저 구입금액 관련 테스트", () => {
  const userNumber = new UserNumber();

  test("유저 구입금액이 1000원으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      userNumber.setPurchasingAmount(1200);
    }).toThrow("[ERROR]");
  });

  test("유저 구입금액이 빈문자열이라면 예외가 발생한다.", () => {
    expect(() => {
      userNumber.setPurchasingAmount("");
    }).toThrow("[ERROR]");
  });

  test("유저 구입금액이 정수가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      userNumber.setPurchasingAmount("이승환");
    }).toThrow("[ERROR]");
  });

  test("로또 발행 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(userNumber.getIssuedLotto(3000).length).toEqual(3);

    expect(() => {
      userNumber.getUserIssuedLotto(3000).forEach((singleLotto) => {
        lotto.validate(singleLotto);
      });
    }).not.toThrow("[ERROR]");
  });
});
