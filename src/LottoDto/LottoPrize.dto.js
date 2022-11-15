const { LOTTO, LOTTO_PRIZE } = require('../Resource');

class LottoPrizeDto {
  #prizeCount;
  #sumMoney;

  constructor() {
    this.#prizeCount = Array.from({ length: LOTTO.PRIZE_SIZE }, () => 0);
    this.#sumMoney = 0;
  }
  get prizeCount() {
    return this.#prizeCount;
  }

  get sumMoney() {
    return this.#sumMoney;
  }

  prizeCountUp(count, bonus) {
    const prizeIndex = LOTTO_PRIZE.findIndex((PRIZE) => {
      if (PRIZE.BONUS && bonus) {
        return PRIZE.MATCHED === count;
      }
      return PRIZE.MATCHED === count;
    });

    if (prizeIndex != -1) {
      this.#prizeCount[prizeIndex] += 1;
      this.#sumMoney += LOTTO_PRIZE[prizeIndex].MONEY;
    }
  }
}

module.exports = LottoPrizeDto;
