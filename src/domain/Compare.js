const {
  RESULT_RANK,
  THIRD,
  FORTH,
  FIFTHBONUS,
  FIFTH,
  SIX,
} = require("../constants/constant");

class Compare {
  setResult(buyLottoNumbers, winNumbers, bonusNumber) {
    buyLottoNumbers.forEach((lottoNumbers) => {
      const setLottoNumbers = new Set(lottoNumbers);
      winNumbers.forEach((winNumber) => {
        setLottoNumbers.delete(winNumber);
      });
      const sameNumberCount = 6 - setLottoNumbers.size;
      this.makeResult(sameNumberCount, lottoNumbers, bonusNumber);
    });
    return;
  }

  makeResult(sameNumberCount, lottoNumbers, bonusNumber) {
    if (sameNumberCount === 3) {
      THIRD.count += 1;
    } else if (sameNumberCount === 4) {
      FORTH.count += 1;
    } else if (sameNumberCount === 5) {
      if (lottoNumbers.includes(bonusNumber)) {
        FIFTHBONUS.count += 1;
      } else {
        FIFTH.count += 1;
      }
    } else if (sameNumberCount === 6) {
      SIX.count += 1;
    }
  }
}

module.exports = Compare;
