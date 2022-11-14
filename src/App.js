const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

const PRIZE_MONEY = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
};

class App {
  constructor() {
    this.money = 0;
    this.lottoCount = 0;
    this.lottos = [];
    this.winningNumber = null;
    this.bonusNumber = null;
    this.winningHistory = {};
  }

  play() {
    Console.readLine("구매금액을 입력해 주세요.\n", (answer) => {
      this.validateMoney(answer);
      this.money = parseInt(answer);
      this.getLottoCount();
      this.getLottoNumbers();
      this.setWinningNumber();
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

    this.printLottoNumbers();
  }

  printLottoNumbers() {
    Console.print(`${this.lottoCount}개를 구매했습니다.`);
    this.lottos.forEach((lotto) => {
      Console.print(`[${lotto.getLotto().join(", ")}]`);
    });
  }

  setWinningNumber() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (answer) => {
      const numbers = answer.split(",");
      this.winningNumber = new Lotto(numbers).getLotto().map(Number);
      this.setBonusNumber();
    });
  }

  setBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (answer) => {
      const value = parseInt(answer);
      this.validateBonusNumber(value);
      this.bonusNumber = value;
      this.setWinningHistory();
      this.getWinningHistory();
    });
  }

  validateBonusNumber(value) {
    if (isNaN(value)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
    if (value < 1 || value > 45) {
      throw new Error("[ERROR] 보너스 번호는 1에서 45사이의 숫자여야 합니다.");
    }
    if (this.winningNumber.includes(value)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }

  setWinningHistory() {
    for (let rank = 1; rank <= 5; rank++) {
      this.winningHistory[rank] = 0;
    }
  }

  getWinningHistory() {
    this.lottos.forEach((lotto) => {
      const matchCount = lotto.getMatchCount(this.winningNumber);

      switch (matchCount) {
        case 6:
          this.winningHistory[1] = this.winningHistory[1] + 1;
          break;
        case 5:
          const matchBonus = lotto.hasBonusNumber(this.bonusNumber);
          matchBonus ? this.winningHistory[2]++ : this.winningHistory[3]++;
          break;
        case 4:
          this.winningHistory[4]++;
          break;
        case 3:
          this.winningHistory[5]++;
          break;
      }
    });
  }
}

module.exports = App;
