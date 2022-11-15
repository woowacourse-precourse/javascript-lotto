const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./lib/constant");
const Lotto = require("./Lotto");

class App {
  play() {
    this.getAmountPaid((count) => {
      let lottos = this.issueLottos(count);
      this.getWinningNumbers((input) => {
        let winnigNumbers = input;
        this.getBonusNumbers((input) => {
          let bonusNumber = input;
          console.log(winnigNumbers);
          console.log(bonusNumber);
          this.appClose();
        });
      });
    });
  }

  getAmountPaid(callback) {
    Console.readLine(MESSAGES.TAKE_MONEY, (input) => {
      callback(input / 1000);
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

  getWinningNumbers(callback) {
    Console.readLine(MESSAGES.TAKE_WINNING_NUMBERS, (input) => {
      let winnigNumbers = input.split(",").map((x) => Number(x));
      callback(winnigNumbers);
    });
  }

  getBonusNumbers(callback) {
    Console.readLine(MESSAGES.TAKE_BONUS_NUMBERS, (input) => {
      callback(input);
    });
  }

  appClose() {
    Console.close();
  }
}

module.exports = App;

let app = new App();
app.play();
