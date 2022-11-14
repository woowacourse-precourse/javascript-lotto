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
  }
  
  inputUserMoney(){
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (answer) => {
      console.log(answer);
    });
  }
}
module.exports = Lotto;
