const { Console } = require("@woowacourse/mission-utils");

const LOTTO_PRICE = 1000;
const LOTTERY_RANK_LENGTH = 5;
const RATE_PROFIT_FIXED = 1;
const FIFTH_PRIZE = 5000;
const FOURTH_PRIZE = 50000;
const THIRD_PRIZE = 1500000;
const SECOND_PRIZE = 30000000;
const FIRST_PRIZE = 2000000000;
const LOTTO_NUM_START = 1;
const LOTTO_NUM_LAST = 45;
const LOTTO_NUM_LENGTH = 6;

class Lotto {
  #numbers; // 로또 당첨번호

  constructor(numbers, userLottos) {
    this.validateLength(numbers);
    this.validateRange(numbers);
    this.validateDuplicate(numbers);
    this.#numbers = numbers.map((num) => Number(num));

    this.inputBonusNumber(userLottos);
  }

  inputBonusNumber(userLottos) {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (input) => {
      this.validateRange(Number(input));
      const bonusNumber = input;

      const winStats = this.lotteryResult(userLottos, bonusNumber);
      const rateOfprofit = this.getRateOfProfit(
        winStats.get("profit"),
        userLottos.length * LOTTO_PRICE
      );
      this.printWinStats(winStats, rateOfprofit);
      Console.close();
    });
  }

  validateLength(numbers) {
    if (numbers.length !== LOTTO_NUM_LENGTH) {
      throw new Error(`[ERROR] 로또 번호는 ${LOTTO_NUM_LENGTH}개여야 합니다.`);
    }
  }
  validateRange(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < LOTTO_NUM_START || numbers[i] > LOTTO_NUM_LAST) {
        throw new Error(
          `[ERROR] 로또 번호는 ${LOTTO_NUM_START}~${LOTTO_NUM_LAST} 사이만 가능합니다.`
        );
      }
    }
  }
  validateDuplicate(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.");
    }
  }

  lotteryResult(userLottos, bonusNumber) {
    const result = new Map();
    for (let i = 1; i <= LOTTERY_RANK_LENGTH; i++) {
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
    return ((profit / userAmount) * 100).toFixed(RATE_PROFIT_FIXED);
  }

  getMoneyOfRank(rank) {
    let money = 0;
    switch (rank) {
      case 5:
        money = FIFTH_PRIZE;
        break;
      case 4:
        money = FOURTH_PRIZE;
        break;
      case 3:
        money = THIRD_PRIZE;
        break;
      case 2:
        money = SECOND_PRIZE;
        break;
      case 1:
        money = FIRST_PRIZE;
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
