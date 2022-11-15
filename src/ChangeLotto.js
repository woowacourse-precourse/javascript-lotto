const { Console, Random } = require("@woowacourse/mission-utils");
const { GUIDE, UNIT } = require("./utils/constant");

class ChangeLotto {
  constructor(input) {
    this.input = input;
    this.pcs = UNIT.DEFAULT;
    this.lottoNumbers = UNIT.STORAGE_SPACE;
  }

  sortNumbers(numbers) {
    return [...numbers].sort((pre, cur) => pre - cur);
  }

  generate() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return this.sortNumbers(numbers);
  }

  receiveLotto(pcs) {
    for (let i = 0; i < pcs; i++) {
      this.lottoNumbers.push(this.generate());
    }
  }

  informPcs(pcs) {
    Console.print(`\n${pcs}${GUIDE.PURCHASE}`);
  }

  changePcs() {
    return Number(this.input / UNIT.MONETARY);
  }

  change() {
    this.pcs = this.changePcs();
    this.informPcs(this.pcs);
    this.receiveLotto(this.pcs);
    this.lottoNumbers.forEach((number) =>
      Console.print(`[${number.join(", ")}]`)
    );

    return this.lottoNumbers;
  }
}

module.exports = ChangeLotto;
