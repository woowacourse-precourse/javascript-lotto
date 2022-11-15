const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;

const VendingMachine = require("./lotto/domain/VendingMachine");
const NumberGenerator = require("./lotto/domain/NumberGenerator");
const Lotto = require("./Lotto");
const LottoChecker = require("./lotto/domain/LottoChecker");

class App {
  constructor() {
    this.vendingMachine = new VendingMachine();
    this.numberGenerator = new NumberGenerator();
    this.lottoChecker = new LottoChecker();
  }
  play() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.vendingMachine.setMoney(money);

      return this.printLotto(money);
    });
  }

  printLotto(money) {
    Console.print(`\n${money / 1000}개를 구매했습니다.`);

    let totalLotto = [];

    for (let changeMoney = money; changeMoney >= 1000; changeMoney -= 1000) {
      const purchasedLotto = this.numberGenerator.createRandomNumbers();
      const strPurchasedLotto = "[" + purchasedLotto.join(", ") + "]";

      totalLotto.push(purchasedLotto);
      Console.print(strPurchasedLotto);
    }

    return this.inputLottoNumber(totalLotto);
  }

  inputLottoNumber(totalLotto) {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (winningNumber) => {
      const winningNumbers = winningNumber.split(",").map(Number);
      const winningLotto = new Lotto(winningNumbers);
      const winningLottoNumbers = winningLotto.getNumbers();

      return this.inputBonusNumber(totalLotto, winningLottoNumbers);
    });
  }

  inputBonusNumber(totalLotto, winningLotto) {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (bonus) => {
      bonus = Number(bonus);

      return this.printLottoResult(totalLotto, winningLotto, bonus);
    });
  }

  printLottoResult(totalLotto, winningLotto, bonus) {
    const lottoResult = this.lottoChecker.compareLotto(
      totalLotto,
      winningLotto,
      bonus
    );

    const money = this.vendingMachine.money;
    const lottoProfitRate = this.lottoChecker.CalculateProfit(
      lottoResult,
      money
    );

    Console.print(lottoResult);
    Console.print(money);
    Console.print(lottoProfitRate);
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${lottoResult[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${lottoResult[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${lottoResult[3]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult[2]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${lottoResult[4]}개`);
    Console.print(`총 수익률은 ${lottoProfitRate}%입니다.`);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
