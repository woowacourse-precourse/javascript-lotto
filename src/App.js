const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto.js');

const LOTTO_PRICE = 1000;

class App {
  #money = 0;
  #lottos = [];
  #winningNumbers;
  #bounsNumber;

  inputMoney() {
    Console.readLine('구입금액을 입력해 주세요.', answer => {
      this.validateMoney(answer);
      this.#money = Number(answer);
    });
  }

  validateMoney(money) {
    if (Number.isNaN(+money)) {
      throw new Error('[ERROR] 올바르지 않은 금액입니다.');
    }
    if (Number(money) % LOTTO_PRICE !== 0) {
      throw new Error(`[ERROR] ${LOTTO_PRICE}원 단위로 입력해야 합니다.`);
    }
  }

  buyingLotto() {
    for (let money = this.#money; money >= LOTTO_PRICE; money -= LOTTO_PRICE) {
      this.#lottos.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }
  }

  printLottos() {
    Console.print(`${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach(lotto => lotto.print());
  }

  play() {
    this.inputMoney();
    this.buyingLotto();
    Console.close();
  }
}

module.exports = App;
