const { Console, Random } = require("@woowacourse/mission-utils");
const { PRICE_OF_ONE_LOTTO, LOTTO_NUMBER_RANGE } = require("./constants");
const { isIncludeRange } = require("./utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  static validateMoney(moneyOfString) {
    if (!moneyOfString.endsWith("000"))
      throw new Error("[ERROR] 잔돈이 없습니다.");
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

  static generateNumbers() {
    const MINIMUM = 1;
    const MAXIMUM = 45;
    const LENGTH = 6;
    return Random.pickUniqueNumbersInRange(MINIMUM, MAXIMUM, LENGTH);
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
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 중복된 번호는 입력할 수 없습니다.");
    }

    const existNaN = numbers.filter((number) => isNaN(number)).length >= 1;
    if (existNaN) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }

    const isNotRange = numbers.find(
      (number) =>
        !isIncludeRange(LOTTO_NUMBER_RANGE.min, LOTTO_NUMBER_RANGE.max, number)
    );
    if (isNotRange) {
      throw new Error("[ERROR] 로또 번호의 범위는 1~45입니다.");
    }
  }

  validateBonusNumber(bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }

    if (this.#numbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }

    if (
      !isIncludeRange(
        LOTTO_NUMBER_RANGE.min,
        LOTTO_NUMBER_RANGE.max,
        bonusNumber
      )
    ) {
      throw new Error("[ERROR] 로또 번호의 범위는 1~45입니다.");
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

    const TITLE = "당첨 통계";
    const SEPARATOR = "---";
    const totalStatistics = Object.entries(statistics).map(([key, count]) =>
      messageGenerators[key](count)
    );
    const totalEarning = `총 수익률은 ${this.#getEarningRate(
      statistics,
      purchasedAmount
    )}%입니다.`;

    const messages = [TITLE, SEPARATOR, ...totalStatistics, totalEarning];
    return messages;
  }

  #getEarningRate(statistics, purchasedAmount) {
    const priceList = {
      match3: 5000,
      match4: 50000,
      match5: 1500000,
      match5andBonus: 30000000,
      match6: 2000000000,
    };
    const earning = Object.entries(statistics).reduce(
      (prev, [key, count]) => prev + count * priceList[key],
      0
    );

    return (earning / (purchasedAmount * PRICE_OF_ONE_LOTTO)) * 100;
  }
}

module.exports = Lotto;
