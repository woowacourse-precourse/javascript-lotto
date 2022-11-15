const { Random, Console } = require("@woowacourse/mission-utils");
const { validateMoney } = require("./Money");
const { validateBonusNumber } = require("./BonusNumber");
const Lotto = require("./Lotto");

const lottoPrizePrice = [5000, 50000, 1500000, 30000000, 2000000000];
const firstPrize = 4, secondPrize = 3, thirdPrize = 2, fourthPrize = 1, fifthPrize = 0;

class App {
  #money;
  #numOfLotto;
  #userLotto;
  #bonusNumber;
  #totalProfitMoney;
  #percent;

  constructor() {
    this.#userLotto = [];
    this.#winLotto = [];
    this.lottoPrizeResult = [0, 0, 0, 0, 0];
    this.lottoCmpResult = [];
  }

  play() {
    this.getMoney();
  }

  getMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      validateMoney(money);
      this.#money = money;
      this.getNumOfLotto();
    });
  }
  
  getNumOfLotto() {
    this.#numOfLotto = this.#money / 1000;
    this.buyLotto();
  }

  buyLotto() {
    for(let i = 0; i < this.#numOfLotto; i++) {
      let tmp = Random.pickUniqueNumbersInRange(1, 45, 6);
      tmp = tmp.sort((a,b) => a - b);
      this.#userLotto.push(tmp);
    }
    this.printBuyLotto();
  }

  printBuyLotto() {
    Console.print(`\n${this.#numOfLotto}개를 구매했습니다.`);
    this.#userLotto.forEach((lotto) => Console.print(`[${lotto.join(", ")}]`));
    this.inputWinLotto();
  }

  inputWinLotto() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (winLotto) => {
      let tmp = winLotto.split(',');
      for(let i = 0; i < tmp.length; i++) {
        tmp[i] = Number(tmp[i]);
      }
      new Lotto(tmp);
      this.#winLotto = tmp;
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      validateBonusNumber(bonusNumber, this.#winLotto);
      this.#bonusNumber = bonusNumber;
      this.compareLottoResult();
    });
  }

  compareLottoResult() {
    for(let i = 0; i < this.#numOfLotto; i++) {
      let numOfMatch = 0;
      numOfMatch = this.compareLotto(numOfMatch, i);
      this.lottoCmpResult.push(numOfMatch);
    }
    this.getLottoResult();
  }

  compareLotto(numOfMatch, i) {
    for(let j = 0; j < this.#winLotto.length; j++) {
      if(this.#userLotto[i].includes(this.#winLotto[j])){
        numOfMatch++;
      }
    }
    return numOfMatch;
  }

  getLottoResult() {
    for(let i = 0; i < this.lottoCmpResult.length; i++) {
      Console.print(`userLotto[${i}] is ${this.#userLotto[i]}`);
      if(this.lottoCmpResult[i] === 6) {
        this.lottoPrizeResult[firstPrize]++;
      }
      if(this.lottoCmpResult[i] === 5) {
        this.isSecond(i);
      }
      if(this.lottoCmpResult[i] === 4) {
        this.lottoPrizeResult[fourthPrize]++;
      }
      if(this.lottoCmpResult[i] === 3) {
        this.lottoPrizeResult[fifthPrize]++;
      }
    }
    this.printLottoMatchResult();
  }

  isSecond(i) {
    console.log(this.#userLotto[i]);
    console.log(this.#bonusNumber);
    if((this.#userLotto[i]).includes(Number(this.#bonusNumber))) {
      this.lottoPrizeResult[secondPrize]++;
      return;
    }
    this.lottoPrizeResult[thirdPrize]++;
  }

  printLottoMatchResult() {
    Console.print("\n당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${this.lottoPrizeResult[fifthPrize]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.lottoPrizeResult[fourthPrize]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.lottoPrizeResult[thirdPrize]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.lottoPrizeResult[secondPrize]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.lottoPrizeResult[firstPrize]}개`);
    this.getProfit();
  }

  getProfit() {
    let sum = 0;
    for(let i = 0; i < this.lottoPrizeResult.length; i++) {
      sum += (lottoPrizePrice[i] * this.lottoPrizeResult[i]);
    }
    this.#totalProfitMoney = sum;
    this.#percent = Math.round(((this.#totalProfitMoney / this.#money) * 100) * 100) / 100;
    this.printPercentage();
  }

  printPercentage() {
    Console.print(`총 수익률은 ${this.#percent}%입니다.`);
    this.endLotto();
  }

  endLotto() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
