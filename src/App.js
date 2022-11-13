const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES, REQUIREMENT } = require('./constant/Constant');
const { printAmounts, printLotto, printResult } = require('./Print');
const Lotto = require('./Lotto');

class App {
  #purchaseAmount;
  #publishedLottos = [];
  #winningNumber;
  #bonusNumber;
  #profitRate;

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
      
      this.getBonusNumber();
    })
  }

  getBonusNumber() {
    MissionUtils.Console.readLine(MESSAGES.INPUTBONUSNUMBER, (input) => {
      this.#bonusNumber = Number(input);
      
      this.calcResult();
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
  
  calcResult() {
    const lotto = new Lotto(this.#winningNumber);
    const { three, four, five, bonus, six } = lotto.comparisonNumbers(this.#publishedLottos, this.#bonusNumber);  
    printResult({ three, four, five, bonus, six });
  }

}

const app = new App();
app.play();

module.exports = App;

