class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.map(Number);
  }

  validate(numbers) {
    for (const number of numbers) {
      if (/[^0-9]/g.test(number)) {
        throw new Error("[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.");
      }

      if (number === '') {
        throw new Error("[ERROR] ,의 위치가 잘못되었습니다.");
      }

      if (String(number).includes(' ')) {
        throw new Error("[ERROR] 공백없이 입력해야합니다.");
      }

      if (1 > number || number > 45) {
        throw new Error("[ERROR] 1~45 사이의 숫자로 이루어져야 합니다.");
      }
    }

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.");
    }
  }

  validateBonusNumber(bonusNumber) {
    if (/[^0-9]/g.test(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 숫자로만 이루어져야 합니다.");
    }

    if (1 > bonusNumber || bonusNumber > 45) {
      throw new Error("[ERROR] 1~45 사이의 숫자로 이루어져야 합니다.");
    }

    if (this.#numbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 겹치지 않아야 합니다.")
    }
  }

  getLotto() {
    return this.#numbers;
  }

  setBonusNumber(bonusNumber) {
    this.validateBonusNumber(Number(bonusNumber));
    this.#numbers.push(Number(bonusNumber));
  }
}

module.exports = Lotto;
