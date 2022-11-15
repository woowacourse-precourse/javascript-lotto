const { Console, Random } = require('@woowacourse/mission-utils');
const Message = require("./Message.js");

class NumberGenerator {
  #userLottoNumber;

  constructor(count) {
    this.count = count;
    this.issueUserNumber();
  }

  issueUserNumber() {
    Console.print(`${this.count}${Message.INFORMATION.lottoCount}`);
    const lottoArray = [];
    while (lottoArray.length < this.count) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b) => a-b);
      lottoArray.push(lotto);
      Console.print(`[${lotto.join(", ")}]`);
    }

    this.#userLottoNumber = lottoArray;
  }

  getUserNumber() {
    return this.#userLottoNumber;
  }
}

module.exports = NumberGenerator;
