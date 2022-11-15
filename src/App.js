const MissionUtils = require("@woowacourse/mission-utils");
const { READLINE_PHRASE } = require("./constant/Constant");
const LottoMachine = require("../src/LottoMachine");
const Lotto = require("../src/Lotto");
const Bonus = require("../src/Bonus");
const WinningStastics = require("../src/WinningStastics");

class App {
  #purchaseAmount;
  #lottoMachineOutput;
  #lottoNumbers;
  #bonusNumber;

  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    MissionUtils.Console.readLine(
      READLINE_PHRASE.INPUT_PURCHASE_AMMOUNT,
      (money) => {
        const lottoMachine = new LottoMachine(money);
        this.#purchaseAmount = money;
        this.#lottoMachineOutput = lottoMachine.lottoMachineOutput;

        this.inputLottoNumbers();
      }
    );
  }

  inputLottoNumbers() {
    MissionUtils.Console.readLine(
      "\n" + READLINE_PHRASE.INPUT_WINNING_NUMBER,
      (lottoNumbers) => {
        let splitLottoNumbers = lottoNumbers.split(",");
        new Lotto(splitLottoNumbers);
        this.#lottoNumbers = splitLottoNumbers.map(Number);

        this.inputBonusNumber();
      }
    );
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(
      "\n" + READLINE_PHRASE.INPUT_BONUS_NUMBER,
      (bonusNumber) => {
        new Bonus(bonusNumber, this.#lottoNumbers);
        this.#bonusNumber = Number(bonusNumber);

        this.printWinningStastics();
      }
    );
  }

  printWinningStastics() {
    const winningStastics = new WinningStastics(
      this.#lottoNumbers,
      this.#bonusNumber,
      this.#purchaseAmount,
      this.#lottoMachineOutput
    );
    winningStastics.print();
  }
}

module.exports = App;

const app = new App();
app.play();
