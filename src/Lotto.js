const MissionUtils = require('@woowacourse/mission-utils');
const lottoValidation = require('./validation/lottoValidation');

class LottoBuilder {
  constructor() {
    this.lottoList = [];
    this.WinningNumber = [];
    this.bonusNumber = null;
  }

  creatLottoList(input) {
    const lottoList = [];
    const countLotto = this.countAmountLotto(input);

    Array(countLotto)
      .fill(countLotto)
      .forEach((_) => lottoList.push(this.#creatLottoNumber()));

    this.lottoList = lottoList;

    return lottoList;
  }

  #creatLottoNumber() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
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
    this.#numbers = numbers;
    this.lottoList = lottoList;
    this.bonusNumber = bonusNumber;
    this.stats = [0, 0, 0, 0, 0];
    this.yield = null;
  }

  progress(numbers) {
    if (lottoValidation(numbers)) {
    }
  }

  prizeCalculation(stats) {
    const rewardArray = [2000000000, 30000000, 1500000, 50000, 5000];

    return stats.reduce((money, value, index) => {
      if (value > 0) {
        return (money += rewardArray[index] * value);
      } else {
        return money;
      }
    }, 0);
  }

  countLotto(lotto, numbers) {
    return lotto.reduce((count, value) => {
      if (numbers.includes(value.toString())) {
        return count + 1;
      } else {
        return count;
      }
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
