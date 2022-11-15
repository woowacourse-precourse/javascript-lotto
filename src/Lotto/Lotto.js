const { prizeCount, NUMBER } = require('../common/constants');
const { checkWinningNumber } = require('../common/Validation');

class Lotto {
  #numbers;

  constructor(numbers) {
    checkWinningNumber(numbers);
    this.#numbers = numbers;
  }

  getWinningNumber() {
    return this.#numbers.split(',').map((item) => Number(item));
  }

  compareUserAndWinningNumber(publishedLotto) {
    const matchedNumberList = [];
    const winningNumber = this.getWinningNumber();

    publishedLotto.forEach((eachUserLottoNumber) => {
      matchedNumberList.push(this.getMatchNumberList(winningNumber, eachUserLottoNumber).length);
    });
    this.countMatchNumber(matchedNumberList);
  }

  getMatchNumberList(winningNumber, eachUserLottoNumber) {
    return winningNumber.filter((number) => eachUserLottoNumber.includes(number));
  }

  countMatchNumber(matchedNumberList) {
    matchedNumberList.forEach((number) => {
      switch (number) {
        case NUMBER.SIX_MATCHED:
          prizeCount.first += NUMBER.INCREASED_COUNT;
          break;
        case NUMBER.FOUR_MATCHED:
          prizeCount.fourth += NUMBER.INCREASED_COUNT;
          break;
        case NUMBER.THREE_MATCHED:
          prizeCount.fifth += NUMBER.INCREASED_COUNT;
          break;
      }
    });
  }
}
module.exports = Lotto;
