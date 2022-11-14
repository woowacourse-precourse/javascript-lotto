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
  #winLotto;
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
    this.getWinLotto();
  }

  getWinLotto() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (winLotto) => {
      let tmp = winLotto.split(',');
      for(let i = 0; i < tmp.length; i++) {
        tmp[i] = Number(tmp[i]);
      }
      new Lotto(tmp);
      this.#winLotto = tmp;
      getBonusNumber();
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
    for(let i = 0; i < this.#userLotto.length; i++) {
      let numOfMatch = 0;
      for( let j = 0; j < this.#winLotto; j++) {
        if(this.#userLotto[i].includes(this.#winLotto[j])){
          numOfMatch++;
        }
      }
      this.lottoCmpResult[i].push(numOfMatch);
    }
    this.getLottoResult();
  }

  getLottoResult() {
    for(let i = 0; i < this.lottoCmpResult.length; i++) {
      if(this.lottoCmpResult[i] === 6) {
        this.lottoPrizeResult[firstPrize]++;
      }
      if(this.lottoCmpResult[i] === 5 && this.#userLotto[i].includes(this.#bonusNumber)) {
        this.lottoPrizeResult[secondPrize]++;
      }
      if(this.lottoCmpResult[i] === 5) {
        this.lottoPrizeResult[thirdPrize]++;
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

  printLottoMatchResult() {
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.lottoResult[fifthPlace]}`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.lottoResult[fourthPlace]}`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.lottoResult[thirdPlace]}`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.lottoResult[secondPlace]}`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.lottoResult[firstPlace]}`);
    this.getProfit();
  }
}

const app = new App();
app.play();

module.exports = App;
