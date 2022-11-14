const LottoBonus = require('./LottoBonus');
const { checkLottoRange, checkDuplicate, checkLength } = require('./LottoValidation');

class Lotto {
  #numbers = {
    winning: [],
    bonus: null,
  };

  constructor(winningNumbers) {
    const winning = winningNumbers.map((number) => Number(number));
    Lotto.validate(winning);
    this.#numbers = { winning };
  }

  static validate(winning) {
    checkLength(winning);
    checkLottoRange(winning);
    checkDuplicate(winning);
  }

  setBonusNumber(bonusNumber) {
    const bonus = new LottoBonus(Number(bonusNumber), this.#numbers.winning).getNumber();
    this.#numbers.bonus = bonus;
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
