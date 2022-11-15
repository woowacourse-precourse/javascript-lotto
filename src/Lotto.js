const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }
  static purchase(input) {
    if (input.match(/^D/) || input < 1000) {
      throw new Error("[ERROR] 1,000원 이상의 숫자로만 입력해주세요.");
    }
    if (input % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로만 입력해주세요.");
    }
    const lotto = [];
    const count = input / 1000;
    Array(count)
      .fill()
      .forEach((_) => {
        lotto.push(new Lotto(this.makeRandomNumbers()));
      });
    return lotto;
  }
  static makeRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }
  get numbers() {
    return this.#numbers;
  }
  static getMatchingNumber(lotto) {
    const { winNumbers, bonusNumber } = lotto;
    let count = 0;

    lotto.numbers.forEach((number) => {
      if (winNumbers.includes(number)) {
        count += 1;
      }
    });
    if (count === 5 && winNumbers.includes(bonusNumber)) {
      count = "BONUS";
    }
    return count;
  }
  static getStastics(matchedCount) {
    let total = 0;
    const matchingInfo = {
      3: { count: 0, value: 5000 },
      4: { count: 0, value: 50000 },
      5: { count: 0, value: 1500000 },
      BONUS: { count: 0, value: 30000000 },
      6: { count: 0, value: 2000000000 },
    };

    const keys = [3, 4, 5, "BONUS", 6];

    matchedCount.forEach((key) => {
      if (key in matchingInfo) {
        matchingInfo[key].count += 1;
        total += matchingInfo[key].value;
      }
    });

    for (let key of keys) {
      if (key === "BONUS") {
        this.printResult(
          "5개 일치, 보너스 볼 일치",
          matchingInfo[key].value,
          matchingInfo[key].count
        );
      } else {
        this.printResult(
          `${key}개 일치`,
          matchingInfo[key].value,
          matchingInfo[key].count
        );
      }
    }
    return total;
  }
  static printResult(message, reward, count) {
    MissionUtils.Console.print(
      `${message} (${reward.toLocaleString()}원) - ${count}개`
    );
  }
  static getEarningRate(purchaseAmount, totalEarning) {
    return ((totalEarning / purchaseAmount) * 100).toFixed(1);
  }
}

module.exports = Lotto;
