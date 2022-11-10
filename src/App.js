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
    wConsole.print(
      `총 수익률은 ${((prizeMoney / this.money) * 100).toFixed(1)}%입니다.`
    );
    wConsole.close();
  }

  result() {
    const rankObject = this.generateRankObject();
    const winArr = this.lottes.map((lotte) =>
      lotte.rank(this.winNumbers, this.bonusNumber)
    );
    this.countingRank(rankObject, winArr);
    wConsole.print(`3개 일치 (5,000원) - ${rankObject[5]}개`);
    wConsole.print(`4개 일치 (50,000원) - ${rankObject[4]}개`);
    wConsole.print(`5개 일치 (1,500,000원) - ${rankObject[3]}개`);
    wConsole.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankObject[2]}개`
    );
    wConsole.print(`6개 일치 (2,000,000,000원) - ${rankObject[1]}개`);
    this.earningRate(rankObject);
  }

  viewLottes() {
    this.lottes.forEach((lotte) => {
      wConsole.print(lotte.toString());
    });
  }

  buy() {
    let remain = this.money;
    let count = parseInt(this.money / 1000);
    while (remain > 0) {
      remain -= 1000;
      const numbers = wRandom
        .pickUniqueNumbersInRange(1, 45, 6)
        .sort((a, b) => a - b);
      this.lottes.push(new Lotto(numbers));
    }
    wConsole.print(count + "개를 구매했습니다.");
    this.viewLottes();
    this.result();
  }
  
  setBonusNumber() {
    wConsole.readLine("보너스 번호를 입력해 주세요.\n", (line) => {
      if (!/^\d+$/.test(line))
        throw new Error("[ERROR] 보너스 번호의 형식이 올바르지 않습니다.");
      const bonusNumber = parseInt(line);
      if (bonusNumber < 1 || 45 < bonusNumber)
        throw new Error("[ERROR] 보너스 번호가 범위를 벗어났습니다.");
      if (this.winNumbers.includes(line))
        throw new Error(
          "[ERROR] 보너스 번호가 이미 당첨번호에 포함되어 있습니다."
        );
      this.bonusNumber = bonusNumber;
      this.buy();
    });
  }
  setWinNumbers() {
    wConsole.readLine("당첨 번호를 입력해 주세요.\n", (line) => {
      if (!/^(\d{1,2}[,]){5}\d{1,2}$/.test(line))
        throw new Error("[ERROR] 입력형식이 올바르지 않습니다.");
      const numbers = line.split(",").map((number) => {
        if (number < 1 || 45 < number)
          throw new Error(
            "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다."
          );
        return parseInt(number);
      });
      const numberSet = new Set(numbers);
      if (numberSet.size != 6)
        throw new Error("[ERROR] 중복번호가 포함되어 있습니다.");
      this.winNumbers = numbers;
      this.setBonusNumber();
    });
  }

  setMoney() {
    wConsole.readLine("구입금액을 입력해 주세요.\n", (line) => {
      if (!/^\d+$/.test(line))
        throw new Error("[ERROR] 구입금액에 문자가 포함되어 있습니다.");
      const money = parseInt(line);
      if (money % 1000 !== 0)
        throw new Error("[ERROR] 구입금액의 단위로 적절하지 않습니다.");
      this.money = money;
      this.setWinNumbers();
    });
  }

  play() {
    this.setMoney();
  }
}

module.exports = App;
