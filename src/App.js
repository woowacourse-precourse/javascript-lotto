const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  inputAmount;
  generatedLottos = [];

  play() {
    this.askForAmount();
  }

  askForAmount() {
    Console.readLine("구입금액을 입력해 주세요.", (input) => {
      this.inputAmount = Number(input);
      this.validateInputAmount();
    });
  }

  validateInputAmount() {
    const inputAmount = this.inputAmount;
    const error = new Error("[ERROR] 구입금액은 천 원 단위여야 합니다.");
    if (
      inputAmount < 1000 ||
      inputAmount / 1000 !== Math.floor(inputAmount / 1000)
    )
      throw error;
    this.generateLotto();
  }

  generateLotto() {
    const quantityOfLottos = this.inputAmount / 1000;
    for (let i = 0; i < quantityOfLottos; i++) {
      this.generatedLottos.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    this.generatedLottos = this.generatedLottos.map((el) =>
      el.sort((a, b) => a - b)
    );
  }
}

const app = new App();
app.play();

module.exports = App;
