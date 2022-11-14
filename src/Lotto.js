const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class Lotto {
  #numbers;

  constructor(numbers) { // 당첨된 로또 번호 6자리 숫자
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (isNaN(numbers)) {
      throw new Error("[ERROR] 당첨 번호는 숫자만 입력해주세요.");
    }

    if (numbers[i] < 1 || numbers[i] > 45) {
      throw new Error("[ERROR] 당첨 번호는 1 ~ 45 사이의 숫자를 입력해주세요.");
    }

    for(let i=0; i<numbers.length; i++) {
      if(numbers[i] === numbers[i+1]) {
        throw new Error("[ERROR] 중복되지 않는 값을 입력해주세요.");
      }
    }
  }

  validationInputBounusNumber(bonusNumber) {
    for(let i=0; i<this.#numbers.length; i++) {
      if (isNaN(bonusNumber)) {
        throw new Error("[ERROR] 보너스 번호는 숫자를 입력해 주세요.");
      }
  
      if (bonusNumber < 1 || bonusNumber > 45) {
        throw new Error("[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자를 입력해주세요.");
      }
  
      if (this.#numbers[i] === bonusNumber) {
        throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
      }
    }    
  }

}

module.exports = Lotto;
