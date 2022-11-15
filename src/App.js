const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGES, WIN_CONDITIONS } = require("./lib/constant");
const Lotto = require("./Lotto");

class App {
  async play() {
    let lottoCount = await this.getAmountPaid();
    let lottos = this.issueLottos(lottoCount);
    lottos.forEach((element) => {
      element.printNumbers();
    });
    let winningNumbers = await this.getWinningNumbers();
    let bonusNumber = await this.getBonusNumbers();

    this.countWinLottos(lottos, winningNumbers, bonusNumber);
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

  countWinLottos(lottos, winnigNumbers, bonusNumber) {
    lottos.forEach((lotto) => {
      let winNumbers = lotto.countWinNumbers(winnigNumbers, bonusNumber);
      this.findConditions(winNumbers);
    });
    console.log(WIN_CONDITIONS);
  }

  findConditions(winNumbers) {
    WIN_CONDITIONS.forEach((condition) => {
      if (condition.winCount == winNumbers.winCount && !condition.checkBonus) {
        condition.count += 1;
      }
      if (
        condition.winCount == winNumbers.winCount &&
        condition.checkBonus &&
        condition.isBonus == winNumbers.isBonus
      ) {
        condition.count += 1;
      }
    });
  }

  appClose() {
    Console.close();
  }
}

module.exports = App;

let app = new App();
app.play();
