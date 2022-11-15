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
    this.numberOfMatchingBalls;
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

    this.findNumberOfMatchingBalls(LotteryTickets);
  }

  findNumberOfMatchingBalls(LotteryTickets) {
    this.numberOfMatchingBalls = LotteryTickets.map((ticket) => ticket.length);

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

    return this.makeBonusNumber(userBonus);
  }

  makeBonusNumber(userBonus) {
    const lottoBonus = RANDOM_UTIL.pickNumberInRange(1, 45);

    this.isSameBonusNumber(userBonus, lottoBonus);
  }

  isSameBonusNumber(userBonus, lottoBonus) {
    let isSameBonus = userBonus === lottoBonus;

    this.findNumberOfWinningTickets(isSameBonus);
  }

  findNumberOfWinningTickets(isSameBonus) {
    let places = {};
    places[5] = this.numberOfMatchingBalls.filter((num) => num === 3).length;
    places[4] = this.numberOfMatchingBalls.filter((num) => num === 4).length;
    places[3] = places[2] = 0;
    this.compareWithBonus(places, isSameBonus);
    places[1] = this.numberOfMatchingBalls.filter((num) => num === 6).length;

    this.printResult(places);
  }

  compareWithBonus(places, isSameBonus) {
    let SecondOrThird = this.numberOfMatchingBalls.filter(
      (num) => num === 5
    ).length;
    if (SecondOrThird) {
      isSameBonus ? (places[2] = SecondOrThird) : (places[3] = SecondOrThird);
    }
  }

  printResult(numberOfWinningTickets) {
    CONSOLE_UTIL.print(RESULT_MESSAGE);

    let index = this.index;
    for (index; index > 0; index--) {
      CONSOLE_UTIL.print(
        `${PRIZE_MESSAGES[index]} - ${numberOfWinningTickets[index]}개`
      );
    }

    this.calculateRateOfReturn(numberOfWinningTickets);
    this.endGame();
  }

  calculateRateOfReturn(numberOfWinningTickets) {
    let index = this.index;
    let totalPrize = 0;
    for (index; index > 0; index--) {
      totalPrize += numberOfWinningTickets[index] * PRIZE_MONEY[index];
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
