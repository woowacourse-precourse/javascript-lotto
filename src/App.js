const { Console } = require("@woowacourse/mission-utils");
const {
  validateMoney,
  validateNumbersRange,
  validateDuplicateNumbers,
  validateOnlyNumber,
  validateWinningNumbersLength,
  validateRangeOfNumber,
} = require("./Exception");
const LottoMachine = require("./LottoMachine");
const { sortNumbers } = require("./utils");

class App {
  constructor() {
    this.lottoMachine = new LottoMachine();
  }

  play() {
    Console.readLine(
      "구입금액을 입력해 주세요.\n",
      function (money) {
        this.money = Number(money);
        validateMoney(this.money);
        this.lottos = this.lottoMachine.buyLottos(this.money);
        this.printLottos(this.lottos);
        this.getWinningNumbers();
      }.bind(this)
    );
  }

  printLottos() {
    Console.print(`\n${this.lottos.length}개를 구매했습니다.`);
    this.lottos.forEach(function (lotto) {
      lotto.printNumbers();
    });
  }

  printStatistics() {
    Console.print("\n당첨 통계");
    Console.print("---");
    const winningList = this.getWinningList();
    this.printWinningInfo(winningList);
    this.printProfit(winningList);
    Console.close();
  }

  printProfit(winningList) {
    const profit = this.getProfit(winningList);
    const profitRate = ((profit / this.money) * 100).toFixed(1);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  getProfit(winningList) {
    const prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];
    let profit = 0;
    winningList.forEach(function (winningCount, index) {
      profit += winningCount * prizeMoney[index];
    });
    return profit;
  }

  printWinningInfo(winningList) {
    Console.print(`3개 일치 (5,000원) - ${winningList[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${winningList[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningList[2]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningList[3]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${winningList[4]}개`);
  }

  getWinningList() {
    let winningList = [0, 0, 0, 0, 0];
    this.lottos.forEach(
      function (lotto) {
        const [winningCount, isBonus] = this.howManyWinnings(lotto);
        const rank = this.getRank(winningCount, isBonus);
        if (rank <= 5) winningList[5 - rank]++;
      }.bind(this)
    );
    return winningList;
  }

  getRank(winningCount, isBonus) {
    switch (winningCount) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        if (isBonus === false) return 3;
        return 2;
      case 6:
        return 1;
      default:
        break;
    }
    return 6;
  }

  howManyWinnings(lotto) {
    const winnings = this.winnigNumbers.filter(function (number) {
      return lotto.hasNumber(number);
    });
    return [winnings.length, lotto.hasNumber(this.bonusNumber)];
  }

  getWinningNumbers() {
    Console.readLine(
      "\n당첨 번호를 입력해 주세요.\n",
      function (numbers) {
        const winningNumbers = this.parseNumbers(numbers);
        this.validateWinningNumbers(winningNumbers);
        this.winnigNumbers = winningNumbers;
        this.getBonusNumber();
      }.bind(this)
    );
  }

  getBonusNumber() {
    Console.readLine(
      "\n보너스 번호를 입력해 주세요.\n",
      function (number) {
        this.validateBonusNumber(number);
        this.bonusNumber = number;
        this.printStatistics();
      }.bind(this)
    );
  }

  parseNumbers(numbers) {
    let winningNumbers = numbers.split(",");
    winningNumbers = winningNumbers.map(Number);
    winningNumbers = sortNumbers(winningNumbers);
    return winningNumbers;
  }

  validateWinningNumbers(winnigNumbers) {
    validateWinningNumbersLength(winnigNumbers);
    validateNumbersRange(winnigNumbers);
    validateDuplicateNumbers(winnigNumbers);
    validateOnlyNumber(winnigNumbers);
  }

  validateBonusNumber(number) {
    validateRangeOfNumber(number);
  }
}

module.exports = App;
