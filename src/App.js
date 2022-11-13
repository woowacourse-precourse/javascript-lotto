const { Console } = require("@woowacourse/mission-utils");
const Utils = require("./Utils");
const BuyLotto = require("./BuyLotto");
const Lotto = require("./Lotto");
const InputMoney = require("./InputMoney");
const GetStat = require("./GetStat");
const { INPUT_MESSAGES } = require("./Constant");

class App {
  #regExp

  constructor() {
    this.utils = new Utils();
    this.#regExp = / /g;
    this.lottoInfo = {
      rank5: 0,
      rank4: 0,
      rank3: 0,
      rank2: 0,
      rank1: 0,
      numberOfCorrectNumbers: 0,
      isIncludeBonusNumber: false
    };
  }

  play() {
    Console.readLine(INPUT_MESSAGES.MONEY, (inputMoney) => {
      new InputMoney(inputMoney);
      this.buyLottos(inputMoney);
    });
  }

  buyLottos(inputMoney) {
    this.lottoInfo.numbersOfLotto = inputMoney / 1000;
    this.lottoInfo.buyLotto = new BuyLotto(this.lottoInfo.numbersOfLotto);
    this.inputWinningNumbers();
  }

  inputWinningNumbers() {
    Console.readLine(INPUT_MESSAGES.WINNING_NUMBERS, (inputWinningNumbers) => {
      this.lottoInfo.winningNumbers = inputWinningNumbers.replace(this.#regExp, '').split(',');
      this.lottoInfo.lotto = new Lotto(this.lottoInfo.winningNumbers);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(INPUT_MESSAGES.BONUS_NUMBER, (bonusNumber) => {
      this.lottoInfo.bonusNumber = bonusNumber;
      this.lottoInfo.lotto.validateBonusNumber(this.lottoInfo.winningNumbers, this.lottoInfo.bonusNumber);
      new GetStat(this.lottoInfo);
      Console.close();
    });
  }
}

module.exports = App;

const app = new App();
app.play();