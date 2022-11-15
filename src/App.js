const MissionUtils = require("@woowacourse/mission-utils");
const { REQUEST_MESSAGE, ERROR_MESSAGE } = require('./Message');
const Lotto = require("./Lotto");
const { Random, Console } = MissionUtils;

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
    this.lottes = [];
    this.winNumbers = [];
    this.bonusNumber = null;
  }

  generateRankObject() {
    let rankObject = {};
    for (let i = 0; i < 6; i++) {
      rankObject[i] = 0;
    }
    return rankObject;
  }

  countingRank(rankObject, winArr) {
    winArr.forEach((number) => {
      rankObject[number]++;
    });
  }

  earningRate(rankObject) {
    let prizeMoney = 0;
    for (let i = 1; i <= 5; i++) {
      if (rankObject[i] != 0) prizeMoney += prizeObject[i] * rankObject[i];
    }
    MissionUtils.Console.print(
      `총 수익률은 ${((prizeMoney / this.money) * 100).toFixed(1)}%입니다.`
    );
    MissionUtils.Console.close();
  }

  result() {
    const rankObject = this.generateRankObject();
    const winArr = this.lottes.map((lotte) =>
      lotte.rank(this.winNumbers, this.bonusNumber)
    );
    this.countingRank(rankObject, winArr);
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${rankObject[5]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${rankObject[4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${rankObject[3]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankObject[2]}개`
    );
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${rankObject[1]}개`);
    this.earningRate(rankObject);
  }

  viewLottes() {
    this.lottes.forEach((lotte) => {
      MissionUtils.Console.print(lotte.toString());
    });
  }

  buy() {
    let remain = this.money;
    let count = parseInt(this.money / 1000);
    while (remain > 0) {
      remain -= 1000;
      const numbers = MissionUtils.Random
        .pickUniqueNumbersInRange(1, 45, 6)
        .sort((a, b) => a - b);
      this.lottes.push(new Lotto(numbers));
    }
    MissionUtils.Console.print(count + "개를 구매했습니다.");
    this.viewLottes();
    this.result();
  }

  setBonusNumber() {
    MissionUtils.Console.readLine(REQUEST_MESSAGE.LUCKY_NUMBER, (line) => {
      if (!/^\d+$/.test(line))
        throw new Error(ERROR_MESSAGE.GAME_FORM);
      const bonusNumber = parseInt(line);
      if (bonusNumber < 1 || 45 < bonusNumber)
        throw new Error(ERROR_MESSAGE.NUMBER_RANGE);
      if (this.winNumbers.includes(line))
        throw new Error(
          ERROR_MESSAGE.DUPLICATION
        );
      this.bonusNumber = bonusNumber;
      this.buy();
    });
  }

  setWinNumbers() {
    MissionUtils.Console.readLine(REQUEST_MESSAGE.NUMBERS, (line) => {
      if (!/^(\d{1,2}[,]){5}\d{1,2}$/.test(line))
        throw new Error(ERROR_MESSAGE.GAME_FORM);
      const numbers = line.split(",").map((number) => {
        if (number < 1 || 45 < number)
          throw new Error(
            ERROR_MESSAGE.NUMBER_RANGE
          );
        return parseInt(number);
      });
      const numberSet = new Set(numbers);
      if (numberSet.size != 6)
        throw new Error(ERROR_MESSAGE.DUPLICATION);
      this.winNumbers = numbers;
      this.setBonusNumber();
    });
  }

  setMoney() {
    MissionUtils.Console.readLine(REQUEST_MESSAGE.MONEY, (line) => {
      if (!/^\d+$/.test(line))
        throw new Error(ERROR_MESSAGE.ONLY_NUMBER);
      const money = parseInt(line);
      if (money === 0)
        throw new Error(ERROR_MESSAGE.GAME_BLANK);
      if (money % 1000 !== 0)
        throw new Error(ERROR_MESSAGE.GAME_UNIT);
      this.money = money;
      this.setWinNumbers();
    });
  }

  play() {
    this.setMoney();
  }
}

module.exports = App;
