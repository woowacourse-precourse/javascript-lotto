const MissionUtils = require("@woowacourse/mission-utils");
const ErrorList = require("./ErrorList");
const Console = MissionUtils.Console;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.ErrorList = new ErrorList();
    this.validate(numbers);
    this.winCount = 0;
    this.bonusState = false;
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.ErrorList.errorCheckLottoSixNumber(numbers);
  }

  lotteryCheck(sixLottoArray, bonusArray) {
    this.winCount = 0;
    const MY_LOTTO_NUMBER = [...this.#numbers];
    sixLottoArray.forEach((winNumber) => {
      MY_LOTTO_NUMBER.includes(parseInt(winNumber, 10)) && this.winCount++;
    });

    if (MY_LOTTO_NUMBER.includes(parseInt(bonusArray[0], 10))) {
      this.bonusState = true;
    }

    return this.bonusState === true
      ? this.winIncludeBonus()
      : this.winExcludeBonus();
  }

  winIncludeBonus() {
    const RANKING_NUMBER = parseInt(this.winCount, 10);
    return includesBonusObject[RANKING_NUMBER];
  }
  winExcludeBonus() {
    const RANKING_NUMBER = parseInt(this.winCount, 10);
    return excludesBonusObject[RANKING_NUMBER];
  }
  printLottoNumber() {
    const ARRAY_CHANGE_STRING = `[${this.#numbers[0]}, ${this.#numbers[1]}, ${
      this.#numbers[2]
    }, ${this.#numbers[3]}, ${this.#numbers[4]}, ${this.#numbers[5]}]`;
    return Console.print(ARRAY_CHANGE_STRING);
  }
}

const includesBonusObject = {
  5: 2,
  4: 3,
  3: 4,
  2: 5,
  1: 0,
  0: 0,
};
const excludesBonusObject = {
  6: 1,
  5: 3,
  4: 4,
  3: 5,
  2: 0,
  1: 0,
  0: 0,
};
module.exports = Lotto;
