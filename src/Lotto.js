const { Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;
  #bonus;
  #purchasedAmount;
  #purchasedNumbers;

  constructor(numbers, purchasedAmount, purchasedNumbers = [], bonus) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.#purchasedAmount = purchasedAmount;
    this.#purchasedNumbers = purchasedNumbers;
    this.#bonus = bonus;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR]");
    }
  }

  alertHowManyBought(count) {
    Console.print(`${count}개를 구매했습니다.`);
  }

  alertNumberOfPurchases(pickedNumbers) {
    Console.print(pickedNumbers.join("\n"));
  }

  alertPurchaseResult(count, pickedNumbers) {
    this.alertHowManyBought(count);
    this.alertNumberOfPurchases(pickedNumbers);
  }

  getMatchedCount(userNumbers) {
    const match = [];

    this.#numbers.forEach((number) => {
      const existNumber = userNumbers.find(
        (pickedNumber) => pickedNumber === number
      );
      if (existNumber) match.push(existNumber);
    });

    const bonus = !!userNumbers.find(
      (userNumber) => userNumber === this.#bonus
    );

    return { count: match.length, bonus };
  }

  getWinStatistics() {
    const statistics = {
      match3: 0,
      match4: 0,
      match5: 0,
      match5withBonus: 0,
      match6: 0,
    };

    const matchedCounts = this.#purchasedNumbers.map((userNumbers) =>
      this.getMatchedCount(userNumbers)
    );

    matchedCounts.forEach(({ count, bonus }) => {
      if (count < 3) return;
      if (bonus && count === 5) {
        statistics.match5withBonus = statistics.match5withBonus + 1;
        return;
      }
      const key = `match${count}`;
      statistics[key] = statistics[key] + 1;
    });

    return statistics;
  }
}

module.exports = Lotto;
