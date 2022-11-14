const WinningNumber = require("../src/WinningNumber");

const DUMMY_LOTTOS = [[1, 2, 3, 4, 5, 6]];
const DUMMY_MONEY = 0;

describe("당첨 번호 클래스 테스트", () => {
  test("당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new WinningNumber(DUMMY_LOTTOS, DUMMY_MONEY).validateWinningNumbers([
        1, 2, 3, 4, 5,
      ]);
    }).toThrow("[ERROR] 당첨 번호의 개수는 6개입니다.");
  });

  test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new WinningNumber(DUMMY_LOTTOS, DUMMY_MONEY).validateWinningNumbers([
        1, 2, 3, 4, 5, 5,
      ]);
    }).toThrow("[ERROR] 당첨 번호는 중복될 수 없습니다.");
  });
});
