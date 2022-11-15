const lottoValidation = require('./validation/lottoValidation');
const { RANK, MATCH, MONEY, NUMBER } = require('./constant/constant');

class LottoBuilder {
  lottoList(lists) {
    this.lottoList = lists;
    return this;
  }

  winningNumber(winning) {
    this.winningNumber = winning;
    return this;
  }

  bonusNumber(bonus) {
    this.bonusNumber = bonus;
    return this;
  }

  build() {
    return new Lotto(this.winningNumber, this.lottoList, this.bonusNumber);
  }
}

class Lotto {
  #numbers;

  constructor(numbers, lottoList, bonusNumber) {
    this.#numbers = numbers;
    this.lottoList = lottoList;
    this.bonusNumber = bonusNumber;
    this.stats = [
      NUMBER.ZERO,
      NUMBER.ZERO,
      NUMBER.ZERO,
      NUMBER.ZERO,
      NUMBER.ZERO,
    ];
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
      if (value > NUMBER.ZERO) {
        return (money += moneyArray[index] * value);
      }

      return money;
    }, NUMBER.ZERO);
  }

  yieldCalculation(money, lottoList) {
    return (
      (money / (lottoList.length * NUMBER.ONE_THOUSAND)) *
      NUMBER.ONE_HUNDRED
    ).toFixed(NUMBER.ONE);
  }

  countLotto(lotto, numbers) {
    return lotto.reduce((count, value) => {
      if (numbers.includes(value.toString())) {
        return count + NUMBER.ONE;
      }

      return count;
    }, NUMBER.ZERO);
  }

  compareBonus(count, lotto, bonus) {
    return count === MATCH.FIVE && lotto.includes(Number(bonus))
      ? (count += NUMBER.ZERO_POINT_FIVE)
      : count;
  }

  rank(correct) {
    if (correct === MATCH.THREE) {
      return (this.stats[RANK.FIVE] += NUMBER.ONE);
    }
    if (correct === MATCH.FOUR) {
      return (this.stats[RANK.FOUR] += NUMBER.ONE);
    }
    if (correct === MATCH.FIVE) {
      return (this.stats[RANK.THREE] += NUMBER.ONE);
    }
    if (correct === MATCH.FIVE_BONUS) {
      return (this.stats[RANK.TWO] += NUMBER.ONE);
    }
    if (correct === MATCH.SIX) {
      return (this.stats[RANK.ONE] += NUMBER.ONE);
    }
  }
}

module.exports = { LottoBuilder, Lotto };
