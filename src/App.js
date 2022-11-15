const { Console, Random } = require("@woowacourse/mission-utils");
const InputMoney = require("./InputMoney");
const Lotto = require("./Lotto");
const Bonus = require("./Bonus");
const Compare = require("./Compare");

class App {
  constructor() {
    this.money = 0;
    this.lottoQuantity = 0;
    this.lottoLists = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.benefitResult = 0;
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.money = new InputMoney(money);
      this.money = money;
      this.printLottoQuantity(money);
    });
  }

  printLottoQuantity(money) {
    this.lottoQuantity = money / 1000;
    Console.print(`${this.lottoQuantity}개를 구매했습니다.`);
    this.printLotto(this.lottoQuantity);
  }

  printLotto(lottoQuantity) {
    for (let num = 0; num < lottoQuantity; num++) {
      const MINIMUN_NUMBER = 1;
      const MAXIMUN_NUMBER = 45;
      const NUMBER_LENGTH = 6;
      const randomNumbers = Random.pickUniqueNumbersInRange(
        MINIMUN_NUMBER,
        MAXIMUN_NUMBER,
        NUMBER_LENGTH
      );
      const lottoNumbers = [...randomNumbers].sort((a, b) => a - b);
      this.lottoLists.push(lottoNumbers);
      Console.print(JSON.stringify(lottoNumbers).replace(/,/g, ", "));
    }
    this.inputWinningNumbers();
  }

  inputWinningNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (numbers) => {
      this.winningNumbers = numbers.split(",").map(function (item) {
        return parseInt(item, 10);
      });
      const lotto = new Lotto(this.winningNumbers);

      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      const bonus = new Bonus(bonusNumber, this.winningNumbers);
      this.bonusNumber = parseInt(bonusNumber, 10);
      this.compareLotto();
    });
  }

  compareLotto() {
    const compare = new Compare(
      this.lottoLists,
      this.winningNumbers,
      this.bonusNumber
    );

    this.result(compare);
  }

  result(compare) {
    Console.print("당첨 통계\n---");

    Object.values(compare.compareResult).forEach((result, index) => {
      Console.print(
        `${compare.resultMessage[index]} (${compare.resultReward[index].toLocaleString()}원) - ${result}개`
      );
      this.benefitResult += compare.resultReward[index] * result;
    });
    this.calculateRate();
  }

  calculateRate() {
    const totalBenefit = (this.benefitResult / this.money) * 100;
    const benefitRate = Math.round(totalBenefit * 10) / 10;
    Console.print(`총 수익률은 ${benefitRate}%입니다.`);
    Console.close();
  }
}

module.exports = App;
