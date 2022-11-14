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
        // this.#userLottoArrays = Lotto.generateLottoArrays(this.#purchaseAmount);
        this.#userLottoArrays = [
          [8, 21, 23, 41, 42, 43],
          [3, 5, 11, 16, 32, 38],
          [7, 11, 16, 35, 36, 44],
          [1, 8, 11, 31, 41, 42],
          [13, 14, 16, 38, 42, 45],
          [7, 11, 30, 40, 42, 43],
          [2, 13, 22, 32, 38, 45],
          [1, 3, 5, 14, 22, 45],
        ];

        Printer.lottos(this.#userLottoArrays);
        this.setWinningLotto();
      }
    });
  }

  setWinningLotto() {
    Utils.getUserInput(Constant.GAME_PROGRESS_MESSAGES.ENTER_WINNING_NUMBER, (answer) => {
      this.#winningLotto = Lotto.covertStringToNumberArray(answer);
      this.#winningLotto = new Lotto(this.#winningLotto).ascendingSortLottoArray();
      console.log(this.#winningLotto);
      this.setBonusNumber();
    });
  }

  setBonusNumber() {
    Utils.getUserInput(Constant.GAME_PROGRESS_MESSAGES.ENTER_BONUS_NUMBER, (answer) => {
      if (Validator.checkRange(answer) && Validator.common(answer)) {
        this.#bonusNumber = answer;
        this.matchCount();
        console.log(this.#winningCountArray);
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

    console.log(this.#winningCountObj);
  }

  getResult() {
    this.#totalAmount = Calculator.totalWinningAmount(this.#winningCountArray);
    console.log('이거토탈', this.#totalAmount);
    this.#statistics = Calculator.getstatistics(this.#totalAmount, this.#purchaseAmount);
    Printer.result(this.#winningCountObj, this.#statistics);
    Uitls.close();
  }
}

module.exports = App;

const app = new App();

console.log(app.play());
