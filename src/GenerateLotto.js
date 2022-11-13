const { Console, Random } = require("@woowacourse/mission-utils");
const LOTTO_PRICE = 1000;

class GenerateLotto {
  constructor(money) {
    this.count = money / LOTTO_PRICE;
    this.lottos = [];
    this.play();
  }

  play() {
    Console.print(`${this.count}개를 구매했습니다.`);
    this.setRandomNumber(this.count);
  }

  setRandomNumber() {
    for (let count = 0; count < this.count; count++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottos.push(numbers);
      this.lottos[count].sort((a, b) => a - b);
    }
    console.log(this.lottos);
  }

}
module.exports = GenerateLotto;