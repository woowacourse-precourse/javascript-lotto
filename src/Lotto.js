class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLotto(numbers);
    this.#numbers = numbers;
  }

  validateLotto(numbers) {
    if (numbers.length !== 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    if (new Set(numbers).size !== 6) throw new Error("[ERROR] 중복된 번호가 존재합니다.");
    if (!numbers.every(this.isNumber)) throw new Error("[ERROR] 숫자가 아닌 번호가 존재합니다.");
    if (!numbers.every(this.isLottoNumberFrom1to45)) throw new Error("[ERROR] 로또 번호가 1~45 사이가 아닙니다.");
    return true;
  }

  isNumber(number) {
    if (number.toString().match(/\d/)) return true;
    return false;
  }

  isLottoNumberFrom1to45(number) {
    if (number >= 1 && number <= 45) return true;
    return false;
  }
}

module.exports = Lotto;
