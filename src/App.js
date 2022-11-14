const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const Buyer = require("./Buyer");
const Lotto = require("./Lotto");
const STATIC = require("./static.json");
const PHRASES = STATIC.phrases;

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
    const lottoNumbers = this.#Buyer.countLotto();
    this.printLottoNumbers(lottoNumbers);

    const purchaseLottos = this.#Buyer.createLottos();
    this.printPurchaseLottos(purchaseLottos);
  }

  printLottoNumbers(lottoNumbers) {
    Console.print(`\n${lottoNumbers}개를 구매했습니다.`);
  }

  printPurchaseLottos(purchaseLottos) {
    purchaseLottos.forEach((purchaseLotto) => {
      const changePurchaseLotto = this.#Buyer.createOutputPurchaseLotto(JSON.stringify(purchaseLotto))
      Console.print(changePurchaseLotto);
    });
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
    for (let i = 5; i > 0; i--) {
      const statisticalOutput = PHRASES[i] + resultTable[i] + '개';
      Console.print(statisticalOutput);
    }

    this.yieldCalculation(resultTable.reward);
  }

  yieldCalculation(reward) {
    const investmentAmount = this.#Buyer.money;
    const YIELD = (reward / investmentAmount) * 100;
    const fixedYield = YIELD.toFixed(1);

    this.printYield(fixedYield);
  }

  printYield(fixedYield) {
    Console.print(`총 수익률은 ${fixedYield}%입니다.`);
    Console.close();
  }
}
const app = new App; app.play();
module.exports = App;
