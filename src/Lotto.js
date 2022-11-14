class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    console.log(numbers);
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    numbers.forEach(number => {
        if(isNaN(number)){
          throw new Error("[ERROR] 로또 번호는 양의 정수만 가능합니다.");
        }
        if(!(0 < number && number < 47)){
          throw new Error("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.");
        }
    });
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
