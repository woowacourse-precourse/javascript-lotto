class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (numbers.length != new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
    numbers.map((element) => {
      if (element < 1 || element > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
  }
  // TODO: 추가 기능 구현

  getLottoNum() {
    return this.#numbers;
  }

  setBonusNum(bonusNum) {
    this.validateBonusNum(bonusNum);
  }

  validateBonusNum(bonusNum) {
    if (isNaN(bonusNum)) {
      throw new Error("[ERROR] 로또 구입금액은 숫자여야 합니다.");
    } else if (bonusNum < 1 || bonusNum > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }
}

module.exports = Lotto;
