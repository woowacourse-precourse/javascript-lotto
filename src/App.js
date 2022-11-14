const { Console } = require("@woowacourse/mission-utils");
const BuyLotto = require("./BuyLotto");
const Lotto = require("./Lotto");
const InputMoney = require("./InputMoney");
const GetStat = require("./GetStat");
const { INPUT_MESSAGES, LOTTO_INFO_VALUES, INITIALIZE_VALUES } = require("./Constant");

class App {
  constructor() {
    this.lottoInfo = {
      rank5: INITIALIZE_VALUES.ZERO,
      rank4: INITIALIZE_VALUES.ZERO,
      rank3: INITIALIZE_VALUES.ZERO,
      rank2: INITIALIZE_VALUES.ZERO,
      rank1: INITIALIZE_VALUES.ZERO,
      numberOfCorrectNumbers: INITIALIZE_VALUES.ZERO,
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
    this.lottoInfo.numbersOfLotto = inputMoney / LOTTO_INFO_VALUES.LOTTO_COST;
    this.lottoInfo.buyLotto = new BuyLotto(this.lottoInfo.numbersOfLotto);
    this.inputWinningNumbers();
  }

  inputWinningNumbers() {
    Console.readLine(INPUT_MESSAGES.WINNING_NUMBERS, (inputWinningNumbers) => {
      const splitWinningNumbers = inputWinningNumbers
        .replace(INITIALIZE_VALUES.REPLACE_BEFORE, INITIALIZE_VALUES.REPLACE_AFTER)
        .split(INITIALIZE_VALUES.SPLIT_CHAR);
      this.lottoInfo.lotto = new Lotto(splitWinningNumbers);
      this.lottoInfo.lotto.validate();
      this.lottoInfo.winningNumbers = this.lottoInfo.lotto.getWinningNumbers();
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(INPUT_MESSAGES.BONUS_NUMBER, (bonusNumber) => {
      this.lottoInfo.bonusNumber = bonusNumber;
      this.lottoInfo.lotto.validateBonusNumber(this.lottoInfo.bonusNumber);
      new GetStat(this.lottoInfo).calculate();
      Console.close();
    });
  }
}

module.exports = App;

const app = new App();
app.play();