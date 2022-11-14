const { Console, Random } = require("@woowacourse/mission-utils");
const BonusNumber = require("./BonusNumber");
const InputAmount = require("./InputAmount");
const Lotto = require("./Lotto");
const Prize = require("./Prize");

class App {
  inputAmount;
  generatedLottos = [];
  lottoNumbers;
  bonusNumber;

  play() {
    this.askForAmount();
  }

  /**
   * 구입금액을 입력 받습니다.
   */
  askForAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      this.inputAmount = Number(input);
      new InputAmount(input);
      this.generateLotto();
    });
  }

  /**
   * 로또 수량을 계산하여 수량만큼 로또를 발행합니다.
   */
  generateLotto() {
    const quantityOfLottos = this.inputAmount / 1000;
    for (let i = 0; i < quantityOfLottos; i++) {
      const pickedNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      Console.print(`[${pickedNumbers.join(", ")}]`);
      this.generatedLottos.push(pickedNumbers);
    }
    this.askForLottoNumbers();
  }

  /**
   * 당첨 번호를 입력 받습니다.
   */
  askForLottoNumbers() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (input) => {
      this.lottoNumbers = input.split(",").map((el) => Number(el));
      new Lotto(this.lottoNumbers);
      this.askForBonusNumber();
    });
  }

  /**
   * 보너스 번호를 입력 받습니다.
   */
  askForBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (input) => {
      this.bonusNumber = Number(input);
      new BonusNumber(input, this.lottoNumbers);
      this.printWinStats();
    });
  }

  /**
   * 당첨 통계를 출력합니다.
   */
  printWinStats() {
    Console.print("\n당첨 통계\n---");
    const prize = new Prize(
      this.generatedLottos,
      this.lottoNumbers,
      this.bonusNumber
    );
    this.printYieldRate(prize);
  }

  /**
   * 수익률을 출력합니다.
   * @param {Prize} prize - Prize 인스턴스
   */
  printYieldRate(prize) {
    const totalPrize = prize.totalPrize;
    const yieldRate = ((totalPrize / this.inputAmount) * 100).toFixed(1);
    Console.print(`총 수익률은 ${yieldRate}%입니다.`);
  }
}

const app = new App();
app.play();

module.exports = App;
