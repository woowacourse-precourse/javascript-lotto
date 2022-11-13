const Lotto = require("../src/Lotto");
const { Random, Console } = require("@woowacourse/mission-utils");

const FIRST_REWARD = 2000000000;
const SECOND_REWARD = 30000000;
const TRHID_REWARD = 1500000;
const FOURTH_REWARD = 50000;
const FIFTH_REWARD = 5000;

class App {
  constructor() {
    this.cost = 0;
    this.lottoList = [];
    this.winningLotto = [];
    this.bonusLotto = 0;
    this.winningRank = { First: 0, Second: 0, Third: 0, Fourth: 0, Fifth: 0 };
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine("구입금액을 입력해주세요.\n", (cost) => {
      if (cost % 1000 !== 0) {
        throw new Error("[ERROR] 1,000원 단위 금액을 입력해주세요.");
      }
      this.cost = parseInt(cost);
      this.countLotto(cost);
    });
  }

  countLotto(input) {
    const cntLotto = input / 1000;
    Console.print(`\n${cntLotto}개를 구매했습니다.`);
    this.printLotto(cntLotto);
  }

  printLotto(cntLotto) {
    for (let i = 0; i < cntLotto; i++) {
      this.lottoList.push(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
      Console.print(`[${this.lottoList[i][0]}, ${this.lottoList[i][1]}, ${this.lottoList[i][2]}, ${this.lottoList[i][3]}, ${this.lottoList[i][4]}, ${this.lottoList[i][5]}]`);
    }
    this.inputLotto();
  }

  inputLotto() {
    Console.readLine("\n당첨 번호를 입력해주세요.\n", (input) => {
      this.winningLotto = input.split(",").map(Number);
      new Lotto(this.winningLotto);
      this.inputBonus();
    });
  }

  inputBonus() {
    Console.readLine("\n보너스 번호를 입력해주세요.\n", (input) => {
      this.bonusLotto = parseInt(input);
      this.validBonus(this.bonusLotto);
    });
  }

  validBonus(bonusLotto) {
    if (bonusLotto < 1 && bonusLotto > 45) {
      throw new Error("로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (this.winningLotto.includes(bonusLotto)) {
      throw new Error("당첨 번호와 중복되지 않은 숫자여야 합니다.");
    }
    for (let i of this.lottoList) {
      this.checkLotto(this.winningLotto, i);
    }
    this.printResult(this.winningRank);
  }

  checkLotto(winningLotto, myLotto) {
    let count = 0;
    for (let i of winningLotto) {
      if (myLotto.includes(i)) {
        count++;
      }
    }
    this.checkRank(count, this.bonusLotto, myLotto);
  }

  checkRank(count, bonusLotto, myLotto) {
    switch (count) {
      case 3:
        this.winningRank.Fifth++;
        break;
      case 4:
        this.winningRank.Fourth++;
        break;
      case 5:
        myLotto.includes(bonusLotto) ? this.winningRank.Second++ : this.winningRank.Third++;
        break;
      case 6:
        this.winningRank.First++;
        break;
    }
  }

  printResult(winningRank) {
    Console.print("\n당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${winningRank.Fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${winningRank.Fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningRank.Third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningRank.Second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${winningRank.First}개`);
    this.rateOfReturn(winningRank, this.cost);
  }

  rateOfReturn(winningRank, cost) {
    let reward = FIRST_REWARD * winningRank.First + SECOND_REWARD * winningRank.Second + TRHID_REWARD * winningRank.Third + FOURTH_REWARD * winningRank.Fourth + FIFTH_REWARD * winningRank.Fifth;
    Console.print(`총 수익률은 ${((reward / cost) * 100).toFixed(1)}%입니다.`);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
