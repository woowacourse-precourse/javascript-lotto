const Lotto = require("./Lotto");

const CompareWithLotto = require("./CompareNumbers");

const {
  RANDOM_UTIL,
  CONSOLE_UTIL,
  INPUT_NUMBERS_MESSAGE,
} = require("./Constants");

class MakeLotteryTickets {
  constructor(userMoney, numberOfTickets) {
    this.userMoney = userMoney;
    this.numberOfTickets = numberOfTickets;
    this.lotteryTickets = [];
    this.userNumbers;
  }

  makeTickets() {
    while (this.numberOfTickets--) {
      const randomNumbers = RANDOM_UTIL.pickUniqueNumbersInRange(1, 45, 6);
      this.lotteryTickets.push(randomNumbers);
      this.sortLotteryNumbers(randomNumbers);
    }

    this.acceptUserNumbers();
  }

  sortLotteryNumbers(randomNumbers) {
    randomNumbers = randomNumbers.sort(
      (firstEl, secondEl) => firstEl - secondEl
    );
    this.printTickets(randomNumbers);
  }

  printTickets(randomNumbers) {
    const convertToString = `[${String(randomNumbers).replaceAll(",", ", ")}]`;
    CONSOLE_UTIL.print(convertToString);
  }

  acceptUserNumbers() {
    CONSOLE_UTIL.readLine(INPUT_NUMBERS_MESSAGE, (userNumbers) => {
      userNumbers = userNumbers.split(",").map(Number);
      this.validateNumbers(userNumbers);
      this.compareWithNumbers();
    });
  }

  validateNumbers(userNumbers) {
    new Lotto(userNumbers);
    this.userNumbers = userNumbers;
  }

  compareWithNumbers() {
    new CompareWithLotto().compareWithNumbers(
      this.userNumbers,
      this.lotteryTickets,
      this.userMoney
    );
  }
}

module.exports = MakeLotteryTickets;
