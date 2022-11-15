const WinningNumbers = require("../src/WinningNumbers");

describe("당첨 번호 클래스 테스트", () => {
  test("당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    const winningNumbers = new WinningNumbers();

    expect(() => {
      winningNumbers.validateNumberDuplication([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    const winningNumbers = new WinningNumbers();

    expect(() => {
      winningNumbers.validateNumberDuplication([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호를 추가할 때 당첨번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    const winningNumbers = new WinningNumbers();
    winningNumbers.addWinningNumbers([1, 2, 3, 4, 5, 6]);

    expect(() => {
      winningNumbers.addBonusNumber(1);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호로 범위를 벋어난 숫자를 추가할 때 예외가 발생한다.", () => {
    const winningNumbers = new WinningNumbers();
    winningNumbers.addWinningNumbers([1, 2, 3, 4, 5, 6]);

    expect(() => {
      winningNumbers.addBonusNumber(0);
    }).toThrow("[ERROR]");
  });

  test("addWinningNumbers 메소드에 알맞은 입력값을 넣어 호출했을 때, 객체의 winningNumbers은 입력값 배열과 같다", () => {
    const winningNumbers = new WinningNumbers();
    winningNumbers.addWinningNumbers([1, 2, 3, 4, 5, 6]);
    const result = winningNumbers.winningNumbers;
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
