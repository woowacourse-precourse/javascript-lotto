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
    const matchCount = { lotto: 0, bonus: false};
    UserLotto.forEach(number => {
      if(this.#numbers.includes(number)) return matchCount.lotto += 1;
      if(this.bonus.includes(number)) return matchCount.bonus = true;
    });
    matchCount.lotto = matchCount.lotto.toString();
    return matchCount;
  }
}

module.exports = Lotto;
