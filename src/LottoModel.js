const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { WINNINGS } = require("./Constants");
const RANKING = [
  WINNINGS.FIFTH_WIN,
  WINNINGS.FOURTH_WIN,
  WINNINGS.THIRD_WIN,
  WINNINGS.SECOND_WIN,
  WINNINGS.FIRST_WIN,
];

class LottoModel {
  #lottos;
  #winningRankCount;
  #totalAmount;

  constructor() {
    this.#lottos = [];
    this.#winningRankCount = [];
    for (let i = 0; i < WINNINGS.RANK_MAX; i++) {
      this.#winningRankCount.push(0);
    }
    this.#totalAmount = 0;
  }

  createLottos(amount) {
    for (let i = 0; i < amount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(new Lotto(numbers));
    }
    return this.#lottos;
  }

  checkWinning(winningNumbers, bonusNumber) {
    for (const lotto of this.#lottos) {
      const countWinningNumbers = lotto.compareWinningNumbers(winningNumbers);
      const checkBonusNumber = lotto.compareBonusNumber(bonusNumber);
      this.countRank(countWinningNumbers, checkBonusNumber);
    }
    return this.#winningRankCount;
  }

  countRank(countWinningNumbers, checkBonusNumber) {
    if (countWinningNumbers === 3)
      this.#winningRankCount[WINNINGS.FIFTH_WIN.RANK - 1]++;
    if (countWinningNumbers === 4)
      this.#winningRankCount[WINNINGS.FOURTH_WIN.RANK - 1]++;
    if (countWinningNumbers === 5) {
      if (checkBonusNumber)
        return this.#winningRankCount[WINNINGS.SECOND_WIN.RANK - 1]++;
      this.#winningRankCount[WINNINGS.THIRD_WIN.RANK - 1]++;
    }
    if (countWinningNumbers === 6)
      this.#winningRankCount[WINNINGS.FIRST_WIN.RANK - 1]++;
  }

  calcWinningAmount() {
    for (const rank of RANKING) {
      this.#totalAmount += this.#winningRankCount[rank.RANK - 1] * rank.AMOUNT;
    }
  }

  calcYield(purchaseAmount) {
    this.calcWinningAmount();
    return ((this.#totalAmount * 100) / purchaseAmount).toFixed(1);
  }
}

module.exports = LottoModel;
