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
    return (
      this.checkIsNum(input) &&
      this.checkNumRange(input) &&
      this.checkSameWinNum(input, winSplitNum)
    );
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

  checkNumRange(input) {
    return input <= 45 && input > 0;
  }

  checkSameWinNum(input, winSplitNum) {
    return !winSplitNum.includes(input);
  }
}

module.exports = InputCheck;
