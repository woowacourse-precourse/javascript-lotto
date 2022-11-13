const Validator = require('./Validator');
const Render = require('./Render');
const { RANK, LOTTO, PRIZE_MONEY } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    Validator.throwErrorIfInvalidWinningNumbers(numbers);
  }

  informStateOfWinning(userLottos, bonusNumber) {
    const winningState = userLottos.reduce((state, lotto) => {
      const matchingCount = this.getMatchingNumCount(lotto);
      const matchesBonusNum = lotto.includes(Number(bonusNumber));
      const rank = this.getWinningRanking(matchingCount, matchesBonusNum);
      if (rank !== RANK.FAIL) state[rank] += 1;

      return state;
    }, Array(LOTTO.NUM_OF_PRIZE).fill(0));

    this.calcTotalPrize(winningState, userLottos.length);
  }

  getMatchingNumCount(lottoNumbers) {
    return lottoNumbers.filter((number) => this.#numbers.includes(number))
      .length;
  }

  getWinningRanking(matchingCount, matchesBonusNum) {
    if (matchingCount === LOTTO.LENGTH) return RANK.ONE;
    if (matchingCount + matchesBonusNum === LOTTO.LENGTH) return RANK.TWO;
    if (matchingCount === LOTTO.LENGTH - 1) return RANK.THREE;
    if (matchingCount === LOTTO.LENGTH - 2) return RANK.FOUR;
    if (matchingCount === LOTTO.LENGTH - 3) return RANK.FIVE;

    return RANK.FAIL;
  }

  calcTotalPrize(winningState, countOfLottos) {
    let totalPrize = 0;
    for (let i = 0; i < LOTTO.NUM_OF_PRIZE; i++) {
      totalPrize += winningState[i] * PRIZE_MONEY[i];
    }

    this.calcRateOfReturn(winningState, totalPrize, countOfLottos);
  }

  calcRateOfReturn(winningState, totalPrize, countOfLottos) {
    const rateOfReturn = (totalPrize / (countOfLottos * LOTTO.PRICE)) * 100;
    this.renderGameResult(winningState, rateOfReturn);
  }

  renderGameResult(winningState, rateOfReturn) {
    Render.WinningStatistics(winningState, rateOfReturn);
  }
}

module.exports = Lotto;
