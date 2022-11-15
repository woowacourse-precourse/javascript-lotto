const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./lib/constant");
const Lotto = require("./Lotto");

class App {
  play() {
    this.getAmountPaid((input) => {
      let lottos = this.issueLottos(input);
      lottos.forEach((element) => {
        element.printNumbers();
      });
      this.appClose();
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

  appClose() {
    Console.close();
  }
}

module.exports = App;

let app = new App();
app.play();
