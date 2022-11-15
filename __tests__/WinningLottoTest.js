/* eslint-disable */
const WinningLotto = require("../src/WinningLotto");

describe("당첨 로또 클래스 테스트", () => {
  test("보너스 번호와 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
      winningLotto.setBonusNumber(3);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 45보다 크면 예외가 발생한다.", () => {
    expect(() => {
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
      winningLotto.setBonusNumber(46);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 45]);
      winningLotto.setBonusNumber(-1);
    }).toThrow("[ERROR]");
  });

  test("당첨 로또 생성 테스트", () => {
    jest.mock("../src/WinningLotto");

    const expectedNumbers = [1, 2, 3, 4, 5, 6];
    const expectedBonusNumber = 7;

    const winningLotto = new WinningLotto(expectedNumbers);
    winningLotto.setBonusNumber(expectedBonusNumber);

    expect(winningLotto.getNumbers()).toEqual(
      expect.arrayContaining(expectedNumbers),
    );
    expect(winningLotto.getBonusNumber()).toEqual(expectedBonusNumber);
  });
});
