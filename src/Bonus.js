class Bonus {
  #bonus;

  constructor(bonus, winningNumbers) {
    this.validate(bonus, winningNumbers);
    this.#bonus = bonus;
  }

  validate(bonus, winningNumbers) {
    if (bonus.length !== 1) {
      throw new Error('[ERROR] 보너스 번호의 길이는 1이어야 합니다.');
    }

    if (winningNumbers.includes(bonus)) {
      throw new Error('[ERROR] 보너스 번호와 당첨 번호가 중복되었습니다.');
    }

    if (!/^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/.test(bonus)) {
      throw new Error('[ERROR] 1-45 범위의 숫자를 입력해주세요.');
    }
  }

  getBonusNumber() {
    return this.#bonus;
  }
}

module.exports = Bonus;
