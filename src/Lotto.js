const View = require("./View");
const Message = require("./Message");
const AutoLotto = require("./AutoLotto");
const Budget = require("./Budget");
const Constant = require("./constant/Constant");
const ExceptionHandler = require("./ExceptionHandler");
const Prize = require("./Prize");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.bonusNumber = 0;

    this.winningCount = 0;
    this.prize = new Prize();

    this.budget = new Budget();
    this.autoLotto = new AutoLotto();
  }

  // Entry
  lottoPlay() {
    View.input(Message.ASK_BUDGET, this.lottoPlayCallback.bind(this));
  }

  // Entry Callback
  lottoPlayCallback(input) {
    this.lottoPurchase(input);
    this.winningNumberandBonusNumber();
  }

  // 로또 구매
  lottoPurchase(input) {
    this.saveBudget(input);
    this.printHowManyLotto(Message.returnHowManyLotto(this.budget.returnCount()));
    this.makeAutoLottoandPrint(this.budget.count);
  }

  saveBudget(input) {
    ExceptionHandler.isNotaNumber(input);
    ExceptionHandler.budgetUnit(input);

    this.budget.budget = parseInt(input);
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

  autoLottoArraytoString(array) {
    let stringRandomLottoArray = "[";
    return stringRandomLottoArray + array.join(", ") + "]";
  }

  printAutoLotto() {
    this.autoLotto.randomLottoArray.forEach((array) => {
      View.output(this.autoLottoArraytoString(array));
    });
  }

  // 당첨 번호, 보너스 번호
  winningNumberandBonusNumber() {
    this.inputWinningNumbers();
  }

  inputWinningNumbers() {
    View.input(Message.ASK_WINNING_NUMBER, this.saveWinningNumbers.bind(this));
  }

  saveWinningNumbers(input) {
    input.split(Constant.COMMA).forEach((char) => {
      ExceptionHandler.isNotaNumber(char);
    });
    ExceptionHandler.winningNumberLength(input);

    this.numbers = input.split(Constant.COMMA).map((number) => parseInt(number));

    this.inputBonusNumber();
  }

  inputBonusNumber() {
    View.input(Message.ASK_BONUS_NUMBER, this.saveBonusNumber.bind(this));
  }

  saveBonusNumber(input) {
    ExceptionHandler.isNotaNumber(input);
    ExceptionHandler.bonusNumberCannotBeWinningNumber(this.numbers, parseInt(input));

    this.bonusNumber = parseInt(input);
    this.checkWins();
  }
}

module.exports = Lotto;
