const {
  CONSOLE_UTIL,
  INPUT_BONUS_NUMBERS_MESSAGE,
  FROM_ONE_TO_FORTYFIVE,
  ERROR_MESSAGES,
  RANDOM_UTIL,
} = require("./Constants");

const { NOT_BETWEEN_ONE_AND_FORTYFIVE } = ERROR_MESSAGES;

class CompareWithLotto {
  constructor() {
    this.userMoney;
    this.userNumbers;
    this.tickets;
  }

  compareWithNumbers(userNumbers, Lotterytickets, userMoney) {
    this.userMoney = userMoney;
    this.userNumbers = userNumbers;

    let index = Lotterytickets.length;
    while (index--) {
      Lotterytickets[index] = Lotterytickets[index].filter((num) =>
        userNumbers.includes(num)
      );
    }

    this.tickets = Lotterytickets.map((ticket) => (ticket = ticket.length));

    this.acceptBonusNumber();
  }

  acceptBonusNumber() {
    let userBonus;
    CONSOLE_UTIL.readLine(INPUT_BONUS_NUMBERS_MESSAGE, (userBonusNumber) => {
      userBonus = userBonusNumber;
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
    let numberOfwinningTickets = {};
    this.tickets = this.tickets.filter((num) => num > 2);

    numberOfwinningTickets[5] = this.tickets.filter((num) => num === 3).length;
    numberOfwinningTickets[4] = this.tickets.filter((num) => num === 4).length;
    numberOfwinningTickets[3] = numberOfwinningTickets[2] = 0;
    this.compareWithBonus(numberOfwinningTickets, isSameBonus);
    numberOfwinningTickets[1] = this.tickets.filter((num) => num === 6).length;
  }

  compareWithBonus(numberOfwinningTickets, isSameBonus) {
    let SecondOrThird = this.tickets.filter((num) => num === 5).length;
    if (SecondOrThird) {
      isSameBonus
        ? (numberOfwinningTickets[2] = SecondOrThird)
        : (numberOfwinningTickets[3] = SecondOrThird);
    }
  }
}

module.exports = CompareWithLotto;
