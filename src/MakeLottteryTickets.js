const { RANDOM_UTIL, CONSOLE_UTIL } = require("./Constants");

class MakeLotteryTickets {
  constructor(userMoney, numberOfTickets) {
    this.userMoney = userMoney;
    this.numberOfTickets = numberOfTickets;
    this.lotteryTickets = [];
  }

  makeTickets() {
    let numberOfRepetition = this.numberOfTickets + 1;
    while (numberOfRepetition--) {
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
    });
  }
}

module.exports = MakeLotteryTickets;
