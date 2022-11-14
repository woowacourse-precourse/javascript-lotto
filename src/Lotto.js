class Lotto {
  #numbers;

  constructor(numbers, bonus) {
    this.#numbers = {
      numbers: numbers,
      bonus: bonus
    };
  }

  getNumbers(){
    return this.#numbers;
  }
}

module.exports = Lotto;
