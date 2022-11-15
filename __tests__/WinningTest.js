const Winning = require("../src/controller/Winning");

describe("당첨/보너스 번호 클래스 테스트", () => {

  test("당첨 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const winning = new Winning({});
      winning.validateWin('1,2,3,a,4,5');
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const winning = new Winning({});
      winning.validateBonus('a1');
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 범위에서 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      const winning = new Winning({win_numbers:[1,2,3,4,5,6]});
      winning.checkBonusNumber('50');
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호에 포함되면 예외가 발생한다.", () => {
    expect(() => {
      const winning = new Winning({win_numbers:[1,2,3,4,5,6]});
      winning.checkBonusNumber(3);
    }).toThrow("[ERROR]");
  });
}); 