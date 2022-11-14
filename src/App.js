const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGES, PAY_ERROR, BONUS_ERROR } = require("./constants/Constants.js");
const Lotto = require('./Lotto');
const UNIT = 1000;

class App {
  #count = 0;
  #lottos = [];
  #win_lotto=[];

  play() {
    this.start();
  } 

  start() {
    Console.readLine(MESSAGES.PAY_COST, (input) => {
      this.checkProcess(input);
    });
  }

  checkProcess(input) {
    this.checkPayValidation(input);
    this.checkPayAmount(input);
  }

  checkPayValidation(purchase) {
    if (purchase < UNIT) throw new Error(PAY_ERROR.UNDER);
    if (isNaN(purchase)) throw new Error(PAY_ERROR.ONLY_NUMBER);   
    if (purchase % UNIT !== 0) throw new Error(PAY_ERROR.UNIT);
  }

  checkPayAmount(purchase) {
    this.#count = purchase / UNIT;
    Console.print('\n' + MESSAGES.PURCHASED_MESSAGE(this.#count));
    this.getLottoProcess();
  }

  getLottoProcess() {
    this.#lottos = this.getAllLottoList(this.#count);
    this.printLottoList(this.#lottos);
  }

  getAllLottoList(count) {
    let list = [];
    for(let i = 0 ; i < count ; i++) {
      list.push(this.getlottoList());
    }
    return list;
  }

  getlottoList() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b);
  }
  
  printLottoList(lists) {
    lists.forEach((list) => {
      Console.print(`[${list.join(", ")}]`);
    });
    this.inputWinLotto();
  }

  inputWinLotto() {
    Console.readLine(MESSAGES.INPUT_LOTTO_ANSWER, (input) => {
      this.#win_lotto = input.split(',').map(Number);
      const lotto = new Lotto(this.#win_lotto);
    }); 
  }
}

const app = new App();
app.play();
module.exports = App;
