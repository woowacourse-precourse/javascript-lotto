const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.LottoCount = null;
    this.Lotto = [];
    this.winNum = [];
    this.bonusNum = null;
    this.score = { "3개": 0, "4개": 0, "5개": 0, bonus개: 0, "6개": 0 };
    this.prize = {
      "3개": 5000,
      "4개": 50000,
      "5개": 1500000,
      bonus개: 30000000,
      "6개": 2000000000,
    };
    this.totalMoney = null;
  }

  play() {
    this.getLottoCount();
    this.getWinNum();
    this.getBonusNum();
    this.compareWinToLotto();
    this.calculateScoreToMoney();
    this.printResult();
  }

  getLottoCount() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (answers) => {
      this.checkPrice(+answers);
      this.LottoCount = answers / 1000;
      this.buyLotto();
    });
  }

  checkPrice(answers) {
    if (typeof answers !== "number" || isNaN(answers))
      throw new TypeError("[ERROR] 숫자를 입력해주세요.");
    if (answers % 1000)
      throw new RangeError("[ERROR] 1,000 단위로만 입력가능합니다.");
  }

  buyLotto() {
    for (let i = 0; i < this.LottoCount; i++) {
      const lotto = new Lotto(6);
      this.Lotto = [...this.Lotto, lotto];
    }
    MissionUtils.Console.print(`${this.LottoCount}개를 구매했습니다.`);
    this.Lotto.forEach((lotto) =>
      MissionUtils.Console.print(`[${lotto.join(", ")}]`)
    );
  }

  getWinNum() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (answers) => {
      this.checkWinNum(answers);
      this.winNum = answers.split(",").map(Number);
    });
  }

  checkWinNum(answers) {
    const winNum = answers.split(",");
    if (winNum.length !== 6)
      throw new RangeError(
        "[ERROR] 숫자 6개를 쉽표(,)로 구분하여 입력해주세요."
      );
    if (winNum.every((num) => typeof num === "number" || num < 1 || num > 45))
      throw new TypeError(
        "[ERROR] 1 ~ 45 사이의 숫자 6개를 쉽표(,)로 구분하여 입력해주세요."
      );
    if (winNum.length !== new Set(winNum).size)
      throw new Error("[ERROR] 당첨번호는 서로 중복되지 않아야 합니다.");
  }

  getBonusNum() {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (answers) => {
      this.checkBonusNum(+answers);
      this.bonusNum = +answers;
    });
  }

  checkBonusNum(answers) {
    if (typeof answers !== "number" || isNaN(answers))
      throw new TypeError("[ERROR] 보너스 번호는 숫자를 입력해주세요.");
    if (answers < 1 || answers > 45)
      throw new RangeError(
        "[ERROR] 보너스 번호는 1~45 사이의 숫자를 입력하세요"
      );
    if (this.winNum.includes(answers))
      throw new Error("[ERROR] 당첨번호와 중복된 숫자는 입력할 수 없습니다.");
  }

  compareWinToLotto() {
    this.Lotto.forEach((lotto) => this.checkWinLotto(lotto));
  }

  checkWinLotto(lotto) {
    let count = 0;
    const winNumWithBonus = [...this.winNum, this.bonusNum];
    winNumWithBonus.forEach(
      (winNum) => (count = lotto.includes(winNum) ? count + 1 : count)
    );
    if (count < 3) return;
    if (count === 6) count = lotto.includes(this.bonusNum) ? "bonus" : count;

    this.score[`${count}개`] += 1;
  }

  calculateScoreToMoney() {
    for (let keys in this.score) {
      this.totalMoney += this.prize[keys] * this.score[keys];
    }
  }

  calculateProfit() {
    return ((this.totalMoney / (this.LottoCount * 1000)) * 100).toFixed(1);
  }

  printResult() {
    const keys = Object.keys(this.score);
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    for (let rank in this.score) {
      MissionUtils.Console.print(
        `${rank === "bonus개" ? "5개" : rank} 일치${
          rank === "bonus개" ? ", 보너스 볼 일치" : ""
        } (${this.prize[rank].toLocaleString()}원) - ${this.score[rank]}개`
      );
    }
    MissionUtils.Console.print(`총 수익률은 ${this.calculateProfit()}%입니다.`);
    MissionUtils.Console.close();
  }
}

module.exports = App;
