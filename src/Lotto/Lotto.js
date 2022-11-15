const { prizeCount } = require('../common/constants');
const { checkWinningNumber } = require('../Validation');

class Lotto {
  #numbers;

  constructor(numbers) {
    checkWinningNumber(numbers);
    this.#numbers = numbers;
  }

  getWinningNumber() {
    return this.#numbers.split(',').map((item) => Number(item));
  }

  checkEachLottoNumber(publishedLotto) {
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
        case 6:
          prizeCount.first += 1;
          break;
        case 4:
          prizeCount.fourth += 1;
          break;
        case 3:
          prizeCount.fifth += 1;
          break;
      }
    });
  }
}
module.exports = Lotto;
