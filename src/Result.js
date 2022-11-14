const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, PRIZE, REGEX, ERROR } = require('./constants');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');

class Result {
  lottos;
  history = {
    fifthPlace: {
      prize: PRIZE.FIFTH_PLACE,
      count: 0,
    },
    fourthPlace: {
      prize: PRIZE.FOURTH_PLACE,
      count: 0,
    },
    thirdPlace: {
      prize: PRIZE.THIRD_PLACE,
      count: 0,
    },
    secondPlace: {
      prize: PRIZE.SECOND_PLACE,
      count: 0,
    },
    firstPlace: {
      prize: PRIZE.FIRST_PLACE,
      count: 0,
    },
  };

  constructor(lottos) {
    this.lottos = lottos;
  }

  drawWinningNumber() {
    Console.readLine(`\n${MESSAGE.ENTER_WINNING_NUMBER}\n`, (inputStr) => {
      const inputArr = this.validate(inputStr);
      const winningNumber = new Lotto(inputArr);
      this.drawBonusNumber(winningNumber);
    });
  }

  validate(inputStr) {
    if (!REGEX.WINNING_NUMBER.test(inputStr)) {
      throw new Error(ERROR.ENTER_VALID_WINNING_NUMBER);
    }

    return inputStr.split(',').map(Number);
  }

  drawBonusNumber(winningNumber) {
    Console.readLine(`\n${MESSAGE.ENTER_BONUS_NUMBER}\n`, (inputStr) => {
      const bonusNumber = new Bonus(inputStr, winningNumber);
      this.compare(winningNumber, bonusNumber);
    });
  }

  compare(winningNumber, bonusNumber) {
    this.lottos.forEach((lotto) => {
      const countMatching = winningNumber.compare(lotto);
      const hasBonus = bonusNumber.compare(lotto);
      this.updateHistory(countMatching, hasBonus);
    });
    this.printStatistics();
  }

  updateHistory(countMatching, hasBonus) {
    switch (countMatching) {
      case 3:
        this.history.fifthPlace.count += 1;
        break;
      case 4:
        this.history.fourthPlace.count += 1;
        break;
      case 5:
        if (hasBonus) this.history.secondPlace.count += 1;
        else this.history.thirdPlace.count += 1;
        break;
      case 6:
        this.history.firstPlace.count += 1;
        break;
    }
  }

  printStatistics() {
    Console.print(`\nMESSAGE.STATISTICS`);
    this.printHistory();
    this.printReturn();
  }

  printHistory() {
    Console.print(
      `${MESSAGE.HISTORY_FIFTH_PLACE}${this.history.fifthPlace.count}${MESSAGE.HISTORY_COUNT}`
    );
    Console.print(
      `${MESSAGE.HISTORY_FOURTH_PLACE}${this.history.fourthPlace.count}${MESSAGE.HISTORY_COUNT}`
    );
    Console.print(
      `${MESSAGE.HISTORY_THIRD_PLACE}${this.history.thirdPlace.count}${MESSAGE.HISTORY_COUNT}`
    );
    Console.print(
      `${MESSAGE.HISTORY_SECOND_PLACE}${this.history.secondPlace.count}${MESSAGE.HISTORY_COUNT}`
    );
    Console.print(
      `${MESSAGE.HISTORY_FIRST_PLACE}${this.history.firstPlace.count}${MESSAGE.HISTORY_COUNT}`
    );
  }

  printReturn() {
    const totalReturn = this.findReturn().toFixed(1);
    Console.print(
      `${MESSAGE.RETURN_TOTAL}${totalReturn}${MESSAGE.RETURN_PERCENT}`
    );
    Console.close();
  }

  findReturn() {
    const winningAmount =
      this.history.fifthPlace.prize * this.history.fifthPlace.count +
      this.history.fourthPlace.prize * this.history.fourthPlace.count +
      this.history.thirdPlace.prize * this.history.thirdPlace.count +
      this.history.secondPlace.prize * this.history.secondPlace.count +
      this.history.firstPlace.prize * this.history.firstPlace.count;
    const purchaseAmount = this.lottos.length * 1000;

    return (winningAmount * 100) / purchaseAmount;
  }
}

module.exports = Result;
