const { Console } = require("@woowacourse/mission-utils");
const ERROR_MENTION = require('./constant/ErrorMention');

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
      case correctCount === 3:
        lottoResult[0]++;
        break;
      case correctCount === 4:
        lottoResult[1]++;
        break;
      case correctCount === 5:
        if (lotto.includes(BonusNumber)) {
          lottoResult[3]++;
          break;
        }
        lottoResult[2]++;
        break;
      case correctCount === 6:
        lottoResult[4]++;
        break;
    }
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      Console.close();
      throw new Error(ERROR_MENTION.lotto_number_length);
    }
    const duplicateSet = new Set(numbers);
    if (numbers.length !== duplicateSet.size) {
      Console.close();
      throw new Error(ERROR_MENTION.duplicate_lotto_number);
    }
  }
}

module.exports = Lotto;
