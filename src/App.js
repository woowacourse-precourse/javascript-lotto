const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const PurchaseLotto = require('./PurchaseLotto');
const HandleLotto = require('./HandleLotto');

class App {
  #purchaseLotto;
  #winningLotto;
  #bonusNum;
  #handleLotto;

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
    let winningNum = [];

    Console.readLine('당첨 번호를 입력해 주세요.', (nums) => {
      nums.split(',').map((num) => {
        winningNum.push(parseInt(num));
      })
    })

    this.#winningLotto = new Lotto(winningNum);

    this.enterBonusNum();
  }

  enterBonusNum() {
    Console.readLine('보너스 번호를 입력해 주세요.', (bonusNum) => {
      this.#bonusNum = parseInt(bonusNum);
    })

    this.#handleLotto = new HandleLotto(this.#winningLotto, this.#bonusNum, this.#purchaseLotto);
  }
}

module.exports = App;