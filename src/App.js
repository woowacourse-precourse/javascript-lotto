const MissionUtils = require("@woowacourse/mission-utils");
const Bonus = require("./bonus");
const Calculator = require("./Calculator");
const Lotto = require("./Lotto");
const LottoGenerator = require("./LottoGenerator");
const { INPUT_MESSAGE, OUTPUT_MESSAGE } = require("./message");
const { Console } = MissionUtils;

class App {
  constructor() {
    this.userLottos = null;
    this.winningLotto = null;
    this.bonusLotto = null;
  }

  play() {
    this.inputPrice();
  }
  inputPrice() {
    Console.readLine(INPUT_MESSAGE.PURCHASE, (payment) => {
      const lottoGenerator = new LottoGenerator();
      const myLotto = lottoGenerator.generate(payment);
      this.userLottos = myLotto;
      this.printMyLotto(myLotto);
    });
  }
  printMyLotto(myLotto) {
    Console.print(OUTPUT_MESSAGE.PURCHASE(myLotto.length));
    myLotto.forEach((lotto) => {
      lotto.sort((a, b) => a - b);
      Console.print(lotto);
    });
    this.inputWinning();
  }
  inputWinning() {
    Console.readLine(INPUT_MESSAGE.WINNING, (input) => {
      const winning = input.split(",");
      this.winningLotto = new Lotto(winning).returnLotto();
      this.inputBonus();
    });
  }
  inputBonus() {
    Console.readLine(INPUT_MESSAGE.BONUS, (bonus) => {
      this.bonusLotto = new Bonus(bonus, this.winningLotto).returnBonus();
      this.calculateResult();
    });
  }
  calculateResult() {
    const result = new Calculator(
      this.userLottos,
      this.winningLotto,
      this.bonusLotto
    ).returnRank();
    this.printResult(result);
  }
  printResult(result) {}
}
const app = new App();
app.play();

module.exports = App;
