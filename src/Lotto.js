const { Random } = require('@woowacourse/mission-utils');
const checkLottoValidation = require('./checkValid/checkLottoValidation');

class LottoBuilder {
  constructor() {
    this.lottoList = [];
    this.WinningNumber = [];
    this.bonusNumber = null;
  }
  createLottoList(input) {
    const lottoList = [];
    const countLotto = this.countAmountLotto(input);

    Array(countLotto)
      .fill(countLotto)
      .forEach(_ => lottoList.push(this.createLottoNumber()));

    this.lottoList = lottoList;
    return lottoList;
  }

  createLottoNumber() {
    const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumber.sort((a, b) => a - b);
  }
  countAmountLotto(input) {
    return Number(input.slice(0, input.length - 3));
  }

  build() {
    return new Lotto(this.WinningNumber, this.lottoList, this.bonusNumber);
  }
}

class Lotto {
  #numbers;
  constructor(numbers, lottoList, bonusNumber) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.lottoList = lottoList;
    this.bonusNumber = bonusNumber;
    this.stats = [0, 0, 0, 0, 0];
    this.yield = null;
  }

  validate(numbers) {
    if (checkLottoValidation(numbers)) {
      this.setStats(this.#numbers, this.lottoList, this.bonusNumber);
      this.setYield(this.stats, this.lottoList);
    }
  }

  setStats(numbers, lottos, bonus) {
    lottos.forEach(lotto => {
      const count = this.countLotto(lotto, numbers);
      const countLotto = this.compareBonus(count, lotto, bonus);
      this.rank(countLotto);
    });
  }

  setYield(stats, lottoList) {
    const money = this.prizeCaculation(stats);
    this.yield = this.yieldCaculation(money, lottoList);
  }

  prizeCaculation(stats) {
    const rewardArray = [2000000000, 30000000, 1500000, 50000, 5000];

    return stats.reduce((money, value, index) => {
      if (value > 0) {
        return (money += rewardArray[index] * value);
      }
      return money;
    }, 0);
  }

  yieldCaculation(money, lottoList) {
    return ((money / (lottoList.length * 1000)) * 100).toFixed(1);
  }

  countLotto(lotto, numbers) {
    return lotto.reduce((count, value) => {
      if (numbers.includes(value.toString())) {
        return count + 1;
      }
      return count;
    }, 0);
  }

  compareBonus(count, lotto, bonus) {
    return count === 5 && lotto.includes(Number(bonus))
      ? (count += 0.5)
      : count;
  }

  rank(correct) {
    if (correct === 3) {
      return (this.stats[4] += 1);
    }
    if (correct === 4) {
      return (this.stats[3] += 1);
    }
    if (correct === 5) {
      return (this.stats[2] += 1);
    }
    if (correct === 5.5) {
      return (this.stats[1] += 1);
    }
    if (correct === 6) {
      return (this.stats[0] += 1);
    }
  }
}
module.exports = { LottoBuilder, Lotto };
