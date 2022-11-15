const { ERROR_MESSAGE } = require("./Constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.sortData(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if(numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_SIZE);
    }
    var isOverlap = new Set(numbers).size != numbers.length;   
    if(isOverlap) {
      throw new Error(ERROR_MESSAGE.LOTTO_DUPLICATED);
    }
  }

  sortData(numbers) {
  numbers.sort(function(a, b) { 
    return a - b;
  });
 }

 get numbers() {
  return this.#numbers;
 }
}

module.exports = Lotto;
