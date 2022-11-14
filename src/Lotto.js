const { NUMBER } = require('./Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== NUMBER.LOTTO) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== NUMBER.LOTTO){
      throw new Error("[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.")
    }
    
    numbers.map((number) => {
      if (/[^0-9]/g.test(number)){
        throw new Error("[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.")
      }

      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
      }
    });
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
