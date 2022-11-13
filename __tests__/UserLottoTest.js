const UserLotto = require("../src/UserLotto");

describe("UserLotto클래스 createUserLotto함수 테스트", () => {
  test("구매 금액이 1000원인 경우 테스트", () => {
    const amount = 1000;
    const lotto = new UserLotto();
    const lottoList = lotto.createUserLotto(amount);
    expect(lotto.userLottoList.length).toEqual(amount / 1000);
  });

  test("구매 금액이 200000원인 경우 테스트", () => {
    const amount = 200000;
    const lotto = new UserLotto();
    const lottoList = lotto.createUserLotto(amount);
    expect(lotto.userLottoList.length).toEqual(amount / 1000);
  });
});
