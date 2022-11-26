const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, UNIT } = require("./Utils/constant");
const Lotto = require("./Domains/Lotto");
const Result = require("./Domains/Result");
const Amount = require("./Domains/Amount");
const Bonus = require("./Domains/Bonus");
const LottoBundle = require("./Domains/LottoBundle");
class App {
  constructor() {
    this.userMoney = 0;
  }

  play() {
    this.inputAmount();
  }

  inputAmount() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_AMOUNT, (answer) => {
      if (new Amount(+answer)) {
        this.userMoney += +answer;
      }
      const piece = +answer / UNIT;
      MissionUtils.Console.print(MESSAGE.BUY_LOTTO(piece));
      this.printLottoBundle(piece);
    });
  }

  printLottoBundle(piece) {
    const [bundle, bundleForPrint] = new LottoBundle().createLottoBundle(piece);
    bundleForPrint.forEach((x) => MissionUtils.Console.print(x));
    this.inputLottoNumber(bundle);
  }

  inputLottoNumber(bundle) {
    const numbers = [];
    MissionUtils.Console.readLine(MESSAGE.INPUT_LOTTO, (answer) => {
      const answerArray = answer.split(",");
      if (new Lotto(answerArray)) {
        answerArray.forEach((x) => numbers.push(+x));
      }
      this.inputBonusNumber(bundle, numbers);
    });
  }

  inputBonusNumber(bundle, numbers) {
    MissionUtils.Console.readLine(MESSAGE.INPUT_BONUS, (answer) => {
      if (new Bonus(numbers, +answer)) {
        const bonus = +answer;
        new Result(this.userMoney).statistics(bundle, numbers, bonus);
      }
    });
  }
}
const app = new App();
app.play();
module.exports = App;
