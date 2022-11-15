const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./lib/constant");
const Lotto = require("./Lotto");

class App {
  async play() {
    let lottoCount = await this.getAmountPaid();
    let lottos = this.issueLottos(lottoCount);
    let winningNumbers = await this.getWinningNumbers();
    let bonusNumber = await this.getBonusNumbers();
    this.appClose();
  }

  getAmountPaid() {
    return new Promise((resolve) => {
      Console.readLine(MESSAGES.TAKE_MONEY, (input) => {
        resolve(input / 1000);
      });
    });
  }

  issueLottos(count) {
    let lottos = [];
    for (let i = 0; i < count; i++) {
      let randomNums = Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNums = randomNums.sort((a, b) => a - b);
      let lotto = new Lotto(randomNums);
      lottos.push(lotto);
    }
    return lottos;
  }

  getWinningNumbers() {
    return new Promise((resolve) => {
      Console.readLine(MESSAGES.TAKE_WINNING_NUMBERS, (input) => {
        let winnigNumbers = input.split(",").map((x) => Number(x));
        resolve(winnigNumbers);
      });
    });
  }

  getBonusNumbers() {
    return new Promise((resolve) => {
      Console.readLine(MESSAGES.TAKE_BONUS_NUMBERS, (input) => {
        resolve(input);
      });
    });
  }

  appClose() {
    Console.close();
  }
}

module.exports = App;

let app = new App();
app.play();
