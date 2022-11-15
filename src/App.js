const MissionUtils = require("@woowacourse/mission-utils");
const Calculator = require("./Calculator");
const Comparator = require("./Comparator");
const Lotto = require("./Lotto");
const NumberGenerator = require("./NumberGenerator");

class App {
  play() {
    MissionUtils.Console.print("구입금액을 입력해 주세요.");

    const calculator = new Calculator();
    const purchaseAmount = this.receivePurchaseAmount();
    const amountOfLotto = calculator.calculateAmountOfLotto(purchaseAmount);
    MissionUtils.Console.print(`${amountOfLotto}개를 구매했습니다.`);

    const numberGenerator = new NumberGenerator();
    const listOfNumbers = new Array();
    for (let i = 0; i < amountOfLotto; i++) {
      let numbersOfLotto = numberGenerator.createNumbersOfLotto(amountOfLotto);
      const lotto = new Lotto(numbersOfLotto);
      lotto.validate(numbersOfLotto);
      MissionUtils.Console.print(`[${numbersOfLotto.join(", ")}]`);
      listOfNumbers.push(numbersOfLotto);
    }

    MissionUtils.Console.print("당첨 번호를 입력해 주세요.");
    const winningNumbers = this.receiveWinningNumbers();

    MissionUtils.Console.print("보너스 번호를 입력해 주세요.");
    const bonusNumber = this.receiveBonusNumber();

    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    this.printWinningList(listOfNumbers, winningNumbers, bonusNumber);

    const comparator = new Comparator();
    const prizeMoney = comparator.compare(
      listOfNumbers,
      winningNumbers,
      bonusNumber
    ).prizeMoney;
    const rateOfReturn = calculator.calculateRateOfReturn(
      purchaseAmount,
      prizeMoney
    );
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }

  receivePurchaseAmount() {
    let purchaseAmount = 0;
    MissionUtils.Console.readLine("로또 구입 금액", (answer) => {
      console.log(answer);
      purchaseAmount = answer;
    });
    this.checkPurchaseAmount(purchaseAmount);
    return purchaseAmount;
  }

  checkPurchaseAmount(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0) {
      console.log("[ERROR]");
      throw new Error("[ERROR]");
    }
  }

  receiveWinningNumbers() {
    let winningNumbers;
    MissionUtils.Console.readLine("당첨 번호", (answer) => {
      console.log(answer);
      winningNumbers = answer;
    });
    return winningNumbers;
  }

  receiveBonusNumber() {
    let bonusNumber;
    MissionUtils.Console.readLine("보너스 번호", (answer) => {
      console.log(answer);
      bonusNumber = answer;
    });
    return bonusNumber;
  }

  printWinningList(listOfNumbers, winningNumbers, bonusNumber) {
    const comparator = new Comparator();
    const winningList = comparator.compare(
      listOfNumbers,
      winningNumbers,
      bonusNumber
    ).winningList;
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${winningList.three}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${winningList.four}개`);
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${winningList.five}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningList.fivePlusBonus}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${winningList.six}개`
    );
  }
}

module.exports = App;
