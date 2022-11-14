class Bonus {
  #bonus;

  constructor(bonus) {
    this.#setBonus(bonus);
  }

  #setBonus(bonus) {
    this.#bonus = bonus;
  }

  getBonus() {
    return this.#bonus;
  }
}

module.exports = Bonus;
