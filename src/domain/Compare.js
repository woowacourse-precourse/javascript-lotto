const {
  THIRD,
  FORTH,
  FIFTHBONUS,
  FIFTH,
  SIX,
  LOTTO_NUMBER_COUNT,
} = require("../constants/constant");

class Compare {
  setResult(buyLottoNumbers, winNumbers, bonusNumber) {
    const setWinNumbers = new Set(winNumbers);
    buyLottoNumbers.map((lottoNumbers) => {
      const differ = this.compareLottos(lottoNumbers, setWinNumbers);
      this.makeResult(
        LOTTO_NUMBER_COUNT - differ.size,
        lottoNumbers,
        bonusNumber
      );
    });
    return;
  }

  compareLottos(lottoNumbers, setWinNumbers) {
    const setLottoNumbers = new Set(lottoNumbers);
    return new Set([...setLottoNumbers].filter((x) => !setWinNumbers.has(x)));
  }

  makeResult(sameNumberCount, lottoNumbers, bonusNumber) {
    const messageArr = [0, 0, 0, THIRD, FORTH, FIFTH, SIX, FIFTHBONUS];
    if (sameNumberCount === 5 && lottoNumbers.includes(parseInt(bonusNumber))) {
      messageArr[7].count += 1;
    } else if (sameNumberCount >= 3) {
      messageArr[sameNumberCount].count += 1;
    }
  }
}

module.exports = Compare;
