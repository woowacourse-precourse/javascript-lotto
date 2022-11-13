const { Random, Console } = require("@woowacourse/mission-utils");
// const { ERROR_MSG_THOUSAND_UNIT } = require("./constants/error-message");
// const { WINNINGS } = require("./constants/winnings");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.lottos = [];
  }

  play() {
    Console.readLine("구입금액을 입력해주세요.\n", (input) => {
      const budget = input.trim();
      const lottoCount = this.calcLottoCount(budget);
      const lottos = this.createLottos(lottoCount);
      this.printLottos(lottoCount, lottos);
      this.finish();
    });
  }

  finish() {
    Console.close();
  }

  createLottoNums() {
    const lottoNums = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNums.sort((a, b) => a - b);
    return lottoNums;
  }

  calcLottoCount(budget) {
    return Number(budget) / 1000;
  }

  createLotto() {
    const lottoNums = this.createLottoNums();
    const lotto = new Lotto(lottoNums);
    return lotto;
  }

  createLottos(lottoCount) {
    const lottos = [];
    for (let count = 0; count < lottoCount; count++) {
      const lotto = this.createLotto();
      lottos.push(lotto);
    }
    return lottos;
  }

  printLottos(lottoCount, lottos) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(lotto.getNumbers());
    });
  }
}

// module.exports = App;
const app = new App();
app.play();
