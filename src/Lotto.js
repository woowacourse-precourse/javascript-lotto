const View = require("./View");
const Message = require("./Message");
const AutoLotto = require("./AutoLotto");
const Budget = require("./Budget");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.bonusNumber = 0;

    this.budget = new Budget();
    this.AutoLotto = new AutoLotto();
  }

  saveBudget(input) {
    this.budget.divideBudget(input);
  }
}

module.exports = Lotto;
