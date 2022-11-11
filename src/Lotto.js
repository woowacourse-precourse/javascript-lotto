const { Console, Random } = require("@woowacourse/mission-utils");

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

  static generateNumbers() {
    const MINIMUM = 1;
    const MAXIMUM = 45;
    const LENGTH = 6;
    return Random.pickUniqueNumbersInRange(MINIMUM, MAXIMUM, LENGTH);
  }

  static buy(money) {
    const boughtLotto = [];
    const PRICE_OF_ONE_LOTTO = 1000;
    const numberOfLottoTicketsBought = money / PRICE_OF_ONE_LOTTO;

    for (let i = 0; i < numberOfLottoTicketsBought; i++) {
      boughtLotto.push(this.generateNumbers());
    }
    return boughtLotto;
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
      match5andBonus: 0,
      match6: 0,
    };

    const matchedCounts = this.#purchasedNumbers.map((userNumbers) =>
      this.getMatchedCount(userNumbers)
    );

    matchedCounts.forEach(({ count, bonus }) => {
      if (count < 3) return;
      if (bonus && count === 5) {
        statistics.match5andBonus = statistics.match5andBonus + 1;
        return;
      }
      const key = `match${count}`;
      statistics[key] = statistics[key] + 1;
    });

    return statistics;
  }

  getEarningRate(statistics) {
    const priceList = {
      match3: 5000,
      match4: 50000,
      match5: 1500000,
      match5andBonus: 30000000,
      match6: 2000000000,
    };
    const earning = Object.entries(statistics).reduce(
      (prev, { key, count }) => prev + count * priceList[key],
      0
    );
    return (earning / this.#purchasedAmount) * 100;
  }

  getMessageOfStatistics(statistics) {
    const messageGenerators = {
      match3(count) {
        return `3개 일치 (5,000원) - ${count}개`;
      },
      match4(count) {
        return `4개 일치 (50,000원) - ${count}개`;
      },
      match5(count) {
        return `5개 일치 (1,500,000원) - ${count}개`;
      },
      match5andBonus(count) {
        return `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`;
      },
      match6(count) {
        return `6개 일치 (2,000,000,000원) - ${count}개`;
      },
    };

    const messages = Object.entries(statistics).map(([key, count]) =>
      messageGenerators[key](count)
    );

    messages.push(`총 수익률은 ${this.getEarningRate(getEarningRate)}%입니다.`);

    return messages.join("\n");
  }
}

module.exports = Lotto;
