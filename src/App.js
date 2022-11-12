const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSEGE, ERROR } = require("./constant/lotto");
const Utils = require("./utils/utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.utils = new Utils();
    this.AmountNum;
    this.WinningNumbers;
  }

  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.readLine(`${MESSEGE.INPUT_PURCHASE_AMOUNT}\n`, (input) => {
      if (this.isNotDividedByThousand(input))
        this.utils.throwError(ERROR.NOT_DIVIDED_BY_THOUSAND);

      this.AmountNum = parseInt(input / 1000);
      this.issueLotteryTicket(this.AmountNum);
    });
  }

  isNotDividedByThousand(input) {
    return input % 1000 !== 0;
  }

  issueLotteryTicket(amountNum) {
    Console.print(`${amountNum}${MESSEGE.TELL_PURCHASE_AMOUNT}`);

    let lotteryTicket = [];

    while (amountNum) {
      const newTicket = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      lotteryTicket.push(newTicket);
      amountNum -= 1;
      Console.print(newTicket);
    }

    this.getWinningNumber();
  }

  getWinningNumber() {
    Console.readLine(`${MESSEGE.INPUT_WINNING_NUMBER}\n`, (input) => {
      this.WinningNumbers = new Lotto(input.split(","));
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(`${MESSEGE.INPUT_BONUS_NUMBER}\n`, (input) => {
      this.WinningNumbers.setBonusNum(input);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
