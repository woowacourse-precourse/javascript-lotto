const GenerateNumber = require("./GenerateNumber");

const { Console } = require("@woowacourse/mission-utils");
const { GUIDE, UNIT } = require("./utils/constant");

class ChangeLotto {
  constructor() {
    this.lottoNumber = new GenerateNumber();
    this.pcs = UNIT.DEFAULT;
    this.lottoNumbers = UNIT.STORAGE_SPACE;
  }

  changePcs(amount) {
    return Number(amount / UNIT.MONETARY);
  }

  informPcs(pcs) {
    Console.print(`\n${pcs}${GUIDE.PURCHASE}`);
  }

  receiveLotto(pcs) {
    for (let i = 0; i < pcs; i++) {
      this.lottoNumbers.push(this.lottoNumber.generate());
    }
  }

  change(input) {
    this.pcs = this.changePcs(input);
    this.informPcs(this.pcs);
    this.receiveLotto(this.pcs);
    this.lottoNumbers.forEach((v) => Console.print(`[${v.join(", ")}]`));
    return this.lottoNumbers;
  }
}

module.exports = ChangeLotto;
