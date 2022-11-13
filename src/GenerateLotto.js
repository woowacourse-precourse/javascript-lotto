const { Console, Random } = require("@woowacourse/mission-utils");
const LOTTO_PRICE = 1000;

class GenerateLotto {
  constructor(money) {
    this.count = money / LOTTO_PRICE;
    this.play();
  }
  play() {
    Console.print(`${this.count}개를 구매했습니다.`);
  }


}
module.exports = GenerateLotto;