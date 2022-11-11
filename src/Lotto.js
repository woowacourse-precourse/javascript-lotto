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
    this.autoLotto = new AutoLotto();
  }

  lottoPurchase() {
    View.input(Message.ASK_BUDGET, this.calculateHowManyLottoandPrint.bind(this));
  }

  calculateHowManyLottoandPrint(input) {
    this.saveBudget(input);
    this.printHowManyLotto(Message.returnHowManyLotto(this.budget.returnCount()));
    this.makeAutoLottoandPrint(this.budget.count);
  }

  saveBudget(input) {
    this.budget.divideBudget(input);
  }

  printHowManyLotto(output) {
    View.output(output);
  }

  makeAutoLottoandPrint(count) {
    this.makeAutoLotto(count);
    this.printAutoLotto();
  }

  makeAutoLotto(count) {
    this.autoLotto.makeRandomLottoArray(count);
  }

  printAutoLotto() {
    this.autoLotto.randomLottoArray.forEach((array) => {
      View.output(array);
    });
  }
}

module.exports = Lotto;
