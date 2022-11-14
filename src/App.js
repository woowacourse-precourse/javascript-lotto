const { NUMBER_OF_LOTTO_PURCHASED } = require("./Console");
const Console = require("./Console");
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

  checkRanking(mapObj, winningArray) {
    winningArray.forEach((el) => {
      if (mapObj.has(el)) {
        mapObj.set(el, mapObj.get(el) + 1);
      }
    });

    return mapObj;
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
    Console.printMessage("\n당첨통계" + "\n---");
    Console.printMessage(`3개 일치 (5,000원) - ${rankingMap[5]}개`);
    Console.printMessage(`4개 일치 (50,000원) - ${rankingMap[4]}개`);
    Console.printMessage(`5개 일치 (1,500,000원) - ${rankingMap[3]}개`);
    Console.printMessage(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankingMap[2]}개`
    );
    Console.printMessage(`6개 일치 (2,000,000,000원) - ${rankingMap[1]}개`);
    this.calculateEarningRate(rankingMap);
  }

  setBonusNumber() {
    Console.askUserInput(`\n${Console.ASK_BONUS_NUMBER}`, (input) => {
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
      Console.close();
    });
  }

  setWinNumber() {
    Console.askUserInput(`\n${Console.ASK_WIN_NUMBER}`, (winningNumber) => {
      if (!/^(\d{1,2}[,]){5}\d{1,2}$/.test(winningNumber))
        throw new Error("[ERROR] 입력된 형식이 올바르지 않습니다.");
      const NUMBER = winningNumber.split(",").map((number) => {
        if (number < 1 || 45 < number)
          throw new Error(
            "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다."
          );

        return Number(number);
      });
      if (new Set(NUMBER).size !== 6)
        throw new Error("[ERROR] 번호는 중복되지 않아야 합니다.");

      this.winNumber = NUMBER;

      this.setBonusNumber();
    });
  }

  printRandomLotto() {
    const LOTTO_COUNT = this.money / 1000;
    Console.printMessage(`\n${LOTTO_COUNT}${NUMBER_OF_LOTTO_PURCHASED}`);
    Lotto.generateRandomLottoNumber(LOTTO_COUNT).map((lotto) => {
      this.lottos.push(new Lotto(lotto));
      Console.printMessage(lotto);
    });

    this.setWinNumber();
  }

  setUserQuantityOfLotto() {
    Console.askUserInput(Console.ASK_BUY_LOTTO_AMOUNT, (input) => {
      if (/[^0-9]/g.test(input))
        throw new Error("[ERROR] 구입금액에 문자가 포함되어 있습니다.");
      const MONEY = input;
      if (Number(MONEY) % 1000 !== 0)
        throw new Error("[ERROR] 1000원 단위의 금액을 입력하세요.");
      if (Number(MONEY) <= 0)
        throw new Error("[ERROR] 구입급액이 0보다 커야 합니다.");

      this.money = MONEY;
      this.printRandomLotto();
    });
  }

  play() {
    this.setUserQuantityOfLotto();
  }
}

const app = new App();
app.play();

module.exports = App;
