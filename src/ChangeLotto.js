const GenerateNumber = require("./GenerateNumber");

const { Console } = require("@woowacourse/mission-utils");
const { GUIDE, UNIT } = require("./utils/constant");

class ChangeLotto {
  constructor(input) {
    this.input = input;
    this.lottoNumber = new GenerateNumber();
    this.pcs = UNIT.DEFAULT;
    this.lottoNumbers = UNIT.STORAGE_SPACE;
  }

  changePcs() {
    return Number(this.input / UNIT.MONETARY);
  }

  informPcs(pcs) {
    Console.print(`\n${pcs}${GUIDE.PURCHASE}`);
  }

  receiveLotto(pcs) {
    for (let i = 0; i < pcs; i++) {
      this.lottoNumbers.push(this.lottoNumber.generate());
    }
  }

  change() {
    this.pcs = this.changePcs();
    this.informPcs(this.pcs);
    this.receiveLotto(this.pcs);
    this.lottoNumbers.forEach((v) => Console.print(`[${v.join(", ")}]`));
    return this.lottoNumbers;
  }
}

module.exports = ChangeLotto;
