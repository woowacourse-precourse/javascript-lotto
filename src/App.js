const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const ENTER_PRICE = "구입 금액을 입력해주세요";
const ERROR_MARK = "[ERROR]";
const STATISTICS_MARK = "당첨 통계";
const WINNING_REWARDS = [2000000000, 30000000, 1500000, 50000, 5000];
const WINNING_RANK = [
  "6개 일치",
  "5개 일치, 보너스 볼 일치",
  "5개 일치",
  "4개 일치",
  "3개 일치",
];

class App {
  lottoCnt;
  lottoArray;
  winningNum;
  bonusNum;
  rank;

  play() {
    let price = this.enterPrice();
    this.issueTotalLotto(price);
    this.printLottoAll();
    this.enterNumbers();
    this.calculateTotalRank();
    this.printWinningStatics();
    Console.close();
  }

  enterPrice() {
    let price = 0;
    Console.readLine(ENTER_PRICE, (answer) => {
      if (this.isRightPrice(answer)) price = answer;
    });
    return price;
  }

  isRightPrice(price) {
    if (price % 1000 != 0) {
      throw new Error(ERROR_MARK + "로또 가격의 단위는 1000이어야 합니다.");
    } else if (isNaN(price)) {
      throw new Error(ERROR_MARK + "로또 가격은 숫자로 이루어져야 합니다.");
    } else {
      return true;
    }
  }

  issueTotalLotto(price) {
    this.lottoCnt = price / 1000;
    let lottoArray = [];

    for (let i = 0; i < this.lottoCnt; i++) {
      lottoArray.push(this.issueEachLotto());
    }

    this.lottoArray = lottoArray;
  }

  issueEachLotto() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  printLottoAll() {
    this.printLottoNumber();
    this.printLotto();
  }

  printLottoNumber() {
    Console.print(`${this.lottoCnt}개를 구매했습니다.`);
  }

  printLotto() {
    for (let i = 0; i < this.lottoArray.length; i++) {
      Console.print(`[${this.lottoArray[i].join(", ")}]`);
    }
  }

  enterNumbers() {
    this.enterWinningNum();
    this.enterBonusNum();
  }

  enterWinningNum() {
    Console.readLine("당첨 번호를 입력해주세요.", (answer) => {
      this.winningNum = answer.split(",").map((item) => Number(item));
      this.checkDuplication(this.winningNum);
    });
  }

  checkDuplication(numbers) {
    let set = new Set(numbers);
    if (numbers.length != [...set].length)
      throw "[ERROR] 중복된 숫자가 있습니다.";
  }

  enterBonusNum() {
    Console.readLine("보너스 번호를 입력해주세요.", (answer) => {
      this.bonusNum = answer;
    });
  }

  calculateTotalRank() {
    let rank = new Array(5);
    rank.fill(0);

    for (let i = 0; i < this.lottoArray.length; i++) {
      rank[this.calculateEachRank(i) - 1] += 1;
    }

    this.rank = rank;
  }

  calculateEachRank(i) {
    let lotto = new Lotto(this.lottoArray[i]);

    return lotto.isWinning(this.winningNum, this.bonusNum);
  }

  calculateProfit() {
    let percent = (this.calculateWinnings() / (this.lottoCnt * 1000)) * 100;
    return percent.toFixed(1);
  }

  calculateWinnings() {
    return this.rank
      .map((item, idx) => item * WINNING_REWARDS[idx])
      .reduce((a, b) => a + b);
  }

  printWinningStatics() {
    const profit = this.calculateProfit();

    Console.print(STATISTICS_MARK);
    Console.print("---");
    this.printWinningResult();
    this.printProfit(profit);
  }

  printWinningResult() {
    let resultStr;
    let cnt = WINNING_RANK.length;

    for (let i = 1; i <= cnt; i++) {
      Console.print(this.resultStr(cnt - i));
    }
  }

  resultStr(i) {
    return `${WINNING_RANK[i]} (${this.priceToString(WINNING_REWARDS[i])}) - ${
      this.rank[i]
    }개`;
  }

  priceToString(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
  }

  printProfit(profit) {
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }
}

module.exports = App;
