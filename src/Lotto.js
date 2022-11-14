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
    numbers.map(function(element){
      if(!(element>=1&&element<=45)){
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    })
  }
  getLotto(){
    return this.#numbers;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
