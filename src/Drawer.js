const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const Validation = require("./Validation");

class Drawer {
  winningNumber;
  bonusNumber;

  draw() {
    this.generateWinningNumbers();
  }

  generateWinningNumbers() {
    this.enterWinningNumbers();
  }

  enterWinningNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (numbers) => {
      const mapfn = (arg) => Number(arg);
      this.winningNumber = Array.from(numbers.split(","), mapfn);

      Console.print(this.winningNumber);
      this.validateWinningNumbers(this.winningNumber);

      return this.enterBonusNumber();
    });
  }
  enterBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (number) => {
      this.bonusNumber = number;
      Console.print(this.bonusNumber);
    });
  }

  validateWinningNumbers(numbers) {
    const validation = new Validation();

    validation.length(numbers);

    validation.numberRange(numbers);

    validation.isDuplicate(numbers);
  }
}

module.exports = Drawer;
