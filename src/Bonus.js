class Bonus {
  #bonus;

  constructor(bonus, winningNumbers) {
    this.validate(bonus, winningNumbers);
    this.#bonus = bonus;
  }

  validate(bonus, winningNumbers) {
    this.checkNumberAndInrange(bonus);
    this.checkCountNumber(bonus);
    this.checkDuplicateWithWinngNumbers(bonus, winningNumbers);
  }

  checkNumberAndInrange(bonus) {
    const START_LOTTO_NUMBER = 1;
    const END_LOTTO_NUMBER = 45;

    if (
      !(parseInt(bonus) >= START_LOTTO_NUMBER) ||
      !(parseInt(bonus) <= END_LOTTO_NUMBER)
    ) {
      throw new Error(
        `[ERROR] 보너스 번호는 ${START_LOTTO_NUMBER}부터 ${END_LOTTO_NUMBER}까지의 숫자여야 합니다.`
      );
    }
  }

  checkCountNumber(bonus) {
    const NUMBER_LENGTH = 1;
    if (bonus.length > 2) {
      throw new Error(`[ERROR] 보너스 번호는 ${NUMBER_LENGTH}개여야 합니다.`);
    }
  }

  checkDuplicateWithWinngNumbers(bonus, winningNumbers) {
    if (winningNumbers.includes(bonus)) {
      throw new Error(
        `[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.`
      );
    }
  }
}

module.exports = Bonus;
