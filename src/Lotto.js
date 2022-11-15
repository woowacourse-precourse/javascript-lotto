const { ERROR_MESSAGE} = require("./Constants")
const { NOT_BETWEEN_NUMBER, DUPLICATE_NUMBER, NOT_SIX_NUMBER, IS_NOT_NUMBER} = ERROR_MESSAGE
class Lotto {
  #numbers;

  constructor(numbers){
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers){
    this.checkLottoLength(numbers);
    this.checkLottoNumber(numbers);
    this.checkDuplicateNumber(numbers);
    this.isNotLottoNumber(numbers);
  }

  checkLottoLength(numbers){
    if(numbers.length !== 6){
      throw new Error(NOT_SIX_NUMBER);
    }
  }

  checkLottoNumber(numbers){
    for(let i = 0; i < numbers.length; i++){
      if(numbers[i] < 1 || numbers[i] > 45){
        throw new Error(NOT_BETWEEN_NUMBER);
      }
    }
  }

  checkDuplicateNumber(numbers){
    const set = new Set(numbers);
    if(set.size < numbers.length){
      throw new Error(DUPLICATE_NUMBER);
    }
  }

  isNotLottoNumber(numbers){
    for(let i = 0; i < numbers.length; i++){
      if(isNaN(numbers[i])){
        throw new Error("[ERROR]")
      }
    }
  }
}

module.exports = Lotto;