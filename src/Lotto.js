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
      this.printQuantity(quantity);
      this.makeLotto(quantity);
    });
  }

  printQuantity(quantity){
    MissionUtils.Console.print(`${quantity}개를 구매했습니다.`);
  }

  makeLotto(quantity){
    let uniqueNumbersList = [];
    for (let i=0; i<quantity; i++) uniqueNumbersList.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    this.printLotto(uniqueNumbersList);
  }

  printLotto = (uniqueNumbersList) => {
    uniqueNumbersList.map(numbers => MissionUtils.Console.print(numbers));
  }
}

module.exports = Lotto;
