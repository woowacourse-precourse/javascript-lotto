const Lotto = require("./Lotto");

class LottoAnswer extends Lotto {
  #bonus;
  constructor(numbers) {
    super(numbers);
    this.#bonus = null;
  }

  validateBonus(bonus) {
    if (isNaN(bonus)) throw new Error("[ERROR] 1개의 숫자를 입력하세요.");
    if (this.numbers.includes(bonus))
      throw new Error("[ERROR] 당첨 번호와 중복되지 않는 숫자를 입력하세요.");
    if (bonus < 1 || bonus > 45)
      throw new Error("[ERROR] 1부터 45까지 숫자 중 입력하세요.");
    if (!Number.isInteger(bonus)) throw new Error("[ERROR] 정수를 입력하세요.");
  }

  set bonus(bonus) {
    this.validateBonus(bonus);
    this.#bonus = bonus;
  }

  get bonus() {
    if (this.#bonus !== null) return this.#bonus;
  }
}

module.exports = LottoAnswer;
