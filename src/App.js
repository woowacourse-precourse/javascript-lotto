const Uitls = require('./Utils');
const Constant = require('./Constant');
const Calculator = require('./Calculator');
const Validator = require('./Validator');
const Utils = require('./Utils');
const Lotto = require('./Lotto');
const Printer = require('./Printer');

class App {
  #purchaseAmount;

  #userLottoArrays;

  #winningLotto;

  #bonusNumber;

  #winningCountArray = [];

  #winningCountObj = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    0: 0,
  };

  #totalAmount;

  #statistics;

  play() {
    this.buyLotto();
  }

  buyLotto() {
    Uitls.getUserInput(Constant.GAME_PROGRESS_MESSAGES.ENTER_AMOUNT, (answer) => {
      if (Validator.common(answer) && Validator.unit(answer)) {
        this.#purchaseAmount = Calculator.divideUnit(answer);
        Utils.printMessage(
          `${this.#purchaseAmount}${Constant.GAME_PROGRESS_MESSAGES.USER_AMOUNT_INPUT}`,
        );
        this.#userLottoArrays = Lotto.generateLottoArrays(this.#purchaseAmount);

        Printer.lottos(this.#userLottoArrays);
        this.setWinningLotto();
      }
    });
  }

  setWinningLotto() {
    Utils.getUserInput(Constant.GAME_PROGRESS_MESSAGES.ENTER_WINNING_NUMBER, (answer) => {
      this.#winningLotto = Lotto.covertStringToNumberArray(answer);
      this.#winningLotto = new Lotto(this.#winningLotto).ascendingSortLottoArray();
      this.setBonusNumber();
    });
  }

  setBonusNumber() {
    Utils.getUserInput(Constant.GAME_PROGRESS_MESSAGES.ENTER_BONUS_NUMBER, (answer) => {
      if (Validator.checkRange(answer) && Validator.common(answer)) {
        this.#bonusNumber = answer;
        this.matchCount();
        this.convertArraytoObj();
        this.getResult();
      }
    });
  }

  matchCount() {
    this.#userLottoArrays.forEach((userlotto) => {
      this.#winningCountArray.push(
        Calculator.calWinningCount(userlotto, this.#winningLotto, this.#bonusNumber),
      );
    });
  }

  convertArraytoObj() {
    this.#winningCountArray.forEach((winningCount) => {
      this.#winningCountObj[winningCount] += 1;
    });
  }

  getResult() {
    this.#totalAmount = Calculator.totalWinningAmount(this.#winningCountArray);
    this.#statistics = Calculator.getstatistics(this.#totalAmount, this.#purchaseAmount);
    Printer.result(this.#winningCountObj, this.#statistics);
    Uitls.close();
  }
}

module.exports = App;
