const { ERROR, REG_EXP, InputError } = require('./Error');

class Validate {
  format(regExp, input) {
    if (!regExp.test(input)) {
      throw new InputError(`${ERROR.PREFIX} ${ERROR.FORMAT}`);
    }
  }

  purchaseAmount(input) {
    this.format(REG_EXP.NUMBER_ONLY, input);
    if (input % 1000 !== 0) {
      throw new InputError(`${ERROR.PREFIX} ${ERROR.PURCHASE_AMOUNT}`);
    }
  }

  lotto(numbers) {
    const uniqueNumbers = new Set(numbers);

    numbers.forEach((num) => {
      this.single(num);
    });
    if (numbers.length !== 6) {
      throw new InputError(`${ERROR.PREFIX} ${ERROR.NUMBER_COUNT}`);
    }
    if (uniqueNumbers.size !== 6) {
      throw new InputError(`${ERROR.PREFIX} ${ERROR.NUMBER_DUPLICATE}`);
    }
  }

  single(num) {
    this.format(REG_EXP.NUMBER_ONLY, num);
    if (num < 1 || num > 45) {
      throw new InputError(`${ERROR.PREFIX} ${ERROR.NUMBER_RANGE}`);
    }
  }

  bonus(num, winningNumbers) {
    this.single(num);
    if (winningNumbers.has(Number(num))) {
      throw new InputError(`${ERROR.PREFIX} ${ERROR.NUMBER_DUPLICATE}`);
    }
  }
}

module.exports = Validate;
