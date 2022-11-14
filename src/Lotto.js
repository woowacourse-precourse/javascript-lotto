const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers){
    this.#numbers = numbers;
  }

  start(){
    this.enterQuantity();
  }

  enterQuantity(){
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (input) => {
      if ((input % 1000) !== 0) throw new Error("[ERROR] 올바르지 않은 구입금액입니다.");
      const quantity = input / 1000;
    });
  }
}

module.exports = Lotto;
