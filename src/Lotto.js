const Validator = require('./Utils/Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.lottoValidCheck(numbers);
    numbers = [...numbers];
    this.#numbers = numbers;
  }
  setBonus(bonus) {
    Validator.bonusValidCheck(bonus, this.#numbers);
    this.bonus = bonus;
  }
  compare(UserLotto) {
    const matchCount = { ea: 0, bonus: false};
    UserLotto.forEach(number => {
      if(this.#numbers.includes(number)) return matchCount.ea += 1;
      if(this.bonus.includes(number)) return matchCount.bonus = true;
    });
    return matchCount;
  }
}

module.exports = Lotto;
