const MissionUtils = require("@woowacourse/mission-utils");
const { READLINE_PHRASE, OUTPUT_PHRASE } = require("./constant/Constant");
const LottoMachine = require("../src/LottoMachine");
const Lotto = require("../src/Lotto");
const Bonus = require("../src/Bonus");
const WinningStastics = require("../src/WinningStastics");

class App {
  constructor() {
    this.purchaseAmount;
    this.lottoMachineOutput;
    this.lottoNumbers;
    this.bonusNumber;
  }

  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    MissionUtils.Console.readLine(
      READLINE_PHRASE.INPUT_PURCHASE_AMMOUNT,
      (money) => {
        const lottoMachine = new LottoMachine(money);
        this.purchaseAmount = money;
        this.lottoMachineOutput = lottoMachine.lottoMachineOutput;

        this.inputLottoNumbers();
      }
    );
  }

  inputLottoNumbers() {
    MissionUtils.Console.readLine(
      OUTPUT_PHRASE.LINE_UP + READLINE_PHRASE.INPUT_WINNING_NUMBER,
      (numbers) => {
        let splitNumbers = numbers.split(",");
        new Lotto(splitNumbers);
        this.lottoNumbers = splitNumbers.map(Number);

        this.inputBonusNumber();
      }
    );
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(
      OUTPUT_PHRASE.LINE_UP + READLINE_PHRASE.INPUT_BONUS_NUMBER,
      (bonusNumber) => {
        new Bonus(bonusNumber, this.lottoNumbers);
        this.bonusNumber = Number(bonusNumber);

        this.printWinningStastics();
      }
    );
  }

  printWinningStastics() {
    const winningStastics = new WinningStastics(
      this.lottoNumbers,
      this.bonusNumber,
      this.purchaseAmount,
      this.lottoMachineOutput
    );
    winningStastics.printWinningStastics();
  }
}

const app = new App();
app.play();

module.exports = App;
