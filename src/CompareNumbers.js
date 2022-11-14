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
  }
}

module.exports = CompareWithLotto;
