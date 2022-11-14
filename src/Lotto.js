const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
const InputCheck = require('./InputCheck');
const { generateRandom } = require('../utils/Source.js');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.inputCheck = new InputCheck();
    this.inputCheck.validate(numbers);
    this.#numbers = numbers;
  }

  buyLotto(){
    Console.readLine('구입금액을 입력해 주세요.', (price) => {
      this.inputCheck.priceCheck(price);
      this.amount = price/1000;
      Console.print(`${this.amount}개를 구매했습니다.`);
    });
  }
}
module.exports = Lotto;
