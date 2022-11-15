const Calculator = require("../model/Calculator");
const { MESSAGE_ACCORDING_ASK } = require("../constants/Message");
const MyNumberGenerator = require("../model/Generator");
const Lotto = require("../model/Lotto");

const { readLine, close } = require("../utils/MissionUtils");
const View = require("../view/View");

class LottoGameController {
  #winningCount;
  #winningNumbers;
  #moneyInput;
  #model = {
    generatorModel: new MyNumberGenerator(),
    calculatorModel: new Calculator(),
  };
  #view = { print: new View() };

  start() {
    this.#inputMoneyFromUser();
  }

  #inputMoneyFromUser() {
    readLine(MESSAGE_ACCORDING_ASK.INPUT_MONEY, (moneyInput) => {
      this.#moneyInput = moneyInput;
      this.#generateMyNumbers();
    });
  }

  #generateMyNumbers() {
    const myLottoNumbers = this.#model.generatorModel.generateMyLottoNumber(
      this.#moneyInput
    );
    this.#notifyMyInfo(myLottoNumbers);
    this.#getWinningNumbersFromUser(myLottoNumbers);
  }

  #notifyMyInfo(myLottoNumbers) {
    this.#notifyMyLottoSize(myLottoNumbers);
    this.#notifyMyLottoList(myLottoNumbers);
  }

  #notifyMyLottoSize(myLottoNumbers) {
    this.#view.print.purchasedSize(myLottoNumbers);
  }

  #notifyMyLottoList(myLottoNumbers) {
    this.#view.print.purchasedList(myLottoNumbers);
  }

  #getWinningNumbersFromUser(myLottoNumbers) {
    readLine(MESSAGE_ACCORDING_ASK.INPUT_WINNING_NUMBER, (winningNumber) => {
      this.#getBonusNumberFromUser(myLottoNumbers, winningNumber);
    });
  }

  #getBonusNumberFromUser(myLottoNumbers, winningNumber) {
    readLine(MESSAGE_ACCORDING_ASK.INPUT_BONUS_NUMBER, (bonusNumber) => {
      const lottoModel = new Lotto({
        winningNumber,
        bonusNumber: +bonusNumber,
      });
      this.#winningNumbers = lottoModel.getConvertedLottoNumber();
      this.#calculateWinningCount(myLottoNumbers);
    });
  }

  #calculateWinningCount(myLottoNumbers) {
    this.#winningCount = this.#model.calculatorModel.getWinningResult(
      myLottoNumbers,
      this.#winningNumbers
    );

    this.#view.print.rankingResult(this.#winningCount);
    this.#calculateEarningRate();
  }

  #calculateEarningRate() {
    const earningRate = this.#model.calculatorModel.getEarningRate(
      this.#winningCount,
      this.#moneyInput
    );

    this.#view.print.eariningRate(earningRate);
    close();
  }
}

module.exports = LottoGameController;
