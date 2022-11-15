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
    const numPattern = /[^0-9]/g;	
    if (!numPattern.test(numbers)) {
      throw new Error("[ERROR] 숫자만 입력하세요.");
    }
    const uniqueNums = new Set(numbers);
    if (uniqueNums.size !== numbers.length) {
      throw new Error("[ERROR] 중복 되지 않는 숫자를 입력하세요.");
    }
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 1~45 사이에 숫자만 입력하세요.");
      }
  });
  }
}

module.exports = Lotto;
