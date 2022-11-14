const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;

  constructor(numbers) {
    // this.test();
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  generateLotto() {
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    lotto.sort((a, b) => a - b);
    return lotto;
  }

  buy() {
    let money = 0;
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (input) => {
      money = parseInt(input);
    });
    return money;
  }

  readWinningNum() {
    let winningNum = [];
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (input) => {
      winningNum = this.changeNumArray(input);
    });
    return winningNum;
  }

  readBonusNum() {
    let bonusNum = 0;
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (input) => {
      bonusNum = parseInt(input);
    });
    return bonusNum;
  }

  changeNumArray(string) {
    const array = string.split(",");
    const numberArray = [];
    array.map((number) => {
      numberArray.push(parseInt(number));
    });
    return numberArray;
  }

  compare(userNum) {
    let winningNum = this.#numbers.slice(0, 6);
    let bonusNum = this.#numbers.slice(6, 7);
    let matches = 0;

    for (let i = 0; i < 6; i++) {
      if (winningNum.includes(userNum[i])) {
        console.log(userNum[i], winningNum);
        matches += 1;
      }
    }
    if (matches === 5 && userNum.includes(bonusNum)) {
      matches += 0.5;
    }
    return matches;
  }

  // test() {
  //   MissionUtils.Console.print(this.compare([1, 2, 3, 4, 5, 6]));
  // }
}

module.exports = Lotto;
