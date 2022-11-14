const MissionUtils = require("@woowacourse/mission-utils");
const {
  QUESTION,
  ERR_MSG,
  MATCH_MSG,
  WINNING_AMOUNT,
  PRETTY_MSG,
} = require("./constants/constants");
const Vender = require("./Vender");
class App {
  #winningNum;
  #bonusNum;

  #purchaseLottoList;

  #validMatchesList;
  #matchesObj;

  constructor() {
    this.#purchaseLottoList = [];
    this.#validMatchesList = [3, 4, 5, 5.5, 6];
    this.#matchesObj = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
  }
  play() {
    const amount = this.inputPurchaseAmount();
    this.#purchaseLottoList = new Vender(amount).getPurchaseLotto();

    this.setWinningNum();
    this.setBonusNum();

    MissionUtils.Console.print(PRETTY_MSG.winningResult);
    this.calculMatches();

    this.#validMatchesList.map((number) =>
      this.printWinningResult(number, this.#matchesObj[number])
    );

    this.printRate(amount);
  }

  inputPurchaseAmount() {
    let money = 0;
    MissionUtils.Console.readLine(QUESTION.buy, (input) => {
      money = input;
    });
    MissionUtils.Console.close();
    return money;
  }

  calculMatches() {
    for (let i = 0; i < this.#purchaseLottoList.length; i++) {
      let matches = this.compare(this.#purchaseLottoList[i].getNumber());
      if (matches > 2) {
        this.#matchesObj[matches] = this.#matchesObj[matches] + 1;
      }
    }
  }

  setWinningNum() {
    let winningNum = [];
    MissionUtils.Console.readLine(QUESTION.setWinningNum, (input) => {
      winningNum = this.changeNumArray(input);
    });
    MissionUtils.Console.close();
    this.#winningNum = winningNum;
  }

  setBonusNum() {
    MissionUtils.Console.readLine(QUESTION.setBonusNum, (input) => {
      this.#bonusNum = parseInt(input);
    });
    MissionUtils.Console.close();
  }

  changeNumArray(string) {
    const array = string.split(",");
    const numberArray = [];
    array.map((number) => {
      numberArray.push(parseInt(number));
    });
    return numberArray;
  }

  compare(numbers) {
    let matches = 0;

    for (let i = 0; i < 6; i++) {
      if (this.#winningNum.includes(numbers[i])) {
        matches += 1;
      }
    }
    if (matches === 5 && numbers.includes(this.#bonusNum)) {
      matches += 0.5;
    }
    return matches;
  }

  printWinningResult(match, count) {
    MissionUtils.Console.print(MATCH_MSG[match] + ` - ${count}개`);
  }

  printRate(purchaseAmount) {
    let winningAmount = 0;
    this.#validMatchesList.map((matches) => {
      winningAmount += this.#matchesObj[matches] * WINNING_AMOUNT[matches];
    });
    MissionUtils.Console.print(
      `총 수익률은 ${(winningAmount / purchaseAmount) * 100}%입니다.`
    );
  }
}

module.exports = App;
