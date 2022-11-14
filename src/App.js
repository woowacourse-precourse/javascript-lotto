class App {
  play() {}

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

  printRate(purchaseAmoint, winningAmount) {
    MissionUtils.Console.print(
      `총 수익률은 ${(winningAmount / purchaseAmoint) * 100}%입니다.`
    );
  }

  // test() {
  //   this.printRate(8000, 5000);
  // }
}

module.exports = App;
