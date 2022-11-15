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
    const setWinNumbers = new Set(winNumbers);
    buyLottoNumbers.map((lottoNumbers) => {
      const setLottoNumbers = new Set(lottoNumbers);
      // console.log(setLottoNumbers, setWinNumbers);
      const differ = new Set(
        [...setLottoNumbers].filter((x) => !setWinNumbers.has(x))
      );
      // console.log(differ);
      this.makeResult(6 - differ.size, lottoNumbers, bonusNumber);
    });
    return;
  }

  makeResult(sameNumberCount, lottoNumbers, bonusNumber) {
    // console.log(sameNumberCount, lottoNumbers, bonusNumber);
    // console.log(
    //   lottoNumbers.includes(parseInt(bonusNumber)),
    //   "🍖",
    //   lottoNumbers,
    //   parseInt(bonusNumber)
    // );
    if (sameNumberCount === 3) {
      THIRD.count += 1;
    } else if (sameNumberCount === 4) {
      FORTH.count += 1;
    } else if (sameNumberCount === 5) {
      if (lottoNumbers.includes(parseInt(bonusNumber))) {
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
