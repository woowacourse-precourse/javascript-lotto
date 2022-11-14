const { Console } = require("@woowacourse/mission-utils");
const {
  MANAGEMENT_WIN_NUMBER_LENGTH_ERROR,
  MANAGEMENT_WIN_NUMBER_TYPE_ERROR,
  MANAGEMENT_WIN_NUMBER_RANGE_ERROR,
  MANAGEMENT_WIN_NUMBER_DUPLICATE_ERROR,
  MANAGEMENT_BONUS_NUMBER_TYPE_ERROR,
  MANAGEMENT_BONUS_NUMBER_RANGE_ERROR,
  MANAGEMENT_BONUS_NUMBER_DUPLICATE_ERROR,
  MANAGEMENT_WIN_NUMBER_QUERY,
  MANAGEMENT_BONUS_NUMBER_QUERY,
} = require("./Constant");

class Management {
  #winNumber;
  #bonusNumber;

  WinNumberVaild(input) {
    const numbers = input.split(",").map(Number);
    if (numbers.length !== 6) {
      throw new Error(MANAGEMENT_WIN_NUMBER_LENGTH_ERROR);
    }
    if (numbers.filter((number) => isNaN(number)).length !== 0) {
      throw new Error(MANAGEMENT_WIN_NUMBER_TYPE_ERROR);
    }
    if (numbers.filter((number) => number >= 1 && number <= 45).length !== 6) {
      throw new Error(MANAGEMENT_WIN_NUMBER_RANGE_ERROR);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(MANAGEMENT_WIN_NUMBER_DUPLICATE_ERROR);
    }
    return numbers;
  }

  bonusNumberVaild(input) {
    const number = Number(input);
    if (isNaN(number)) {
      throw new Error(MANAGEMENT_BONUS_NUMBER_TYPE_ERROR);
    }
    if (number < 1 || number > 45) {
      throw new Error(MANAGEMENT_BONUS_NUMBER_RANGE_ERROR);
    }
    if (this.#winNumber.includes(number)) {
      throw new Error(MANAGEMENT_BONUS_NUMBER_DUPLICATE_ERROR);
    }
    return number;
  }

  checkNum(lotto) {
    let realnum = 0;
    let bonusnum = 0;
    lotto.forEach((number) => {
      if (this.#winNumber.includes(number)) {
        realnum += 1;
      }
    });
    if (lotto.includes(this.#bonusNumber)) bonusnum += 1;
    return { realnum, bonusnum };
  }

  WinNumberQuery(next) {
    Console.readLine(`\n${MANAGEMENT_WIN_NUMBER_QUERY}\n`, (answer) => {
      this.#winNumber = this.WinNumberVaild(answer);
      this.BounusNumberQuery(next);
    });
  }

  BounusNumberQuery(next) {
    Console.readLine(`\n${MANAGEMENT_BONUS_NUMBER_QUERY}\n`, (answer) => {
      this.#bonusNumber = this.bonusNumberVaild(answer);
      next();
    });
  }
  setWinNumber(winNumber) {
    this.#winNumber = winNumber;
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }
}

module.exports = Management;
