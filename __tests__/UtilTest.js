const Util = require("../src/Util");

describe("유틸 클래스 테스트", () => {
  test("사용자 번호가 당첨 번호와 일치하는 만큼 개수를 반환한다.", () => {
    const util = new Util();
    const userLotto = [1, 43, 27, 3, 10, 31];
    const winNumbers = [3, 10, 27, 33, 40, 8];
    expect(
      util.countUserNumberMatchingWithWinNumber(userLotto, winNumbers)
    ).toBe(3);
  });

  test("사용자 번호가 보너스 번호와 일치하는 만큼 개수를 반환한다.", () => {
    const util = new Util();
    const userLotto = [1, 43, 27, 3, 10, 31];
    const bonusNumber = 31;
    expect(
      util.countUserNumberMatchingWithBonusNumber(userLotto, bonusNumber)
    ).toBe(1);
  });

  test("1등부터 5등까지의 당첨 횟수를 반환한다.", () => {
    const util = new Util();
    const userLottoList = [[1, 43, 27, 3, 10, 31],
                           [1, 43, 27, 3, 10, 30],
                           [1, 43, 27, 3, 10, 32]];
    const winNumbers = [1, 43, 27, 3, 10, 31];
    const bonusNumber = 32;
    expect(
      util.getRankCount(userLottoList, winNumbers, bonusNumber)
    ).toEqual({1: 1, 2: 1, 3: 1, 4: 0, 5: 0});
  });

  test("총 당첨 금액 합계와 로또 구입 금액을 바탕으로 수익률을 계산한다.", () => {
    const util = new Util();
    const rankCountTable = {1: 0, 2: 0, 3: 1, 4: 0, 5: 0};
    const userMoney = 6000;
    expect(
      util.calculateEarningRate(rankCountTable, userMoney)
    ).toEqual("25000.0");
  });
})