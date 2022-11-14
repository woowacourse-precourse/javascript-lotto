const {
  CONSOLE_UTIL,
  INPUT_BONUS_NUMBERS_MESSAGE,
  FROM_ONE_TO_FORTYFIVE,
  ERROR_MESSAGES,
  RANDOM_UTIL,
  PRIZE_MESSAGES,
  RESULT_MESSAGE,
  PRIZE_MONEY,
} = require("./Constants");

const { NOT_BETWEEN_ONE_AND_FORTYFIVE } = ERROR_MESSAGES;

class ComparisonWithNumbers {
  constructor() {
    this.userMoney;
    this.userNumbers;
    this.tickets;
    this.index = Object.keys(PRIZE_MONEY).length;
  }

  compareWithNumbers(userNumbers, LotteryTickets, userMoney) {
    this.userMoney = userMoney;
    this.userNumbers = userNumbers;

    let index = LotteryTickets.length;
    while (index--) {
      LotteryTickets[index] = LotteryTickets[index].filter((num) =>
        userNumbers.includes(num)
      );
    }

    this.tickets = LotteryTickets.map((ticket) => (ticket = ticket.length));

    this.acceptBonusNumber();
  }

  acceptBonusNumber() {
    CONSOLE_UTIL.readLine(INPUT_BONUS_NUMBERS_MESSAGE, (userBonus) => {
      this.validateBonusNumber(userBonus);
    });
  }

  validateBonusNumber(userBonus) {
    if (!FROM_ONE_TO_FORTYFIVE.includes(Number(userBonus))) {
      throw new Error(NOT_BETWEEN_ONE_AND_FORTYFIVE);
    }

    return this.isSameBonusNumber(userBonus);
  }

  isSameBonusNumber(userBonus) {
    const lottoBonus = RANDOM_UTIL.pickNumberInRange(1, 45);
    let isSameBonus = userBonus === lottoBonus;

    this.findNumberOfWinningTickets(isSameBonus);
  }

  findNumberOfWinningTickets(isSameBonus) {
    let numberOfWinningTickets = {};
    this.tickets = this.tickets.filter((num) => num > 2);

    numberOfWinningTickets[5] = this.tickets.filter((num) => num === 3).length;
    numberOfWinningTickets[4] = this.tickets.filter((num) => num === 4).length;
    numberOfWinningTickets[3] = numberOfWinningTickets[2] = 0;
    this.compareWithBonus(numberOfWinningTickets, isSameBonus);
    numberOfWinningTickets[1] = this.tickets.filter((num) => num === 6).length;

    this.printResult(numberOfWinningTickets);
  }

  compareWithBonus(numberOfWinningTickets, isSameBonus) {
    let SecondOrThird = this.tickets.filter((num) => num === 5).length;
    if (SecondOrThird) {
      isSameBonus
        ? (numberOfWinningTickets[2] = SecondOrThird)
        : (numberOfWinningTickets[3] = SecondOrThird);
    }
  }

  printResult(matchingTicket) {
    CONSOLE_UTIL.print(RESULT_MESSAGE);

    let index = this.index;
    for (index; index > 0; index--) {
      CONSOLE_UTIL.print(
        `${PRIZE_MESSAGES[index]} - ${matchingTicket[index]}개`
      );
    }

    this.calculateRateOfReturn(matchingTicket);
    this.endGame();
  }

  calculateRateOfReturn(matchingTicket) {
    let index = this.index;
    let totalPrize = 0;
    for (index; index > 0; index--) {
      totalPrize += matchingTicket[index] * PRIZE_MONEY[index];
    }

    this.printRateOfReturn(totalPrize);
  }

  printRateOfReturn(totalPrize) {
    const rate = ((totalPrize / this.userMoney) * 100).toFixed(1);
    const addCommasToNumbers = String(rate).replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );

    CONSOLE_UTIL.print(`총 수익률은 ${addCommasToNumbers}%입니다.`);
  }

  endGame() {
    CONSOLE_UTIL.close();
  }
}

module.exports = ComparisonWithNumbers;
