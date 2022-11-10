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
    this.view = View;
    this.message = Message;
  }

  saveBudget(input) {
    this.budget.divideBudget(input);
  }

  calculateHowManyLotto() {
    this.view.input(Message.ASK_BUDGET, this.inputBudgetandCalculateHowManyLottoandPrint.bind(this));
  }

  inputBudgetandCalculateHowManyLottoandPrint(input) {
    this.saveBudget(input);
    this.printHowManyLotto(this.message.returnHowManyLotto(this.budget.returnCount(this.budget.count)));
  }

  printHowManyLotto(output) {
    this.view.output(output);
  }
}

module.exports = Lotto;
