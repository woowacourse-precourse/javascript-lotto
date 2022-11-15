const MESSAGES = require("./Constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.includes(NaN)) {
      throw new Error(MESSAGES.ERROR.FORM);
    }
    if (numbers.length !== 6) {
      throw new Error(MESSAGES.ERROR.NUMBER);
    }
    numbers.forEach(number => {
      if(number > 45 || number < 1) {
        throw new Error(MESSAGES.ERROR.RANGE);
      }
    });
    if ([...new Set(numbers)].length !== 6) {
      throw new Error(MESSAGES.ERROR.DUPICATION);
    }
  }

  validateBonus(number) {
    if (this.#numbers.includes(number)) {
      throw new Error(MESSAGES.ERROR.BONUS_DUPLICATION);
    }
  }

  checkLotto = (lottoNumbers, bonusNumber) => {
    const result = {firstPlace: 0, secondPlace: 0, thirdPlace: 0, fourthPlace: 0, fifthPlace: 0};
    lottoNumbers.forEach(lottoNumber => {
      const duplicateNumber = lottoNumber.filter(number => this.#numbers.some(winNumber => winNumber === number ));
      const duplicateBonus = lottoNumber.includes(bonusNumber);
      if(duplicateNumber.length === 6) {
        result.firstPlace++;
      } else if(duplicateNumber.length === 5 && duplicateBonus) {
        result.secondPlace++;
      } else if(duplicateNumber.length === 5) {
        result.thirdPlace++;
      } else if(duplicateNumber.length === 4) {
        result.fourthPlace++;
      } else if(duplicateNumber.length === 3) {
        result.fifthPlace++;
      }
    })
    return result;
  }
}

module.exports = Lotto;
