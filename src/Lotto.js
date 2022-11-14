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
    const numberSet = new Set(numbers);
    if(numberSet.size < 6){
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    numbers.forEach(function(number){
      if (isNaN(number) && isNaN(parseFloat(number))) 
        throw new Error("[ERROR] 로또 번호는 숫자이어야 합니다.");
      if(number < 1 || number > 45 || parseInt(number) !== number) 
        throw new Error("[ERROR] 로또 번호는 1에서 45 범위의 정수이어야 합니다.");
    })
    
  }

  getNumbers(){
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
