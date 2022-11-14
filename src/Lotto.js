class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개 입니다.");
    }
    
    if ((new Set([...numbers])).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복될수 없습니다.");
    }

    for(let elem of numbers) {
      if(isNaN(elem) || !Number.isInteger(elem)) {
        throw new Error("[ERROR] 로또 번호는 정수형 입니다.");
      }
    }
    
    for(let elem of numbers) {
      if(1 > elem || elem > 45) {
        throw new Error("[ERROR] 로또 번호의 범위는 1~45 입니다.");
      }
    }

  }

  getLottoNums() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
