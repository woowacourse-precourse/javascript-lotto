const { Random, Console } = require("@woowacourse/mission-utils");
// const { ERROR_MSG_THOUSAND_UNIT } = require("./constants/error-message");
// const { WINNINGS } = require("./constants/winnings");
const Lotto = require("./Lotto");

class App {
  play() {
    Console.readLine("구입금액을 입력해주세요.\n", (input) => {
      const budget = input.trim();
      const lottoCount = this.calcLottoCount(budget);
      const lottos = this.createLottos(lottoCount);
      this.printLottos(lottoCount, lottos);
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
    this.lottos = lottos;
    return lottos;
  }

  printLottos(lottoCount, lottos) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(lotto.getNumbers());
    });
    this.inputMainNums();
  }

  inputMainNums() {
    Console.readLine("\n당첨 번호를 입력해주세요.\n", (input) => {
      const mainNums = input.split(",");
      this.mainNums = mainNums.map(Number);
      this.inputBonusNum();
    });
  }

  inputBonusNum() {
    Console.readLine("\n보너스 번호를 입력해주세요.\n", (input) => {
      const bonusNum = input;
      this.bonusNum = Number(bonusNum);
      Console.close();
    });
  }
}

// module.exports = App;
const app = new App();
app.play();
