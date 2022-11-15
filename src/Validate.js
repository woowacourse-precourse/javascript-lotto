const { UNIT, LOTTO_NUMBER, ERROR } = require("./utils/constants");

class Validate {
  checkNumber(number) {
    if (isNaN(Number(number))) {
      throw new Error(ERROR.ISNAN);
    }
  }

  checkRange(number) {
    if (number < LOTTO_NUMBER.MIN_RANGE || number > LOTTO_NUMBER.MAX_RANGE) {
      throw new Error(ERROR.RANGE);
    }
  }

  checkLength(numbers) {
    if (numbers.length !== LOTTO_NUMBER.COUNT) {
      throw new Error(ERROR.COUNT);
    }
  }

  checkDuplicate(numbers) {
    const set = new Set(numbers);

    if (set.size !== numbers.length) {
      throw new Error(ERROR.DUPLICATED);
    }
  }

  checkMoneyInput(money) {
    this.checkNumber(money);

    if (money % UNIT.DIVIDE !== 0) {
      throw new Error(ERROR.UNIT);
    }
  }

  checkLottoInput(numbers) {
    numbers.forEach((number) => {
      this.checkNumber(Number(number));
    });

    this.checkLength(numbers);
    this.checkDuplicate(numbers);

    numbers.forEach((number) => {
      this.checkRange(number);
    });
  }

  checkBonusNumInput(winningNumbers, bonusNum) {
    this.checkNumber(bonusNum);
    this.checkRange(bonusNum);

    if (winningNumbers.includes(bonusNum)) {
      throw new Error(ERROR.DUPLICATED);
    }
  }
}

module.exports = Validate;
