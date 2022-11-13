const Lotto = require("./Lotto");

class LottoAnswer extends Lotto {
  #bonus;
  constructor(numbers) {
    super(numbers);
    this.#bonus = null;
  }
}

module.exports = LottoAnswer;
