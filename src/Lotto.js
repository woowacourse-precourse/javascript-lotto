const CheckError = require('./CheckError');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    CheckError.check(numbers);
  }

  matchLottoNumber(lottoWinnerNumber, lottoBonusNumber) {
    const numberOfSuccess = this.#numbers.reduce((acc, cur, i) => {
      if (lottoWinnerNumber.includes(cur)) acc += 1;

      return acc;
    }, 0);

    return this.#checkRanking(numberOfSuccess, lottoBonusNumber);
  }

  #checkRanking(numberOfSuccess, lottoBonusNumber) {
    switch (numberOfSuccess) {
      case 3:
        return 4;
      case 4:
        return 3;
      case 5:
        return this.#check2ndOr3rd(lottoBonusNumber);
      case 6:
        return 0;
      default:
        return -1;
    }
  }

  #check2ndOr3rd(lottoBonusNumber) {
    if (this.#numbers.includes(lottoBonusNumber)) return 1;
    return 2;
  }
}

module.exports = Lotto;
