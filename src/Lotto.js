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
    else { console.log('6자리 숫자를 입력하셨습니다.')}
  }


  // TODO: 추가 기능 구현
}






module.exports = Lotto;
