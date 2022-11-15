class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers && numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (numbers && [...new Set(numbers)].length !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복이 있습니다.");
    }

    if (numbers && numbers.every((number) => number < 1 || number > 45)) {
      throw new Error(
        "[ERROR] 로또 번호는 1 ~ 45 사이의 숫자만 입력이 가능합니다."
      );
    }
  }

  validateBonusNumber(bonusNumber, lottoNumber) {
    if (lottoNumber.includes(bonusNumber)) {
      throw new Error(
        "[ERROR] 보너스 로또 번호가 로또 번호에 포함되어 있습니다."
      );
    }

    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 숫자만 입력 가능합니다.");
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(
        "[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자만 입력이 가능합니다."
      );
    }
  }
}

module.exports = Lotto;
