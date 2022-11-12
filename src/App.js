const { Console, Random } = require("@woowacourse/mission-utils");
const InputAmount = require("./InputAmount");
const Lotto = require("./Lotto");

class App {
  inputAmount;
  generatedLottos = [];
  lottoNumbers;

  play() {
    this.askForAmount();
  }

  askForAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      this.inputAmount = Number(input);
      new InputAmount(input);
      this.generateLotto();
    });
  }

  generateLotto() {
    const quantityOfLottos = this.inputAmount / 1000;
    for (let i = 0; i < quantityOfLottos; i++) {
      const pickedNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      Console.print(pickedNumbers);
      this.generatedLottos.push(pickedNumbers);
    }
    this.askForLottoNumbers();
  }

  askForLottoNumbers() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (input) => {
      this.lottoNumbers = input.split(",").map((el) => Number(el));
      new Lotto(this.lottoNumbers);
      this.askForBonusNumber();
    });
  }

  askForBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (input) => {
      this.bonusNumber = Number(input);
      new BonusNumber(input);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
