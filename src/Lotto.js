const Validator = require('./Validator');
const { RANK, LOTTO, PRIZE_MONEY, PLACES_OF_DECIMALS } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    Validator.throwErrorIfInvalidWinningNumbers(numbers);
  }

  getGameResult(userLottos, bonusNumber) {
    const winningState = this.informWinningState(userLottos, bonusNumber);
    const totalPrize = this.calcTotalPrize(winningState, userLottos.length);
    const rateOfReturn = this.calcRateOfReturn(totalPrize, userLottos.length);

    return [winningState, rateOfReturn];
  }

  informWinningState(userLottos, bonusNumber) {
    const winningState = userLottos.reduce((state, lotto) => {
      const matchingCount = this.getMatchingNumCount(lotto);
      const matchesBonusNum = this.doesLottoIncludeBonusNum(lotto, bonusNumber);
      const ranking = this.getWinningRanking(matchingCount, matchesBonusNum);
      if (ranking !== RANK.FAIL) state[ranking] += 1;

      return state;
    }, Array(LOTTO.NUM_OF_PRIZE).fill(0));

    return winningState;
  }

  getMatchingNumCount(lottoNumbers) {
    return lottoNumbers.filter((number) => this.#numbers.includes(number))
      .length;
  }

  doesLottoIncludeBonusNum(lotto, bonusNumber) {
    return lotto.includes(bonusNumber);
  }

  getWinningRanking(matchingCount, matchesBonusNum) {
    if (matchingCount === LOTTO.LENGTH) return RANK.ONE;
    if (matchingCount + matchesBonusNum === LOTTO.LENGTH) return RANK.TWO;
    if (matchingCount === LOTTO.LENGTH - 1) return RANK.THREE;
    if (matchingCount === LOTTO.LENGTH - 2) return RANK.FOUR;
    if (matchingCount === LOTTO.LENGTH - 3) return RANK.FIVE;

    return RANK.FAIL;
  }

  calcTotalPrize(winningState) {
    return PRIZE_MONEY.reduce(
      (totalPrize, prize, idx) => totalPrize + prize * winningState[idx],
      0
    );
  }

  calcRateOfReturn(totalPrize, countOfLottos) {
    const rateOfReturn = (totalPrize / (countOfLottos * LOTTO.PRICE)) * 100;

    return rateOfReturn.toFixed(PLACES_OF_DECIMALS);
  }
}

module.exports = Lotto;
