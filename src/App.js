const { Console } = require("@woowacourse/mission-utils");
const CheckValue = require("./CheckValue");
const Lotto = require("./Lotto");
const Message = require("./Message");
const NumberGenerator = require("./NumberGenerator");

class App {
  constructor() {
    this.lotto = new Lotto();
    this.numberGenerator = new NumberGenerator();
    this.lottoCount = null;
    this.lottoWinningCount = [];
    this.lottoWinningCountList = [0, 0, 0, 0, 0];
    this.lottoArr = [];
    this.userLottoNumber = null;
    this.userBonusLottoNumber = null;
  }

  play() {
    this.requestPay();
    this.requestNumber();
    this.printWinning();
    this.printRevenueRate();
  }

  requestPay() {
    Console.readLine(Message.GAME_START, (pay) => {
      new CheckValue(pay);
      this.setLotto(pay);
    });
  }

  setLotto(pay) {
    this.lottoCount = pay / 1000;
    this.lottoArr = this.numberGenerator.drawLottery(this.lottoCount);
    this.printLotto();
  }

  printLotto() {
    Console.print(`${this.lottoCount}개를 구매했습니다.`);
    this.lottoArr.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  requestNumber() {
    Console.readLine(Message.SET_NUMBER, (lottoNumber) => {
      this.userLottoNumber = lottoNumber
        .split(",")
        .map((number) => Number(number));
      this.lotto.validate(this.userLottoNumber);
      this.requestBonusNumber;
    });
  }

  requestBonusNumber() {
    Console.readLine(Message.SET_BONUSNUMBER, (bonusNumber) => {
      this.lotto.validateBonusNumber(bonusNumber, this.userLottoNumber);
      this.userBonusLottoNumber = bonusNumber;
    });
  }

  printWinning() {
    Console.print(Message.WINNING);
    this.setWinningList();
  }

  setWinningList() {
    const winningList = [
      "3개 일치 (5,000원)",
      "4개 일치 (50,000원)",
      "5개 일치 (1,500,000원)",
      "5개 일치, 보너스 볼 일치 (30,000,000원)",
      "6개 일치 (2,000,000,000원)",
    ];

    this.winningCalculate(this.userLottoNumber, this.userBonusLottoNumber);

    for (let i = 0; i < winningList.length; i++) {
      Console.print(`${winningList[i]} - ${this.lottoWinningCountList[i]}개`);
    }
  }

  winningCalculate(lottoNumber, bonusLottoNumber) {
    this.lottoArr.forEach((lotto) => {
      this.lottoWinningCount.push(
        lotto.filter((number) => lottoNumber.includes(number))
      );
    });

    this.lottoWinningCount.forEach((count) => {
      if (count.length === 3) this.lottoWinningCountList[0]++;
      if (count.length === 4) this.lottoWinningCountList[1]++;
      if (count.length === 5 && this.count.includes(bonusLottoNumber))
        this.lottoWinningCountList[3]++;
      if (count.length === 5) this.lottoWinningCountList[2]++;
      if (count.length === 6) this.lottoWinningCountList[4]++;
    });
  }

  getRevenueRate() {
    const winningAmount = [5000, 50000, 1500000, 30000000, 2000000000];
    let revenue = 0;

    for (let i = 0; i < winningAmount.length; i++) {
      revenue = winningAmount[0] * this.lottoWinningCountList[0];
    }

    return (revenue / (this.lottoCount * 1000)) * 100;
  }

  printRevenueRate() {
    const result = this.getRevenueRate();

    Console.print(`총 수익률은 ${result}%입니다.`);
  }
}

module.exports = App;
