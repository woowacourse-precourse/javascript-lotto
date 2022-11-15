const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGES, WIN_CONDITIONS, RESULT_MESSAGE } = require("./lib/constant");
const { ERROR } = require("./lib/error");
const Lotto = require("./Lotto");

class App {
  play() {
    this.getAmountPaid((amount) => {
      let lottoCount = amount / 1000;
      let lottos = this.issueLottos(lottoCount);
      this.printLottos(lottos, lottoCount);
      this.getWinningNumbers((winningNums) => {
        this.getBonusNumbers((bonusNumber) => {
          this.countWinLottos(lottos, winningNums, bonusNumber);
          this.printResult();
          this.printRevenue(lottoCount);
          this.appClose();
        }, winningNums);
      });
    });
  }

  getAmountPaid(callback) {
    Console.readLine(MESSAGES.TAKE_MONEY, (input) => {
      ERROR.CHECK_PAIDAMOUNT(input);
      callback(input);
    });
  }

  issueLottos(count) {
    let lottos = [];
    for (let i = 0; i < count; i++) {
      let randomNums = Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNums = randomNums.sort((a, b) => a - b);
      let lotto = new Lotto(randomNums);
      lottos.push(lotto);
    }
    return lottos;
  }

  getWinningNumbers(callback) {
    Console.readLine(MESSAGES.TAKE_WINNING_NUMBERS, (input) => {
      ERROR.CHECK_WINNUMS(input);
      let winnigNumbers = input.split(",").map((x) => Number(x));
      callback(winnigNumbers);
    });
  }

  getBonusNumbers(callback, winningNumbers) {
    Console.readLine(MESSAGES.TAKE_BONUS_NUMBERS, (input) => {
      ERROR.CHECK_BONUS(input, winningNumbers);
      callback(Number(input));
    });
  }

  countWinLottos(lottos, winnigNumbers, bonusNumber) {
    lottos.forEach((lotto) => {
      let winNumbers = lotto.countWinNumbers(winnigNumbers, bonusNumber);
      this.findConditions(winNumbers);
    });
  }

  getRevenue() {
    let revenue = 0;
    WIN_CONDITIONS.forEach((condition) => {
      revenue += condition.winPrice * condition.count;
    });

    return revenue;
  }

  findConditions(winNumbers) {
    WIN_CONDITIONS.forEach((condition) => {
      if (condition.winCount == winNumbers.winCount && !condition.checkBonus) {
        condition.count += 1;
      }
      if (
        condition.winCount == winNumbers.winCount &&
        condition.checkBonus &&
        condition.isBonus == winNumbers.isBonus
      ) {
        condition.count += 1;
      }
    });
  }

  printLottos(lottos, count) {
    Console.print(RESULT_MESSAGE.COUNT_MESSAGE(count));
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  printResult() {
    Console.print(MESSAGES.RESULT_TITLE);
    Console.print(MESSAGES.RESULT_LINE);
    WIN_CONDITIONS.forEach((condition) => {
      Console.print(
        RESULT_MESSAGE.WIN_MESSAGES(
          condition.winCount,
          condition.winPrice,
          condition.count,
          condition.isBonus
        )
      );
    });
  }

  printRevenue(lottoCount) {
    let revenue = this.getRevenue();
    let revenueRate = (revenue / (lottoCount * 1000)) * 100;
    Console.print(RESULT_MESSAGE.REVENUE_MESSAGE(revenueRate));
  }
  appClose() {
    Console.close();
  }
}

module.exports = App;
