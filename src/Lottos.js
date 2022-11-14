const { Console } = require("@woowacourse/mission-utils");
const { LOTTOS_PRINT } = require("./Constant");

class Lottos {
  constructor() {
    this.lottos = [];
  }

  add(lotto) {
    this.lottos.push(lotto);
  }

  print() {
    Console.print(`\n${this.lottos.length}${LOTTOS_PRINT}`);
    this.lottos.forEach((lotto) => {
      lotto.print(lotto);
    });
  }

  get() {
    return this.lottos;
  }
}
module.exports = Lottos;
