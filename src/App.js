const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGES, PAY_ERROR } = require("./constants/Constants.js");
const UNIT = 1000;

class App {
  #count = 0;
  #lottos = [];

  play() {
    this.start();
  } 

  start() {
    Console.readLine(MESSAGES.PAY_COST, (input) => {
      this.checkPayValidation(input);
      this.#count = this.checkPayAmount(input);
      this.#lottos = this.getAllLottoList(this.#count);
      this.printLottoList(this.#lottos);
    });
  }

  checkPayValidation(purchase) {
    if (purchase < UNIT) throw new Error(PAY_ERROR.UNDER);
    if (isNaN(purchase)) throw new Error(PAY_ERROR.ONLY_NUMBER);   
    if (purchase % UNIT !== 0) throw new Error(PAY_ERROR.UNIT);
  }

  checkPayAmount(purchase) {
    purchase /= UNIT;
    Console.print('\n' + MESSAGES.PURCHASED_MESSAGE(purchase));
    return purchase;
  }

  getlottoList() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b);
  }
  
  getAllLottoList(count) {
    let list = [];
    for(let i = 0 ; i < count ; i++) {
      list.push(this.getlottoList());
    }
    return list;
  }

  printLottoList(lists) {
    lists.forEach((list) => {
      Console.print(`[${list.join(", ")}]`);
    });
  }

}

const app = new App();
app.play();
module.exports = App;
