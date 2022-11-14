const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const {
  isNumber,
  isInThousands,
  isInRange,
  isExist,
} = require("./Exceptions");

class App {
  constructor() {
    this.numberOfPurchases = 0;
    this.purchasedLottos = [];
    this.winningNumber = [];
    this.bonusNumber = 0;
    this.sixMatch = 0;
    this.fiveMatch = 0;
    this.bonusFiveMatch = 0;
    this.fourMatch = 0;
    this.threeMatch = 0;
    this.profitRate = 0;
  }

  buyLotto() {
    Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      const price = Number(answer);
      isNumber(price);
      isInThousands(price);
      this.numberOfPurchases = price / 1000;
    });
  }

  randomNums() {
    let nums = Random.pickUniqueNumbersInRange(1, 45, 6);
    nums.sort((a,b) => a-b);
    return nums;
  }

  printLotto() {
    Console.print(`${this.numberOfPurchases}개를 구매했습니다.`);
    for (let i=0; i < this.numberOfPurchases; i++) {
      let lotto = new Lotto(this.randomNums());
      this.purchasedLottos.push(lotto.getNumbers());
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    }
  }

  enterWinningNumber() {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (answer) => {
      this.winningNumber = answer.replace(" ", "").split(",").map(item => Number(item));
      new Lotto(this.winningNumber);
    });
  }

  enterBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.\n', (answer) => {
      const bonus = Number(answer);

      isNumber(bonus);
      isInRange(bonus);
      isExist(this.winningNumber, bonus);
      
      this.bonusNumber = bonus;
    });
  }

  compareNumber() {
    this.purchasedLottos.map(lotto => {
      let duplicate = lotto.filter(item => this.winningNumber.includes(item)).length;
      
      if (duplicate === 6) this.sixMatch += 1; 
      if (duplicate === 5) this.bonusCheck(lotto);
      if (duplicate === 4) this.fourMatch += 1;
      if (duplicate === 3) this.threeMatch += 1;
    })
  }

  bonusCheck(lotto) {
    if (lotto.includes(this.bonusNumber)) {
      this.bonusFiveMatch += 1;
      return;
    }
    this.fiveMatch += 1;
  }

  calcProfitRate() {
    let sum = 
      this.threeMatch * 5000 + 
      this.fourMatch * 50000 + 
      this.fiveMatch * 1500000 + 
      this.bonusFiveMatch * 30000000 + 
      this.sixMatch * 2000000000;
      
    this.profitRate = ((sum / (this.numberOfPurchases * 1000)) * 100).toFixed(1);
  }

  printResult() {
    Console.print(`당첨 통계`);
    Console.print(`---`);
    Console.print(`3개 일치 (5,000원) - ${this.threeMatch}개`);
    Console.print(`4개 일치 (50,000원) - ${this.fourMatch}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.fiveMatch}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.bonusFiveMatch}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.sixMatch}개`);
    Console.print(`총 수익률은 ${this.profitRate}%입니다.`);
  }

  play() {
    this.buyLotto();
    this.printLotto();
    this.enterWinningNumber();
    this.enterBonusNumber();
    this.compareNumber();
    this.calcProfitRate();
    this.printResult();
    Console.close();
  }
}

module.exports = App;
