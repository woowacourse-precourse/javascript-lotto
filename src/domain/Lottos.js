const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const LottoNumber = require("./LottoNumber");
const {
  CHECK_MATCH_BONUS_LIMIT,
  STATIC_RANK,
} = require("../constants/gameCondition");

class Lottos {
  #lottos;
  #amount;

  constructor(amount) {
    this.#lottos = [];
    this.#amount = amount;
    this.#generateNumbers();
  }

  size() {
    return this.#lottos.length;
  }

  toString() {
    return this.#lottos.map((lotto) => lotto.toString()).join("\n");
  }

  #getLottoNumber() {
    return LottoNumber.generate();
  }

  #generateNumbers() {
    while (this.#lottos.length < this.#amount) {
      const lottoNumber = this.#getLottoNumber();
      const lotto = new Lotto(lottoNumber);

      this.#addLotto(lotto);
    }

    return this.#lottos;
  }

  #addLotto(lotto) {
    if (this.#isContainLotto(lotto)) return;

    this.#lottos.push(lotto);
  }

  #isContainLotto(newLotto) {
    this.#lottos.forEach((lotto) => {
      if (lotto.isEqual(newLotto)) return true;
    });
  }

  rankLottos(winNumebrs, bonusNumber) {
    const rankCounts = this.#initializeRankCounts();

    this.#lottos.forEach((lotto) => {
      const rank = lotto.getRank(winNumebrs, bonusNumber);
      rankCounts.set(rank, rankCounts.get(rank) + 1);
    });

    return rankCounts;
  }

  #initializeRankCounts() {
    const rankCounts = new Map();

    Object.values(STATIC_RANK).forEach((rank) => {
      rankCounts.set(rank, 0);
    });

    return rankCounts;
  }
}

module.exports = Lottos;
