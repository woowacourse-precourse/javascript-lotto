class Bonus {
  #bonusNumber;

  constructor(bonusNumber, winningLottoNumberArray) {
    this.validate(bonusNumber, winningLottoNumberArray);
    this.#bonusNumber = bonusNumber;
  }

  validate(bonusNumber, winningLottoNumberArray) {
    if (isNaN(Number(bonusNumber)) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(
        '[ERROR] 보너스 숫자는 1~45 범위의 숫자로 입력해야 합니다.'
      );
    }

    if (winningLottoNumberArray.includes(bonusNumber)) {
      throw new Error('[ERROR] 로또 번호는 중복되면 안됩니다.');
    }
  }

  getValue() {
    return this.#bonusNumber;
  }
}

module.exports = Bonus;
