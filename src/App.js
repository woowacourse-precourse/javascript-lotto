const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.numberOfPurchases = 0;
    this.purchasedLottos = [];
    this.winningNumber = [];
    this.bonusNumber = 0;
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

  play() {
    this.buyLotto();
    this.printLotto();
    this.enterWinningNumber();
    this.enterBonusNumber();
  }
}

module.exports = App;
