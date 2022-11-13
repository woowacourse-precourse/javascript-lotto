const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES, REQUIREMENT } = require('./constant/Constant');
const { printAmounts, printLotto } = require('./Print');

class App {
  #purchaseAmount;
  #publishedLottos = [];

  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    MissionUtils.Console.readLine(MESSAGES.INPUTPURCHASEAMOUNT, (input) => {
      this.#purchaseAmount = Number(input); 

      return this.publishLottos();      
    })
  }

  publishLottos() {
    const amounts = ~~(this.#purchaseAmount / REQUIREMENT.LOTTOPRICE);
    printAmounts(amounts);

    for (let i = 0 ; i < amounts ; i++) {
      const publishLotto = MissionUtils.Random.pickUniqueNumbersInRange(REQUIREMENT.MIN, REQUIREMENT.MAX, REQUIREMENT.LENGTH).sort( (a, b) => a - b);
      printLotto(publishLotto);
      this.#publishedLottos.push(publishLotto);
    }
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;

