const MissionUtils = require("@woowacourse/mission-utils");
const Console = require("./Console");
const Validation = require("./Validation");
const Lotto = require("./Lotto");

const prizeObject = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
};

class App {
  constructor() {
    this.money = null;
    this.winNumber = [];
    this.bonusNumber = null;
    this.lottos = [];
  }
  setRankMap() {
    let rankMap = new Map();
    for (let i = 0; i < 6; i++) {
      rankMap.set(i, 0);
    }

    return rankMap;
  }

  checkRanking(rankMap, winningArray) {
    winningArray.forEach((el) => {
      if (rankMap.has(el)) {
        rankMap.set(el, rankMap.get(el) + 1);
      }
    });

    return rankMap;
  }

  calculateEarningRate(rankingMap) {
    let totalPrize = 0;
    for (const item in rankingMap) {
      if (rankingMap[item] !== 0)
        totalPrize += prizeObject[item] * rankingMap[item];
    }

    totalPrize = (totalPrize / this.money) * 100;

    Console.printMessage(`총 수익률은 ${totalPrize.toFixed(1)}%입니다.`);
    Console.close();
  }

  setResult() {
    let rankingMap = this.setRankMap();
    const winningArray = this.lottos.map((lotto) => {
      return lotto.rank(this.winNumber, this.bonusNumber);
    });
    rankingMap = Object.fromEntries(
      this.checkRanking(rankingMap, winningArray)
    );
    Console.printMessage(Console.WINNING_STATUS);
    Console.printMessage(`3개 일치 (5,000원) - ${rankingMap[5]}개`);
    Console.printMessage(`4개 일치 (50,000원) - ${rankingMap[4]}개`);
    Console.printMessage(`5개 일치 (1,500,000원) - ${rankingMap[3]}개`);
    Console.printMessage(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankingMap[2]}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${rankingMap[1]}개`
    );
    this.calculateEarningRate(rankingMap);
  }

  setBonusNumber() {
    Console.askUserInput("\n" + Console.ASK_BONUS_NUMBER, (input) => {
      if (/[^0-9]/g.test(input))
        throw new Error("[Error] 입력된 형식이 올바르지 않습니다.");
      const BOUNS_NUMBER = Number(input);
      if (BOUNS_NUMBER < 1 || 45 < BOUNS_NUMBER)
        throw new Error(
          "[ERROR] 보너스 번호는 1부터 45사이의 숫자여야 합니다."
        );
      if (this.winNumber.includes(BOUNS_NUMBER))
        throw new Error("[ERROR] 당첨 번호에 포함되어 있는 번호입니다.");

      this.bonusNumber = BOUNS_NUMBER;
      this.setResult();
    });
  }

  setWinNumber() {
    Console.askUserInput("\n" + Console.ASK_WIN_NUMBER, (input) => {
      this.winNumber = Validation.checkVaildWinNumber(input);
      this.setBonusNumber();
    });
  }

  printRandomLotto() {
    this.lottos.forEach((lotto) => {
      Console.printMessage(lotto.numberToString());
    });
  }

  generateRandomLottoNumber(lottoCount) {
    return Array.from({ length: lottoCount }, () =>
      MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      )
    );
  }

  setRandomLotto() {
    const LOTTO_COUNT = this.money / 1000;
    Console.printMessage(
      `\n${LOTTO_COUNT}${Console.NUMBER_OF_LOTTO_PURCHASED}`
    );
    this.generateRandomLottoNumber(LOTTO_COUNT).map((lotto) => {
      this.lottos.push(new Lotto(lotto));
    });

    this.printRandomLotto();
    this.setWinNumber();
  }

  setUserQuantityOfLotto() {
    Console.askUserInput(Console.ASK_BUY_LOTTO_AMOUNT, (input) => {
      const AMOUNT = Validation.checkVaildLottoAmount(input);

      this.money = AMOUNT;
      this.setRandomLotto();
    });
  }

  play() {
    this.setUserQuantityOfLotto();
  }
}

const app = new App();
app.play();

module.exports = App;
