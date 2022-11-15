const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  #ticketCnt;
  #purchased;

  constructor() {
    this.#ticketCnt = 0;
    this.#purchased = [];
  }

  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.#inputMoneyExceptionCheck(money);
      this.#ticketCnt = money / 1000;
      this.#generateLotto();
      this.#printPurchasedLotto();
    });
  }

  #inputMoneyExceptionCheck(money) {
    if (this.#stringHasNaN(money))
      throw new Error('[ERROR] 금액은 숫자로 입력해 주세요');
    if (money % 1000 !== 0)
      throw new Error('[ERROR] 금액은 1000원 단위로 입력해 주세요');
  }

  #stringHasNaN(money) {
    for (let i = 0; i < money.length; ++i) {
      if (
        money.charCodeAt(i) < '0'.charCodeAt(0) ||
        money.charCodeAt(i) > '9'.charCodeAt(0)
      )
        return true;
    }
    return false;
  }

  #generateLotto() {
    for (let i = 0; i < this.#ticketCnt; ++i) {
      this.#purchased.push(new Lotto(this.#numGenerator()));
    }
  }

  #numGenerator() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }

  #printPurchasedLotto() {
    MissionUtils.Console.print(`\n${this.#ticketCnt}개를 구매했습니다.`);
    this.#purchased.map((lotto) => lotto.printNumbers());
  }
}

module.exports = App;
