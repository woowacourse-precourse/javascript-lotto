const { Random, Console } = require("@woowacourse/mission-utils");
const {
  RANKS,
  WINNINGS_NUM,
  WINNINGS_STR,
} = require("./constants/winnings.js");
const Lotto = require("./Lotto");
const Checker = require("./Checker");

class App {
  constructor() {
    this.checker = new Checker();
  }

  play() {
    Console.readLine("구입금액을 입력해주세요.\n", (input) => {
      const budget = input.trim();
      this.budget = +budget;
      const lottoCount = this.calcLottoCount(budget);
      const lottos = this.createLottos(lottoCount);
      this.printLottos(lottoCount, lottos);
    });
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
      const mainNums = this.checker.validateMainNums(input);
      this.mainNums = mainNums;
      this.inputBonusNum();
    });
  }

  inputBonusNum() {
    Console.readLine("\n보너스 번호를 입력해주세요.\n", (input) => {
      const bonusNum = this.checker.validateBonusNum(input, this.mainNums);
      this.bonusNum = bonusNum;
      this.checkAllLottos();
      Console.close();
    });
  }

  checkAllLottos() {
    this.lottoResult = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      nothing: 0,
    };

    this.lottos.forEach((lotto) => this.checkLotto(lotto));
    this.getMatchResult();
  }

  checkLotto(lotto) {
    const lottoNums = lotto.getNumbers();
    const mainCount = this.checkMainNumMatch(lottoNums);
    const bonusCount = this.checkBonusNumMatch(lottoNums);
    const resultLotto = this.getResultLotto(mainCount, bonusCount);
    this.lottoResult[resultLotto]++;
  }

  checkMainNumMatch(lotto) {
    let mainMatch = 0;
    lotto.forEach((num) => {
      if (this.mainNums.includes(num)) {
        mainMatch++;
      }
    });
    return mainMatch;
  }

  checkBonusNumMatch(lotto) {
    return lotto.includes(this.bonusNum) ? 1 : 0;
  }

  getResultLotto(mainCount, bonusCount) {
    if (mainCount === 6) return "first";
    if (mainCount === 5) return bonusCount ? "second" : "third";
    if (mainCount === 4) return "fourth";
    if (mainCount === 3) return "fifth";
    return "nothing";
  }

  getMatchResult() {
    Console.print(this.lottoResult);
    Console.print("\n당첨 통계");
    Console.print("---");
    Console.print(
      `3개 일치 (${WINNINGS_STR.fifth}원) - ${this.lottoResult.fifth}개`
    );
    Console.print(
      `4개 일치 (${WINNINGS_STR.fourth}원) - ${this.lottoResult.fourth}개`
    );
    Console.print(
      `5개 일치 (${WINNINGS_STR.third}원) - ${this.lottoResult.third}개`
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (${WINNINGS_STR.second}원) - ${this.lottoResult.second}개`
    );
    Console.print(
      `6개 일치 (${WINNINGS_STR.first}원) - ${this.lottoResult.first}개`
    );
    this.getYieldResult();
  }

  getYieldResult() {
    const earnings = RANKS.reduce((sumValue, rank) => {
      return sumValue + this.lottoResult[rank] * WINNINGS_NUM[rank];
    }, 0);
    const yieldResult = ((earnings * 100) / this.budget).toFixed(1);
    Console.print(`총 수익률은 ${yieldResult}%입니다.`);
  }

  finish() {
    Console.close();
  }
}

// module.exports = App;
const app = new App();
app.play();
