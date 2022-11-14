class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.#printLottoNumbers();
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #printLottoNumbers() {
    console.log(this.#numbers);
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
