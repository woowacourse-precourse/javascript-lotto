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

  // 당첨 확인
  checkWins() {
    this.autoLotto.randomLottoArray.forEach((array) => {
      this.checkPrize(array, this.numbers);
    });
    this.printWinningStats();
  }

  calculateWinningCount(game, numbers) {
    game.forEach((number) => {
      if (numbers.includes(number)) {
        this.winningCount++;
      }
    });
  }

  checkPrize(game, numbers) {
    this.calculateWinningCount(game, numbers);

    this.checkPrizes(game);
    this.initializeWinningCount();
  }

  checkPrizes(game) {
    this.checkFifthPrize();
    this.checkFourthPrize();
    this.checkThirdPrize(game);
    this.checkFirstPrize();
  }

  initializeWinningCount() {
    this.winningCount = 0;
  }

  checkFifthPrize() {
    if (this.winningCount === Constant.FIFTH) {
      this.prize.fifth++;
    }
  }

  checkFourthPrize() {
    if (this.winningCount === Constant.FOURTH) {
      this.prize.fourth++;
    }
  }

  checkThirdPrize(game) {
    if (this.winningCount === Constant.THIRD) {
      this.prize.third++;
      this.checkSecondPrize(game);
    }
  }

  checkSecondPrize(game) {
    if (game.includes(this.bonusNumber)) {
      this.prize.second++;
      this.prize.third--;
    }
  }

  checkFirstPrize() {
    if (this.winningCount === Constant.FIRST) {
      this.prize.first++;
    }
  }

  // 당첨 통계 출력
  printWinningStats() {
    View.output(Message.WINNING_STATS);
    this.printFifthPrize();
    this.printFourthPrize();
    this.printThirdPrize();
    this.printSecondPrize();
    this.printFirstPrize();
    this.printYield();
  }

  printFifthPrize() {
    View.output(Message.returnFifthPrizeResult(this.prize.fifth));
  }

  printFourthPrize() {
    View.output(Message.returnFourthPrizeResult(this.prize.fourth));
  }

  printThirdPrize() {
    View.output(Message.returnThirdPrizeResult(this.prize.third));
  }

  printSecondPrize() {
    View.output(Message.returnSecondPrizeResult(this.prize.second));
  }

  printFirstPrize() {
    View.output(Message.returnFirstPrizeResult(this.prize.first));
  }

  // 수익률
  printYield() {
    this.sumTotal();
    this.calculateYield(this.prize.total, this.budget.budget);
    View.output(Message.returnYield(this.prize.rateOfReturn));
    View.close();
  }

  sumTotal() {
    this.prize.total +=
      this.prize.fifth * Constant.FIFTH_PRIZE +
      this.prize.fourth * Constant.FOURTH_PRIZE +
      this.prize.third * Constant.THIRD_PRIZE +
      this.prize.second * Constant.SECOND_PRIZE +
      this.prize.first * Constant.FIRST_PRIZE;
  }

  calculateYield(total, budget) {
    this.prize.rateOfReturn = ((total / budget) * 100).toFixed(1);
  }
}

module.exports = Lotto;
