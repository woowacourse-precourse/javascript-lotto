const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGES, PAY_ERROR, BONUS_ERROR, RANK, WINNING_STATISTICS } = require("./constants/Constants.js");
const Lotto = require('./Lotto');
const UNIT = 1000;

class App {
  #count = 0;
  #lottos = [];
  #win_lotto = [];

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
    Console.print('\n');
    this.inputWinLotto();
  }

  inputWinLotto() {
    Console.readLine(MESSAGES.INPUT_LOTTO_ANSWER, (input) => {
      this.#win_lotto = input.split(',').map(Number);
      const lotto = new Lotto(this.#win_lotto);
      this.inputBonusLotto();
    }); 
  }

  inputBonusLotto() {
    Console.readLine(MESSAGES.INPUT_BONUS_ANSWER, (input) => {
      this.bonusProcess(input);
    });
  }
  
  bonusProcess(bonus) {
    this.checkBonusLotto(Number(bonus));
    this.#win_lotto.push(Number(bonus));
    this.checkResult(this.#lottos, this.#win_lotto, bonus);
  }

  checkBonusLotto(bonus) {
    if (isNaN(bonus)) throw new Error(BONUS_ERROR.ONLY_NUMBER);
    if (bonus < 1 || bonus > 45) throw new Error(BONUS_ERROR.RANGE);   
    if (this.#win_lotto.includes(bonus) === true) throw new Error(BONUS_ERROR.DUPLICATE);
  }

  checkResult(lists,answer, bonus) {
    lists.map((list) => {
      let cnt = list.filter(num => answer.includes(num)).length;
      if(cnt === 3) RANK['three']++;
      if(cnt === 4) RANK['four']++;
      if(cnt === 5) this.isBonusResult(list, bonus);
      if(cnt === 6) RANK['six']++;
    })
    this.printResult();
  }

  isBonusResult(list, bonus) {
    if(list.slice(-1).join('') === bonus) return RANK['bfive']++;
    else return RANK['five']++;
  }

  printResult() {
    Console.print('\n당첨 통계\n---');
    Console.print(WINNING_STATISTICS.THREE(RANK['three']));
    Console.print(WINNING_STATISTICS.FOUR(RANK['four']));
    Console.print(WINNING_STATISTICS.FIVE(RANK['five']));
    Console.print(WINNING_STATISTICS.FIVE_BONUS(RANK['bfive']));
    Console.print(WINNING_STATISTICS.SIX(RANK['six']));
  }


}

const app = new App();
app.play();
module.exports = App;
