class Result {
  #lottoNumber;
  #myLottoNumber;
  #bonusNumber;

  constructor(lottoNumber, myLottoNumber, bonusNumber) {
    this.#lottoNumber = lottoNumber;
    this.#myLottoNumber = myLottoNumber;
    this.#bonusNumber = bonusNumber;
  }

  compare(lottoNumber, myLottoNumber, bonusNumber) {
    let originalResult = 0;
    const myLottoNumberArray = myLottoNumber
      .split(',')
      .map((number) => number * 1);
    const bonusResult = myLottoNumber.includes(bonusNumber);

    lottoNumber.forEach((number) => {
      if (myLottoNumberArray.includes(number)) {
        originalResult += 1;
      }
    });

    if (originalResult === 3) {
      return 5;
    }
    if (originalResult === 4) {
      return 4;
    }
    if (originalResult === 5 && bonusResult === true) {
      return 2;
    }
    if (originalResult === 5) {
      return 3;
    }
    if (originalResult === 6) {
      return 1;
    }
  }
}

module.exports = Result;
