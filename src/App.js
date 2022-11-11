const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.numberOfPurchases = 0;
    this.purchasedLottos = [];
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

  play() {
    this.buyLotto();
    this.printLotto();

  }
}

const lotto = new App();
lotto.play();

module.exports = App;
