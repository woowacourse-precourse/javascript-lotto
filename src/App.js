const { MissionUtils } = require("@woowacourse/mission-utils");

class App {
  #winningNum;
  #bonusNum;

  #purchaseNumList;
  #purchaseAmount;

  #validMatchesList;

  constructor(numbers) {
    this.#purchaseNumList = [];
    this.#validMatchesList = [3, 4, 5, 5.5, 6];
  }
  play() {}

  generateLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const newLotto = new Lotto(numbers);
    this.#purchaseNumList.push(newLotto);
  }

  buy() {
    let money = 0;
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (input) => {
      money = parseInt(input);
    });
    return money;
  }

  setWinningNum() {
    let winningNum = [];
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (input) => {
      winningNum = this.changeNumArray(input);
    });
    this.#winningNum = winningNum;
  }

  setBonusNum() {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (input) => {
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
    const matchMessages = {
      3: "3개 일치 (5,000원)",
      4: "4개 일치 (50,000원)",
      5: "5개 일치 (1,500,000원)",
      5.5: "5개 일치, 보너스 볼 일치 (30,000,000원)",
      6: "6개 일치 (2,000,000,000원)",
    };
    MissionUtils.Console.print(matchMessages[match] + ` - ${count}개`);
  }

  printRate(matchesObj) {
    const winningAmountObj = {
      3: 5000,
      4: 50000,
      5: 1500000,
      5.5: 30000000,
      6: 2000000000,
    };
    let winningAmount = 0;
    this.#validMatchesList.map((matches) => {
      winningAmount += matchesObj[matches] * winningAmountObj[matches];
    });
    MissionUtils.Console.print(
      `총 수익률은 ${(winningAmount / this.#purchaseAmount) * 100}%입니다.`
    );
  }
}

module.exports = App;
