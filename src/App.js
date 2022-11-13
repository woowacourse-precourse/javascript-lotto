const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.money = 0;
    this.lottoCount = 0;
    this.lottos = [];
  }

  play() {
    Console.readLine("구매금액을 입력해 주세요.\n", (answer) => {
      this.validateMoney(answer);
      this.money = parseInt(answer);
      this.getLottoCount();
      this.getLottoNumbers();
    });
  }

  validateMoney(value) {
    const reg = /^\d+$/;
    if (!reg.test(value)) {
      throw new Error("[ERROR] 구매금액은 숫자여야 합니다.");
    }
    const money = parseInt(value);
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 구매금액은 1,000원 단위여야 합니다.");
    }
  }

  getLottoCount() {
    const count = this.money / 1000;
    this.lottoCount = count;
  }

  getLottoNumbers() {
    let count = 0;
    while (count < this.lottoCount) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      this.lottos.push(new Lotto(numbers));
      count++;
    }
  }
}

module.exports = App;
