class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6)
      throw new Error("[ERROR] 로또 번호는 서로 다른 6개의 숫자여야 합니다.");
  }
  getCountOfMatchNumber(numbersToCompare){
    let countOfMatchNumber = 0;
    for(let numberToCompare of numbersToCompare){
      if(this.#numbers.includes(numberToCompare))
       countOfMatchNumber++;
    }
    return  countOfMatchNumber;
  }
}

module.exports = Lotto;
