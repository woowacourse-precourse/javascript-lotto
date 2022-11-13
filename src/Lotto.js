const LottoBonus = require('./LottoBonus');
const { checkLottoRange, checkDuplicate, checkLength } = require('./LottoValidation');

class Lotto {
  #numbers;

  constructor(winningNumber) {
    const winning = winningNumber.map((number) => Number(number));
    Lotto.validate(winning);
    this.bonus = null;
    this.#numbers = { winning };
  }

  static validate(winning) {
    checkLottoRange(winning);
    checkLength(winning);
    checkDuplicate(winning);
  }

  setBonusNumber(bonusNumber) {
    const bonus = new LottoBonus(bonusNumber, this.#numbers.winning).getNumber();
    this.#numbers.bonus = bonus;
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
