const MissionUtils = require("@woowacourse/mission-utils");

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

    let tmp = []
    
    numbers.forEach((number)=>{
      if (tmp.includes(number))
        throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
      if(number < 1 || number > 45)
        throw new Error("[ERROR] 로또 번호는 1부터 45사이의 정수만 입력할 수 있습니다.");
    });
  }

}

module.exports = Lotto;
