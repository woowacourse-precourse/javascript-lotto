const MissionUtils = require("@woowacourse/mission-utils");
const { READLINE_PHRASE, OUTPUT_PHRASE, LOTTO_RANGE } = require("./Constant");

class App {
  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    MissionUtils.Console.readLine(
      READLINE_PHRASE.INPUT_PURCHASE_AMMOUNT,
      (money) => {
        this.printPurchaseQuantity(money);
        this.printLottoNumberArray(money);

        this.inputWinningNumbers();
      }
    );
  }
  printPurchaseQuantity(money) {
    MissionUtils.Console.print(
      OUTPUT_PHRASE.LINE_UP +
        this.getPurchaseQuantity(money) +
        OUTPUT_PHRASE.PURCHASE_QUANTITY
    );
  }
  getPurchaseQuantity(money) {
    return parseInt(money / 1000);
  }

  printLottoNumberArray(money) {
    for (
      let sequence = 1;
      sequence < this.getPurchaseQuantity(money);
      sequence++
    ) {
      MissionUtils.Console.print(this.getLottoNumber());
    }
  }
  getLottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_RANGE.START_NUMBER,
      LOTTO_RANGE.END_NUMBER,
      LOTTO_RANGE.LENGTH
    ).sort((compare1, compare2) => {
      return compare1 - compare2;
    });
  }

  inputWinningNumbers() {
    MissionUtils.Console.readLine(
      OUTPUT_PHRASE.LINE_UP + READLINE_PHRASE.INPUT_WINNING_NUMBER,
      (WinningNumbers) => {
        let splitWinningNumbers = WinningNumbers.split(",");
        console.log(splitWinningNumbers);
        this.inputBonusNumber();
      }
    );
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(
      OUTPUT_PHRASE.LINE_UP + READLINE_PHRASE.INPUT_BONUS_NUMBER,
      (bonusNumber) => {
        console.log(bonusNumber);
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;
