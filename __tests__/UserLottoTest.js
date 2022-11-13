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

describe("UserLotto클래스 calculateMatchResult함수 테스트", () => {
  test("당첨 번호 일치 갯수 별로 나누는 기능 테스트", () => {
    const userLotto = new UserLotto();
    const countResult = [[3], [4], [1], [2], [5]];
    const matchResult = userLotto.calculateMatchResult(countResult);
    expect(matchResult).toEqual({ 3: 1, 4: 1, 5: 1, 6: 0, containBonus: 0 });
  });

  test("당첨 번호 일치 갯수 별로 나누는 기능 테스트", () => {
    const userLotto = new UserLotto();
    const countResult = [[1], [6], [3], [4], [5, 1], [3], [4], [2], [1], [5]];
    const matchResult = userLotto.calculateMatchResult(countResult);
    expect(matchResult).toEqual({ 3: 2, 4: 2, 5: 1, 6: 1, containBonus: 1 });
  });
});
