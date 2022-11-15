const Calculator = require("../model/Calculator");
const { MESSAGE_ACCORDING_ASK } = require("../constants/Message");
const MyNumberGenerator = require("../model/Generator");
const Lotto = require("../model/Lotto");

const { readLine, close } = require("../utils/MissionUtils");
const View = require("../view/View");
const { Validator } = require("../utils/Validator");

class LottoGameController {
  #winningCount;
  #winningNumbers;
  #moneyInput;
  #model = {
    generatorModel: new MyNumberGenerator(),
    calculatorModel: new Calculator(),
  };
  #view = { Print: new View() };

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
    this.#view.Print.purchasedSize(myLottoNumbers);
  }

  #notifyMyLottoList(myLottoNumbers) {
    this.#view.Print.purchasedList(myLottoNumbers);
  }

  #getWinningNumbersFromUser(myLottoNumbers) {
    readLine(MESSAGE_ACCORDING_ASK.INPUT_WINNING_NUMBER, (winningNumber) => {
      this.#getBonusNumberFromUser(myLottoNumbers, winningNumber);
    });
  }
  #setSplittedNumber(numbers) {
    return Array.from(numbers.split(","), this.#convertArgsStringToInt);
  }
  #convertArgsStringToInt(number) {
    return +number;
  }

  #getBonusNumberFromUser(myLottoNumbers, winningNumber) {
    readLine(MESSAGE_ACCORDING_ASK.INPUT_BONUS_NUMBER, (bonusNumber) => {
      const lottoModel = new Lotto(this.#setSplittedNumber(winningNumber));
      this.#winningNumbers = lottoModel.getConvertedLottoNumber();
      Validator.isBonusNumberValid(this.#winningNumbers, bonusNumber);
      this.#calculateWinningCount(myLottoNumbers);
    });
  }

  #calculateWinningCount(myLottoNumbers) {
    this.#winningCount = this.#model.calculatorModel.getWinningResult(
      myLottoNumbers,
      this.#winningNumbers
    );

    this.#view.Print.rankingResult(this.#winningCount);
    this.#calculateEarningRate();
  }

  #calculateEarningRate() {
    const earningRate = this.#model.calculatorModel.getEarningRate(
      this.#winningCount,
      this.#moneyInput
    );

    this.#view.Print.eariningRate(earningRate);
    close();
  }
}

module.exports = LottoGameController;
