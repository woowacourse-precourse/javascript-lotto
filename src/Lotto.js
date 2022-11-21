const { 
  isDuplicateNumber,
  isNumberLengthCheck,
} = require('./Controllers/Validate');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = String(numbers);
  }

  getLottoNumber() {
    let JackpotNumber = this.#numbers.split(',');
    return JackpotNumber;
  }

  calcLottoResultCount(correctCount, lotto, lottoResult, BonusNumber) {
    switch(true){
      case correctCount === 5:
        if (lotto.includes(Number(BonusNumber))) {
          lottoResult[3]++;
          break;
        }
        lottoResult[2]++;
        break;
      case correctCount === 6:
        lottoResult[4]++;
        break;
      default:
        lottoResult[correctCount - 3]++;
        break;
    }
  }

  validate(numbers) {
    isDuplicateNumber(numbers);
    isNumberLengthCheck(numbers);    
  }
}

module.exports = Lotto;
