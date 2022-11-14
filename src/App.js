const { Console } = require("@woowacourse/mission-utils");

const View = require("./View");
const Purchase = require("./Purchase");
const Lotto = require("./Lotto");
const Statistics = require("./Statistics");

class App {
  #view;
  #purchased;
  #lotto;

  constructor() {
    this.#view = new View();
  }
  play() {
    this.buy();
  }

  buy() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.#purchased = new Purchase(Number(money));
      const count = this.#purchased.getLottoCount();
      const lottos = this.#purchased.autoIssue(count);
      this.#view.printPurchased(count, lottos);
      this.enterLotto();
    });
  }

  enterLotto() {
    Console.readLine("당첨 번호를 입력해주세요.\n", (lottos) => {
      this.#lotto = new Lotto(lottos.split(",").map((num) => Number(num)));
      this.enterBonusNum();
    });
  }

  enterBonusNum() {
    Console.readLine("보너스 번호를 입력해주세요.\n", (bonusNum) => {
      this.#lotto.setBonusNum(Number(bonusNum));
      this.getResult();
      this.end();
    });
  }

  getResult() {
    const statistics = new Statistics();
    const userNums = this.#purchased.getPurchasedNum();
    const lottoNum = this.#lotto.getLottoNum();
    const bonusNum = lottoNum.pop();
    statistics.setRankList(userNums, lottoNum, bonusNum);
    const rankList = statistics.getRank();
    const rateOfReturn = statistics.getRateOfReturn(this.#purchased.getMoney());
    this.#view.printStatistics(rankList, rateOfReturn);
  }

  end() {
    Console.close();
  }
}

// const app = new App();
// app.play();
module.exports = App;
