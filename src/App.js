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
