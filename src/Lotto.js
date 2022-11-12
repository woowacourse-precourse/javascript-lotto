const MissionUtils = require('@woowacourse/mission-utils');
const lottoValidation = require('./validation/lottoValidation');
const { RANK, MATCH, MONEY } = require('./constant/constant');

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
    this.validate(numbers);
  }

  validate(numbers) {
    lottoValidation(numbers);
  }

  progress() {
    this.setStats(this.#numbers, this.lottoList, this.bonusNumber);
    this.setYield(this.stats, this.lottoList);
  }

  setStats(numbers, lottos, bonus) {
    lottos.forEach((lotto) => {
      const count = this.countLotto(lotto, numbers);
      const countLotto = this.compareBonus(count, lotto, bonus);
      this.rank(countLotto);
    });
  }

  setYield(stats, lottoList) {
    const money = this.prizeCalculation(stats);
    this.yield = this.yieldCalculation(money, lottoList);
  }

  prizeCalculation(stats) {
    const moneyArray = [
      MONEY.RANK_ONE,
      MONEY.RANK_TWO,
      MONEY.RANK_THREE,
      MONEY.RANK_FOUR,
      MONEY.RANK_FIVE,
    ];

    return stats.reduce((money, value, index) => {
      if (value > 0) {
        return (money += moneyArray[index] * value);
      } else {
        return money;
      }
    }, 0);
  }

  yieldCalculation(money, lottoList) {
    return ((money / (lottoList.length * 1000)) * 100).toFixed(1);
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
    return count === MATCH.FIVE && lotto.includes(Number(bonus))
      ? (count += 0.5)
      : count;
  }

  rank(correct) {
    if (correct === MATCH.THREE) {
      return (this.stats[RANK.FIVE] += 1);
    }
    if (correct === MATCH.FOUR) {
      return (this.stats[RANK.FOUR] += 1);
    }
    if (correct === MATCH.FIVE) {
      return (this.stats[RANK.THREE] += 1);
    }
    if (correct === MATCH.FIVE_BONUS) {
      return (this.stats[RANK.TWO] += 1);
    }
    if (correct === MATCH.SIX) {
      return (this.stats[RANK.ONE] += 1);
    }
  }
}

module.exports = { LottoBuilder, Lotto };
