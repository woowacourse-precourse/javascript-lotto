class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.sortData(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if(numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    var isOverlap = new Set(numbers).size != numbers.length;   
    if(isOverlap) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
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
