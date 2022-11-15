class LottoResult {
  #lottoNumberCount;
  #bonusNumberCount;

  constructor(lottoNumberCount, bonusNumberCount) {
    this.#lottoNumberCount = lottoNumberCount;
    this.#bonusNumberCount = bonusNumberCount;
  }

  isWinning(winningLottoNumberCount, winningBonusNumberCount) {
    const isSame = this.#lottoNumberCount.isSame(winningLottoNumberCount);

    if (winningBonusNumberCount.isNull()) return isSame;

    return isSame && this.#bonusNumberCount.isSame(winningBonusNumberCount);
  }
}

module.exports = LottoResult;
