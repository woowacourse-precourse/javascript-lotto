const { Console, Random } = require('@woowacourse/mission-utils');
const PurchaseLotto = require('./PurchaseLotto');
const WinningLotto = require('./WinningLotto');

class App {
  #purchaseLotto;
  #winningLotto;

  constructor() {
    this.#purchaseLotto = new PurchaseLotto();
  }

  play() {
    this.buyLotto();
  }

  buyLotto() {
    Console.readLine('구입금액을 입력해 주세요.', (amount) => {
      this.#purchaseLotto.setPurchaseAmount(amount);

      Console.print(`${this.#purchaseLotto.getPurchaseNum()}개를 구매했습니다.`);

      this.#purchaseLotto.purchase();

      this.enterWinningNum();
    })
  }

  enterWinningNum() {
    let winningNum;
    let bunusNum;

    Console.readLine('당첨 번호를 입력해 주세요.', (winningNum) => {
      winningNum = winningNum;
    })

    Console.readLine('보너스 번호를 입력해 주세요.', (bonusNum) => {
      bonusNum = bonusNum
    })

    this.#winningLotto = new WinningLotto(winningNum, bunusNum);
  }
}

module.exports = App;
