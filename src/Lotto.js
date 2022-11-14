const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    if (isDuplicated(numbers)) 
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 숫자 6개여야 합니다.");

    for(let i = 0; i < numbers.length; i++) {
      const number = Number(numbers[i]);
      if (isNaN(number)) 
        throw new Error("[ERROR] 숫자만 입력해야 합니다.");
      if (!isInRange(number)) 
        throw new Error("[ERROR] 1부터 45 사이의 숫자여야 합니다.");
    }
  }

}

const isDuplicated = (numbers) => {
  const set = new Set(numbers);
  
  if(set.size !== 6) {
    return true;
  }
  return false;
}

const isInRange = (number) => {
  if(number >=1 && number <= 45) {
      return true;
  }
  return false;
}

module.exports = Lotto;
