const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

const mConsole = MissionUtils.Console;
const mRandom = MissionUtils.Random;

class LottoController {
  constructor() {
    this.lottoAmount = null;
    this.boughtLotto = [];
  }

  countLottoAmount(checkedMoney) {
    this.lottoAmount = checkedMoney / 1000;
    this.generateLottoNumbers(this.lottoAmount);
  }

  printLottoAmount() {
    mConsole.print(`\n${this.lottoAmount}개를 구매했습니다.`);
  }

  generateLottoNumbers(lottoAmount) {
    for (let count = 0; count < lottoAmount; count++) {
      const lotto = new Lotto(mRandom.pickUniqueNumbersInRange(1, 45, 6));
      this.boughtLotto.push(lotto);
    }
  }

  printLottoList() {
    this.boughtLotto.forEach((number) => {
      number.printNumbers();
    });
  }
}

module.exports = LottoController;
