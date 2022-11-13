const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const LOTTO_PRICE = 1000;

class GenerateLotto {
  lotto;
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
    this.userInput();
  }

  userInput() {
    Console.print('당첨 번호를 입력해 주세요.');
    Console.readLine('', (numbers) => {
      this.lotto = new Lotto(numbers);
    })
  }

}
module.exports = GenerateLotto;