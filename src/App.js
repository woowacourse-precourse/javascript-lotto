const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSEGE, ERROR } = require("./constant/lotto");
const Utils = require("./utils/utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.utils = new Utils();
    this.ticketAmount;
    this.winningNumbers;
    this.lotteryTickets;
  }

  play() {
    this.askPurchaseAmount();
  }

  askPurchaseAmount() {
    Console.readLine(`${MESSEGE.INPUT_PURCHASE_AMOUNT}\n`, (input) => {
      if (this.isNotDividedByThousand(input))
        this.utils.throwError(ERROR.NOT_DIVIDED_BY_THOUSAND);

      this.ticketAmount = parseInt(input / 1000);
      this.issueLotteryTicket(this.ticketAmount);
    });
  }

  isNotDividedByThousand(input) {
    return input % 1000 !== 0;
  }

  issueLotteryTicket(ticketAmount) {
    Console.print(`${ticketAmount}${MESSEGE.TELL_PURCHASE_AMOUNT}`);

    let lotteryTickets = [];
    while (ticketAmount) {
      const newTicket = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      lotteryTickets.push(newTicket);
      ticketAmount -= 1;
      Console.print(this.makeArrToString(newTicket));
    }

    this.lotteryTickets = lotteryTickets;
    this.askWinningNumbers();
  }

  makeArrToString(arr) {
    const regex = /,/g;
    return `[${arr.toString().replace(regex, ", ")}]`;
  }

  askWinningNumbers() {
    Console.readLine(`${MESSEGE.INPUT_WINNING_NUMBERS}\n`, (input) => {
      this.winningNumbers = new Lotto(input.split(","));
      this.askBonusNumber();
    });
  }

  askBonusNumber() {
    Console.readLine(`${MESSEGE.INPUT_BONUS_NUMBER}\n`, (input) => {
      this.winningNumbers.setBonusNumber(input);
      this.printResult();
    });
  }

  printResult() {
    this.winningNumbers.printRank(this.lotteryTickets);
    this.winningNumbers.printProfit(this.ticketAmount);
  }
}

const app = new App();
app.play();

module.exports = App;
