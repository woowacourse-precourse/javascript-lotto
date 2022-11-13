class Result {
  constructor(lottoNumber, myLottoNumber, bonusNumber) {
    this.lottoNumber = lottoNumber;
    this.myLottoNumber = myLottoNumber;
    this.bonusNumber = bonusNumber;
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
      return '5,000원';
    }
    if (originalResult === 4) {
      return '50,000원';
    }
    if (originalResult === 5 && bonusResult === true) {
      return '30,000,000원';
    }
    if (originalResult === 5) {
      return '1,500,000원';
    }
    if (originalResult === 6) {
      return '2,000,000,000원';
    }
  }
}

module.exports = Result;
