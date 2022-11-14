const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const Buyer = require("../src/Buyer");
const Lotto = require("../src/Lotto");

class App {
  #Buyer;
  #Lotto;
  #bonus;

  play() {
    this.enterAmount();
  }

  enterAmount() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.#Buyer = new Buyer(money);
      this.showPurchaseLottos();

      this.enterLottoNumbers();
    });
  }

  showPurchaseLottos() {
    this.#Buyer.countLotto();
    this.#Buyer.createLottos();
  }

  enterLottoNumbers() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (numbers) => {
      const tempNumbers = this.splitCharacter(numbers);
      this.#Lotto = new Lotto(tempNumbers);

      this.enterBonus();
    });
  }

  splitCharacter(numbers) {
    return numbers.split(',').map(Number);
  }

  enterBonus() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonus) => {
      this.#Lotto.bonusCharacterCheck(bonus);
      this.#Lotto.bonusRangeCheck(bonus);
      this.#Lotto.bonusDuplicateCheck(bonus);
      this.#bonus = bonus;

      this.winningCalculation();
    });
  }

  winningCalculation() {
    const purchaseLottos = this.#Buyer.purchaseLottos
    const resultTable = this.#Lotto.winningCalculation(purchaseLottos, this.#bonus);

    this.showResultTable(resultTable);
  }

  showResultTable(resultTable) {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${resultTable.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${resultTable.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${resultTable.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultTable.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${resultTable.first}개`);

    this.showYield(resultTable.reward);
  }

  showYield(reward) {
    const investmentAmount = this.#Buyer.money;
    const YIELD = (reward / investmentAmount) * 100;

    Console.print(`총 수익률은 ${YIELD.toFixed(1)}%입니다.`);
    Console.close();
  }
}

module.exports = App;
