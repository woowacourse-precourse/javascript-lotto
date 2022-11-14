const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const {
  QUESTION,
  ERR_MSG,
  MATCH_MSG,
  WINNING_AMOUNT,
  PRETTY_MSG,
} = require("./constants/constants");
class App {
  #winningNum;
  #bonusNum;

  #purchaseNumList;
  #purchaseAmount;

  #validMatchesList;

  constructor() {
    this.#purchaseNumList = [];
    this.#validMatchesList = [3, 4, 5, 5.5, 6];
  }
  play() {
    let matches = 0;
    let matchesObj = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
    // 1. 구입금액 입력
    const amount = this.buy();
    this.#purchaseAmount = this.validAmount(amount);

    // 2. 구매 내역 출력
    const purchaseCount = this.#purchaseAmount / 1000;

    MissionUtils.Console.print(`${purchaseCount}개를 구매했습니다.`);
    for (let i = 0; i < purchaseCount; i++) {
      this.generateLotto();
    }
    this.#purchaseNumList.map((lotto) =>
      MissionUtils.Console.print(lotto.printString())
    );

    // 3. 당첨 번호 입력
    this.setWinningNum();
    this.setBonusNum();

    // 4. 당첨 통계 계산
    MissionUtils.Console.print(PRETTY_MSG.winningResult);
    for (let i = 0; i < purchaseCount; i++) {
      matches = this.compare(this.#purchaseNumList[i].getNumber());
      if (matches > 2) {
        matchesObj[matches] = matchesObj[matches] + 1;
      }
    }
    this.#validMatchesList.map((number) =>
      this.printWinningResult(number, matchesObj[number])
    );
    this.printRate(matchesObj);
  }

  validAmount(amount) {
    if (isNaN(+amount)) {
      throw new Error(ERR_MSG.notNumber);
    }
    if (!(amount % 1000 === 0 && amount / 1000 !== 0)) {
      throw new Error(ERR_MSG.notThousand);
    }
    return amount;
  }

  generateLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const newLotto = new Lotto(numbers);
    this.#purchaseNumList.push(newLotto);
  }

  buy() {
    let money = 0;
    MissionUtils.Console.readLine(QUESTION.buy, (input) => {
      money = input;
    });
    return money;
  }

  setWinningNum() {
    let winningNum = [];
    MissionUtils.Console.readLine(QUESTION.setWinningNum, (input) => {
      winningNum = this.changeNumArray(input);
    });
    this.#winningNum = winningNum;
  }

  setBonusNum() {
    MissionUtils.Console.readLine(QUESTION.setBonusNum, (input) => {
      this.#bonusNum = parseInt(input);
    });
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

  printRate(matchesObj) {
    let winningAmount = 0;
    this.#validMatchesList.map((matches) => {
      winningAmount += matchesObj[matches] * WINNING_AMOUNT[matches];
    });
    MissionUtils.Console.print(
      `총 수익률은 ${(winningAmount / this.#purchaseAmount) * 100}%입니다.`
    );
  }
}

module.exports = App;
