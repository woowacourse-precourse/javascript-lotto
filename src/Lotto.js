const {ERROR} = require("./Constants.js");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    numbers = this.toNumbers(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO_COUNT_ERROR);
    }

    const set = new Set(numbers);
    const not_overlap = [...set];
    if(not_overlap.length != numbers.length)
      throw new Error(ERROR.LOTTO_OVERLAP_ERROR);

    for(const number of numbers){
      this.validate_EachNumber(number);
    }
  }

  validate_EachNumber(number){
    if(isNaN(number))
      throw new Error(ERROR.NOT_NUMBER_ERROR);
    if(number < 0)
      throw new Error(ERROR.NEGATIVE_ERROR);
    if(!(number % 1 === 0))
      throw new Error(ERROR.NOT_INT_ERROR);    
    if(number<1 || number>45)
      throw new Error(ERROR.LOTTO_DOMAIN_ERROR);   
  }

  toNumbers(numbers){
    for(let i=0; i < numbers.length; i++)
      numbers[i] = Number(numbers[i]);
    return numbers;
  }
  
  getNumbers(){
    return this.#numbers;
  }
}

module.exports = Lotto;
