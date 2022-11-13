class InputCheck {
  checkAmountInput(input) {
    const INPUT_NUM = Number(input);
    const [CHECKED_IS_NUM, CHECKED_THOUSAND, CHECKED_UNIT] = [
      this.checkIsNum(INPUT_NUM),
      this.checkThousand(INPUT_NUM),
      this.checkUnit(INPUT_NUM),
    ];

    if (CHECKED_IS_NUM && CHECKED_THOUSAND && CHECKED_UNIT) {
      return true;
    }
    return false;
  }

  checkBonusInput(input) {
    const IS_NUM_AND_RANGE = /[1-9]$/.test(input) && input <= 45;

    return IS_NUM_AND_RANGE;
  }

  checkIsNum(input) {
    return /^[0-9]*$/g.test(input);
  }

  checkThousand(input) {
    return input >= 1000;
  }

  checkUnit(input) {
    return input % 1000 === 0;
  }
}

module.exports = InputCheck;
