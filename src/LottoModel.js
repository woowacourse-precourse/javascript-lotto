const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { WINNINGS } = require("./Constants");

class LottoModel {
  #lottos;
  #winningCount;

  constructor() {
    this.#lottos = [];
    this.#winningCount = [];
    for (let i = 0; i < WINNINGS.RANK_MAX; i++) {
      this.#winningCount.push(0);
    }
  }

  createLottos(amount) {
    for (let i = 0; i < amount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(new Lotto(numbers));
    }
    return this.#lottos;
  }

  countWinning(lotto, winningNumbers, bonusNumber) {
    const lottoNumbers = lotto.getLottoNumbers();
    const countWinningNumbers = winningNumbers.filter((number) =>
      lottoNumbers.includes(number)
    );
    const checkBonusNumber = lottoNumbers.includes(bonusNumber);
  }

  checkWinning(winningNumbers, bonusNumber) {
    for (const lotto of this.#lottos) {
      this.countWinning(lotto, winningNumbers, bonusNumber);
    }
  }
}

module.exports = LottoModel;
