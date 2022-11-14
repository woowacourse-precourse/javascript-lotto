const { Random, Console } = require("@woowacourse/mission-utils");
const { validateMoney } = require("./Money");

class App {
  #money;
  #numOfLotto;
  #userLotto;
  #winLotto;
  #bonusNumber;

  constructor() {
    this.#userLotto = [];
    this.#winLotto = [];
  }

  play() {
    this.getMoney();
  }

  getMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      validateMoney(money);
      this.#money = money;
      this.getNumOfLotto();
    });
  }
  
  getNumOfLotto() {
    this.#numOfLotto = this.#money / 1000;
    this.buyLotto();
  }

  buyLotto() {
    for(let i = 0; i < this.#numOfLotto; i++) {
      let tmp = Random.pickUniqueNumbersInRange(1, 45, 6);
      tmp = tmp.sort((a,b) => a - b);
      this.#userLotto.push(tmp);
    }
    this.printBuyLotto();
  }

  printBuyLotto() {
    Console.print(`\n${this.#numOfLotto}개를 구매했습니다.`);
    this.#userLotto.forEach((lotto) => Console.print(`[${lotto.join(", ")}]`));
    getWinLotto();
  }
}

const app = new App();
app.play();

module.exports = App;
