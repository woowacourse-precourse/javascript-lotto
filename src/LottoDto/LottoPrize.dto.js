const { LOTTO, LOTTO_PRIZE } = require('../Resource');

class LottoPrizeDto {
  #prizeCount;

  constructor() {
    this.#prizeCount = Array.from({ length: LOTTO.PRIZE_SIZE }, () => 0);
  }
  get prizeCount() {
    return this.#prizeCount;
  }

  prizeCountUp(count, bonus) {
    const prizeIndex = LOTTO_PRIZE.findIndex((PRIZE) => {
      if (PRIZE.BONUS && bonus) {
        return PRIZE.MATCHED === count;
      }
      return PRIZE.MATCHED === count;
    });
    if(prizeIndex != -1) {
      this.#prizeCount[prizeIndex] += 1;
    }
  }
}

module.exports = LottoPrizeDto;
