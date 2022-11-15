const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }
  validate(numbers) {
    if (numbers.length!== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if(new Set(numbers).size!==6){
      throw new Error("[ERROR] 중복 입력된 번호가 있습니다.");
    }
    for(let i=0;i<6;i++){
      if(numbers[i]<0 && numbers[i]>45){
        throw new Error("[ERROR] 잘못된 로또 번호입니다.");
      }
    }
    return true;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
