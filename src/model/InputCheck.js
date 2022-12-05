class InputCheck {
  checkAmountInput(input) {
    const INPUT_NUM = Number(input);

    if (
      this.checkIsNum(INPUT_NUM) &&
      this.checkThousand(INPUT_NUM) &&
      this.checkUnit(INPUT_NUM)
    )
      return;
    throw new Error('[ERROR] 입력한 구입 금액이 올바르지 않습니다.');
  }

  checkBonusInput(input, winSplitNum) {
    if (
      this.checkIsNum(input) &&
      this.checkNumRange(input) &&
      this.checkSameWinNum(input, winSplitNum)
    )
      return;
    throw new Error('[ERROR] 입력한 보너스 번호가 올바르지 않습니다.');
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
