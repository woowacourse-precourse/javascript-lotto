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
      let sameNumberCount = 0;
      winNumbers.forEach((winNumber) => {
        if (lottoNumbers.includes(winNumber)) {
          sameNumberCount++;
        }
      });
      this.makeResult(sameNumberCount, lottoNumbers, bonusNumber);
    });
    return;
  }

  makeResult(sameNumberCount, lottoNumbers, bonusNumber) {
    console.log(sameNumberCount, lottoNumbers, bonusNumber);
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
