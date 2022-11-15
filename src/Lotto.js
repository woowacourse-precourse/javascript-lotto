const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;
  #bonusNum;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.#bonusNum = bonusNum;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    
    const uniqueNums = new Set(numbers);
    if (uniqueNums.size !== numbers.length){
      throw new Error("[ERROR] 중복 되지 않는 숫자를 입력하세요.")
    }
    
    const numPattern = /[^1-45]/g;
    if(numPattern.test(numbers)){
      throw new Error("[ERROR] 1~45 사이의 숫자만 입력하세요.")
    }
  }

  isDuplicate(numbers,bonusNum){
    if(numbers.includes(bonusNum))
    throw new Error("[ERROR] 보너스번호는 당첨번호와 중복되지 않게 입력하세요.")
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
