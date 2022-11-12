const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

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
      if (typeof price !== "number") {
        throw new Error("[ERROR] 숫자만 입력하세요.");
      }
      if (price % 1000 !== 0) {
        throw new Error("[ERROR] 구입 금액은 1000원 단위만 가능합니다.");
      } 
      this.numberOfPurchases = price / 1000;
    });
  }

  randomNums() {
    let nums = [];
    while (nums.length < 6) {
      let number = Random.pickNumberInRange(1, 45);
      if (!nums.includes(number)) {
        nums.push(number);
      }
    }
    nums.sort((a,b) => a-b);
    return nums;
  }

  printLotto() {
    Console.print(`\n${this.numberOfPurchases}개를 구매했습니다.`);
    for (let i=0; i < this.numberOfPurchases; i++) {
      let lotto = new Lotto(this.randomNums());
      this.purchasedLottos.push(lotto.getNumbers());
      Console.print(lotto.getNumbers());
    }
  }

  enterWinningNumber() {
    Console.readLine('\n당첨 번호를 입력해 주세요.', (answer) => {
      this.winningNumber = answer.replace(" ", "").split(",").map(item => Number(item));
      new Lotto(this.winningNumber);
    });
  }

  enterBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.', (answer) => {
      const bonus = Number(answer);

      if (typeof bonus !== "number") {
        throw new Error("[ERROR] 숫자만 입력하세요.");
      }
      if (bonus < 1 || bonus > 45) {
        throw new Error("[ERROR] 1 ~ 45 사이의 숫자만 입력하세요.");
      }
      if (this.winningNumber.includes(bonus)) {
        throw new Error("[ERROR] 당첨 번호에 보너스 숫자가 존재합니다.")
      }
      
      this.bonusNumber = bonus;
    });
  }

  compareNumber() {
    this.purchasedLottos.map(lotto => {
      let duplicate = lotto.filter(item => this.winningNumber.includes(item));
      switch (duplicate.length) {
        case 6:
          this.sixMatch += 1;
          break;
        case 5:
          if (this.bonusCheck(lotto)) {
            this.bonusFiveMatch += 1;
            break;
          }
          this.fiveMatch += 1;
          break;
        case 4:
          this.fourMatch += 1;
          break;
        case 3:
          this.threeMatch += 1;
          break;
      }
    })
  }

  bonusCheck(lotto) {
    if (lotto.includes(this.bonusNumber)) return true;
  }

  CalcProfitRate() {
    let sum = 0;
    sum = this.threeMatch * 5000 + this.fourMatch * 50000 + this.fiveMatch * 1500000 + this.bonusFiveMatch * 30000000 + this.sixMatch * 2000000000;
    this.profitRate = ((sum / (this.numberOfPurchases * 1000)) * 100).toFixed(2);
  }

  play() {
    this.buyLotto();
    this.printLotto();
    this.enterWinningNumber();
    this.enterBonusNumber();
    this.compareNumber();
    this.CalcProfitRate();
  }
}

module.exports = App;
