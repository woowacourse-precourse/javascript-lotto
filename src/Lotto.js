const { Console, Random } = require("@woowacourse/mission-utils");
const {
  PRICE_OF_ONE_LOTTO,
  LOTTO_NUMBER_RANGE,
  STATISTICS_MESSAGE,
  WINNING_PRICE,
  ERROR,
} = require("./constants");
const { isIncludeRange } = require("./utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  static validateMoney(moneyOfString) {
    if (!moneyOfString.endsWith("000")) throw ERROR.noSmallChange;
  }

  static buy(money) {
    const boughtLotto = [];
    const numberOfLottoTicketsBought = money / PRICE_OF_ONE_LOTTO;

    for (let i = 0; i < numberOfLottoTicketsBought; i++) {
      boughtLotto.push(this.generateNumbers());
    }
    return boughtLotto;
  }

  static generateNumbers() {
    const { max, min } = LOTTO_NUMBER_RANGE;
    const LENGTH = 6;
    return Random.pickUniqueNumbersInRange(min, max, LENGTH);
  }

  static alertPurchaseResult(pickedNumbers) {
    this.alertHowManyBought(pickedNumbers.length);
    this.alertNumberOfPurchases(pickedNumbers);
    Console.print("");
  }

  static alertHowManyBought(count) {
    Console.print(`${count}개를 구매했습니다.`);
  }

  static alertNumberOfPurchases(pickedNumbers) {
    pickedNumbers.forEach((number) => {
      Console.print(`[${number.join(", ")}]`);
    });
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw ERROR.lengthIsSix;
    }

    if (numbers.length !== new Set(numbers).size) {
      throw ERROR.noOverlappingNumber;
    }

    const existNaN = numbers.filter((number) => isNaN(number)).length >= 1;
    if (existNaN) {
      throw ERROR.onlyNumber;
    }

    const isNotRange = numbers.find(
      (number) =>
        !isIncludeRange(LOTTO_NUMBER_RANGE.min, LOTTO_NUMBER_RANGE.max, number)
    );
    if (isNotRange) {
      throw ERROR.wrongNumberRange;
    }
  }

  validateBonusNumber(bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw ERROR.onlyNumber;
    }

    if (this.#numbers.includes(bonusNumber)) {
      throw ERROR.noOverlappingNumberAndBonus;
    }

    if (
      !isIncludeRange(
        LOTTO_NUMBER_RANGE.min,
        LOTTO_NUMBER_RANGE.max,
        bonusNumber
      )
    ) {
      throw ERROR.wrongNumberRange;
    }
  }

  getWinStatistics(purchasedNumbers, bonusNumber) {
    const statistics = {
      match3: 0,
      match4: 0,
      match5: 0,
      match5andBonus: 0,
      match6: 0,
    };

    const matchedCounts = purchasedNumbers.map((userNumbers) =>
      this.getMatchedCount(userNumbers, bonusNumber)
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

  getMatchedCount(userNumbers, bonusNumber) {
    const match = [];
    this.#numbers.forEach((number) => {
      const existNumber = userNumbers.find(
        (pickedNumber) => pickedNumber === number
      );
      if (existNumber) match.push(existNumber);
    });

    const bonus = !!userNumbers.find(
      (userNumber) => userNumber === bonusNumber
    );

    return { count: match.length, bonus };
  }

  getMessageFromStatistics(statistics, purchasedAmount) {
    const TITLE = "당첨 통계";
    const SEPARATOR = "---";
    const totalStatistics = Object.entries(statistics).map(([key, count]) =>
      STATISTICS_MESSAGE[key](count)
    );
    const totalEarning = `총 수익률은 ${this.#getEarningRate(
      statistics,
      purchasedAmount
    )}%입니다.`;

    const messages = [TITLE, SEPARATOR, ...totalStatistics, totalEarning];
    return messages;
  }

  #getEarningRate(statistics, purchasedAmount) {
    const earning = Object.entries(statistics).reduce(
      (prev, [key, count]) => prev + count * WINNING_PRICE[key],
      0
    );

    return (earning / (purchasedAmount * PRICE_OF_ONE_LOTTO)) * 100;
  }
}

module.exports = Lotto;
