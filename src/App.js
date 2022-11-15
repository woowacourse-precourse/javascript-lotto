const { Console, Random } = require('@woowacourse/mission-utils');
const PurchaseLotto = require('./PurchaseLotto');
const WinningLotto = require('./WinningLotto');

class App {
  #purchaseLotto;
  #winningLotto;
  #rank;
  #rateOfReturn;
  #winnings;

  constructor() {
    this.#purchaseLotto = new PurchaseLotto();
    this.#rank = [0, 0, 0, 0, 0];
    this.#winnings = [5000, 50000, 1500000, 30000000, 2000000000];
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

    Console.readLine('보너스 번호를 입력해 주세요.', (bonusNum) => {
      this.#winningLotto = new WinningLotto(winningNum, parseInt(bonusNum));
    })

    this.checkWinningInfo();
  }

  checkWinningInfo() {
    this.#purchaseLotto.getPurchasedLotto().map((lotto) => {
      let matches = this.matchWithWinning(lotto.getNumbers());
      switch (matches) {
        case 3:
          this.#rank[0]++;
          break;
        case 4:
          this.#rank[1]++;
          break;
        case 5:
          if (lotto.getNumbers().includes(this.#winningLotto.getBonusNum())) {
            this.#rank[3]++;
          } else {
            this.#rank[2]++;
          }
          break;
        case 6:
          this.#rank[4]++;
          break;
      }
    })

    this.printWinningInfo()
  }

  printWinningInfo() {
    const matchMessage = ['3개 일치 (5,000원) - ', '4개 일치 (50,000원) - ', '5개 일치 (1,500,000원) - ', '5개 일치, 보너스 볼 일치 (30,000,000원) - ', '6개 일치 (2,000,000,000원) - ']
    this.#rank.map((rankNum, idx) => {
      Console.print(`${matchMessage[idx]}${rankNum}개`)
      this.#winnings[idx] = this.#winnings[idx] * rankNum;
    })

    Console.print(`총 수익률은 ${this.calRateOfReturn()}%입니다.`);
  }

  calRateOfReturn() {
    this.#rateOfReturn = Math.round(this.#winnings.reduce(function add(a, b) { return a + b }, 0) / this.#purchaseLotto.getPurcahseAmount() * 10000 ) / 100;
    return this.#rateOfReturn
  }
  
  matchWithWinning(lotto) {
    let matches = 0;
    lotto.map((l) => {
      if (this.#winningLotto.getWinningNum().includes(l)) {
        matches++;
      }
    })
    return matches
  }

}

module.exports = App;
