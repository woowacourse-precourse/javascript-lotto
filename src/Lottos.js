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
    const printList = [];
    this.lottos.forEach((lotto) => {
      printList.push(lotto.print());
    });
    Console.print(printList.join("\n"));
  }

  get() {
    return this.lottos;
  }
}
module.exports = Lottos;
