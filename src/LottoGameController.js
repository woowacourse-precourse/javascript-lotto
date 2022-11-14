const Calculator = require("./Calculator");
const ASK_MESSAGE = require("./constants/message");
const MyNumberGenerator = require("./Generator");
const Lotto = require("./Lotto");
const { readLine, close } = require("./Missionutils");
const View = require("./view");

class LottoGameController {
  #winningNumbers;
  #moneyInput;
  #model = {
    generatorModel: new MyNumberGenerator(),
    calculatorModel: new Calculator()
  };
  #view = { View: new View() };

  start() {
    this.inputMoneyFromUser();
  }

  inputMoneyFromUser() {
    readLine(ASK_MESSAGE.INPUT_MONEY, (moneyInput) => {
      this.#moneyInput = moneyInput;
      this.generateMyNumbers();
    });
  }

  generateMyNumbers() {
    const myLottoNumbers = this.#model.generatorModel.generateMyLottoNumber(this.#moneyInput);
    this.notifyMyInfo(myLottoNumbers);
    this.getWinningNumbersFromUser(myLottoNumbers);
  }

  notifyMyInfo(myLottoNumbers) {
    this.notifyMyLottoSize(myLottoNumbers);
    this.notifyMyLottoList(myLottoNumbers);
  }

  notifyMyLottoSize(myLottoNumbers) {
    this.#view.View.printPurchasedSize(myLottoNumbers);
  }

  notifyMyLottoList(myLottoNumbers) {
    this.#view.View.printPurchasedList(myLottoNumbers);
  }

  getWinningNumbersFromUser(myLottoNumbers) {
    readLine(ASK_MESSAGE.INPUT_WINNING_NUMBER, (winningNumber) => {
      this.getBonusNumberFromUser(myLottoNumbers, winningNumber);
    });
  }

  getBonusNumberFromUser(myLottoNumbers, winningNumber) {
    readLine(ASK_MESSAGE.INPUT_BONUS_NUMBER, (bonusNumber) => {
      const lottoModel = new Lotto({ winningNumber, bonusNumber: +bonusNumber });
      this.#winningNumbers = lottoModel.getConvertedLottoNumber();
      this.calculateWinningCount(myLottoNumbers);
    });
  }

  calculateWinningCount(myLottoNumbers) {
    this.#winningNumbers = this.#model.calculatorModel.getWinningResult(
      myLottoNumbers,
      this.#winningNumbers
    );
    this.#view.View.printRankingResult(this.#winningNumbers);
    this.calculateEarningRate();
  }

  calculateEarningRate() {
    const earningRate = this.#model.calculatorModel.getEarningRate(this.#moneyInput);
    this.#view.View.printEariningRate(earningRate);
    close();
  }
}
// const a = new LottoGameController();
// a.play();
module.exports = LottoGameController;
