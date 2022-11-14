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
      this.bonusNumber = Number(number);
      Console.print(this.bonusNumber);
      this.validateBonusNumber(this.bonusNumber);
    });
  }

  validateWinningNumbers(numbers) {
    const validation = new Validation();

    validation.length(numbers);
    validation.numberRange(numbers);
    validation.isDuplicate(numbers);
  }

  validateBonusNumber(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 당첨 번호는 1 ~ 45 사이여야 합니다.");
    }

    this.winningNumber.forEach((number) => {
      if (number === bonusNumber) {
        throw new Error("[ERROR] 보너스 번호는 중복되지 않아야 합니다.");
      }
    });
  }
}

module.exports = Drawer;
