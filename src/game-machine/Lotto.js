const MissionUtils = require("@woowacourse/mission-utils");
const DrawLotto = require("../draw-machine/DrawLotto");
const CalculateLotto = require("./CalculateLotto");
const ResultStats = require("./ResultStats");

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
    this.printLottoNumbersList(numbers);
  }
  
  printLottoNumbersList(numbers){
    MissionUtils.Console.print(numbers);
  }

}
module.exports = Lotto;
