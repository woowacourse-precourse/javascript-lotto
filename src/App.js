const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

const PRIZE = {
  1: { match: 6, money: 2000000000 },
  2: { match: 5, money: 30000000 },
  3: { match: 5, money: 1500000 },
  4: { match: 4, money: 50000 },
  5: { match: 3, money: 5000 },
};

class App {
  constructor() {
    this.money = 0;
    this.lottoCount = 0;
    this.lottos = [];
    this.jackpotNum = null;
    this.bonusNumber = null;
    this.jackpotHistory = {};
  }

  play() {
    Console.readLine("구매금액을 입력해 주세요.\n", (answer) => {
      this.validateMoney(answer);
      this.money = parseInt(answer);
      this.getLottoCount();
      this.getLottoNumbers();
      this.setjackpotNum();
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
    Console.print(`\n${this.lottoCount}개를 구매했습니다.`);
    this.lottos.forEach((lotto) => {
      Console.print(`[${lotto.getLotto().join(", ")}]`);
    });
  }

  setjackpotNum() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (answer) => {
      const numbers = answer.split(",");
      this.jackpotNum = new Lotto(numbers).getLotto().map(Number);
      this.setBonusNumber();
    });
  }

  setBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (answer) => {
      const value = parseInt(answer);

      this.validateBonusNumber(value);
      this.bonusNumber = value;

      this.getjackpotHistory();
      this.getEarningsRate();
    });
  }

  validateBonusNumber(value) {
    if (isNaN(value)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
    if (value < 1 || value > 45) {
      throw new Error("[ERROR] 보너스 번호는 1에서 45사이의 숫자여야 합니다.");
    }
    if (this.jackpotNum.includes(value)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }

  setjackpotHistory() {
    for (let rank = 1; rank <= 5; rank++) {
      this.jackpotHistory[rank] = 0;
    }
  }

  getjackpotHistory() {
    this.setjackpotHistory();

    this.lottos.forEach((lotto) => {
      const matchCount = lotto.getMatchCount(this.jackpotNum);

      switch (matchCount) {
        case 3:
          this.jackpotHistory[5]++;
          break;
        case 4:
          this.jackpotHistory[4]++;
          break;
        case 5:
          const matchBonus = lotto.hasBonusNumber(this.bonusNumber);
          matchBonus ? this.jackpotHistory[2]++ : this.jackpotHistory[3]++;
          break;
        case 6:
          this.jackpotHistory[1] = this.jackpotHistory[1] + 1;
          break;
      }
    });

    this.printjackpotHistory();
  }

  printjackpotHistory() {
    const RANK = [5, 4, 3, 2, 1];

    Console.print("\n당첨 통계\n---");
    RANK.forEach((rank) => {
      Console.print(
        `${PRIZE[rank].match}개 일치${rank === 2 ? ", 보너스 볼 일치" : ""
        } (${PRIZE[rank].money.toLocaleString()}원) - ${this.jackpotHistory[rank]
        }개`
      );
    });
  }

  getEarningsRate() {
    let earnings = 0;
    for (let rank in this.jackpotHistory) {
      earnings += this.jackpotHistory[rank] * PRIZE[rank].money;
    }

    const earningsRate = (earnings / this.money) * 100;
    this.printEarningsRate(earningsRate);
  }

  printEarningsRate(earningsRate) {
    Console.print(`총 수익률은 ${earningsRate}%입니다.`);
    this.gameOver();
  }

  gameOver() {
    Console.close();
  }
}

module.exports = App;
