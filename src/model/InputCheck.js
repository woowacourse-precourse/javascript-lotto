class InputCheck {
  checkAmountInput(input) {
    const INPUT_NUM = Number(input);

    return (
      this.checkIsNum(INPUT_NUM) &&
      this.checkThousand(INPUT_NUM) &&
      this.checkUnit(INPUT_NUM)
    );
  }

  checkBonusInput(input, winSplitNum) {
    const IS_NUM_AND_RANGE = /[0-9]$/.test(input) && input <= 45 && input > 0;

    return IS_NUM_AND_RANGE && !winSplitNum.includes(input);
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
