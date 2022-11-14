const Calculator = require("./Calculator");
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
    readLine("구입 금액을 입력해주세요.", (moneyInput) => {
      this.#moneyInput = moneyInput;
      this.generateMyNumbers();
    });
  }
  generateMyNumbers() {
    const myLottoNumbers = this.#model.generatorModel.generateMyLottoNumber(this.#moneyInput);
    this.getWinningNumbersFromUser(myLottoNumbers);
  }

  getWinningNumbersFromUser(myLottoNumbers) {
    readLine("당첨 번호를 입력해 주세요.", (winningNumber) => {
      this.getBonusNumberFromUser(myLottoNumbers, winningNumber);
    });
  }

  getBonusNumberFromUser(myLottoNumbers, winningNumber) {
    readLine("보너스 번호를 입력해 주세요.", (bonusNumber) => {
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
