const {Utils} = require("../src/utils/Utils");

describe("기능 테스트", () => {
  test("당첨로또와 겹치는 개수 계산한다.", () => {
    const lotto = [2, 3, 5, 6, 8, 9];
    const winnigLotto = [1, 2, 3, 4, 5, 6];
    const output = 4;

    const count = Utils.getMatchedinWinningNumberCount(lotto, winnigLotto);

    expect(count).toEqual(output);
  });

  test("로또가 보너스 번호를 가지고 있는지 확인 한다.", () => {
    const lotto = [2, 3, 5, 6, 8, 9];
    const bonusNumber = 6;

    expect(Utils.hasBounsNumber(lotto, bonusNumber)).toBeTruthy();
  });

  test("당첨함수의 수익률을 계산한다.", () => {
    const input = 5000;
    const payment = 8000;

    const output = "62.5";
    const earningsRate = Utils.getEarningsRate(input, payment);

    expect(earningsRate).toEqual(output);
  });
});
