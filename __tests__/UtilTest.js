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
})