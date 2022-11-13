const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES, REQUIREMENT } = require('./constant/Constant');
const { printAmounts, printLotto } = require('./Print');
const Lotto = require('./Lotto');

class App {
  #purchaseAmount;
  #publishedLottos = [];
  #winningNumber;

  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    MissionUtils.Console.readLine(MESSAGES.INPUTPURCHASEAMOUNT, (input) => {
      this.#purchaseAmount = Number(input); 

      return this.publishLottos();      
    })
  }

  getWinningNumber() {
    MissionUtils.Console.readLine(MESSAGES.INPUTWINNINGNUMBER, (input) => {
      const winningNumber = input.split(',');    
      this.#winningNumber = Array.from(winningNumber, x => Number(x));
      new Lotto(this.#winningNumber);
      console.log(this.#winningNumber);
      MissionUtils.Console.close(); 
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

    this.getWinningNumber();
  }
  
}

const app = new App();
app.play();

module.exports = App;

