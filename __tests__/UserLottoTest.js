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

describe("UserLotto클래스 calculateBenefit함수 테스트", () => {
  test("로또 6개 구매 4개 당첨 수익률 계산", () => {
    const userLotto = new UserLotto();
    userLotto.lottoCount = 6;
    const benefit = userLotto.calculateBenefit({
      3: 2,
      4: 1,
      5: 0,
      6: 0,
      containBonus: 1,
    });
    expect(benefit).toEqual(501000);
  });

  test("보너스 번호 포함하지 않는 경우 수익률 계산", () => {
    const userLotto = new UserLotto();
  });
});
