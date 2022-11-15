const { Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers; // 로또 당첨번호

  constructor(numbers, userLottos) {
    let winningNumbers = numbers.split(",");
    this.validateLength(winningNumbers);
    this.validateRange(winningNumbers);
    this.#numbers = winningNumbers.map((num) => Number(num));

    this.inputBonusNumber(userLottos);
  }

  inputBonusNumber(userLottos) {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (input) => {
      this.validateRange(Number(input));
      const bonusNumber = input;

      const winStats = this.lotteryResult(userLottos, bonusNumber);
      const rateOfprofit = this.getRateOfProfit(
        winStats.get("profit"),
        userLottos.length * 1000
      );
      this.printWinStats(winStats, rateOfprofit);
      Console.close();
    });
  }

  validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  validateRange(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 1 || numbers[i] > 45) {
        throw new Error("[ERROR] 로또 번호는 1~45 사이만 가능합니다.");
      }
    }
  }

  lotteryResult(userLottos, bonusNumber) {
    const result = new Map();
    for (let i = 1; i < 6; i++) {
      result.set(i, 0);
    }
    userLottos.map((lotto) => {
      let rank = this.getRank(lotto, bonusNumber);
      let money = this.getMoneyOfRank(rank);
      result.set(rank, result.has(rank) ? result.get(rank) + 1 : 1);
      result.set(
        "profit",
        result.has("profit") ? result.get("profit") + money : money
      );
    });

    return result;
  }

  getRateOfProfit(profit, userAmount) {
    return ((profit / userAmount) * 100).toFixed(1);
  }

  getMoneyOfRank(rank) {
    let money = 0;
    switch (rank) {
      case 5:
        money = 5000;
        break;
      case 4:
        money = 50000;
        break;
      case 3:
        money = 1500000;
        break;
      case 2:
        money = 30000000;
        break;
      case 1:
        money = 2000000000;
        break;
      default:
        money = 0;
    }
    return money;
  }

  getRank(lotto, bonusNumber) {
    let matchCount = 0;
    let rank;
    lotto.map((number) => {
      if (this.#numbers.includes(number)) {
        matchCount++;
      }
    });
    switch (matchCount) {
      case 3:
        rank = 5;
        break;
      case 4:
        rank = 4;
        break;
      case 5:
        rank = lotto.includes(bonusNumber) ? 2 : 3;
        break;
      case 6:
        rank = 1;
        break;
      default:
        rank = 0;
    }
    return rank;
  }

  printWinStats(winStats, rateOfprofit) {
    Console.print("\n당첨 통계\n---");
    for (let rank = 5; rank >= 1; rank--) {
      this.printRank(rank, winStats.get(rank));
    }
    Console.print(`총 수익률은 ${rateOfprofit}%입니다.`);
  }

  printRank(rank, count) {
    switch (rank) {
      case 5:
        Console.print(`3개 일치 (5,000원) - ${count}개`);
        break;
      case 4:
        Console.print(`4개 일치 (50,000원) - ${count}개`);
        break;
      case 3:
        Console.print(`5개 일치 (1,500,000원) - ${count}개`);
        break;
      case 2:
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`);
        break;
      case 1:
        Console.print(`6개 일치 (2,000,000,000원) - ${count}개`);
        break;
    }
  }
}

module.exports = Lotto;
