const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/constant.js");

class Lotto {
  #numbers;
  
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }
  
  askLottoCost(){
    Console.readLine(`${MESSAGE.START}\n`,(cost) => {
      this.cost = Number(cost);
      this.lottoCount = parseInt(this.cost / 1000);
      console.log(this.lottoCount);
    })
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}

module.exports = Lotto;
