const { Console } = require("@woowacourse/mission-utils");
const CheckValue = require("./CheckValue");
const Lotto = require("./Lotto");
const Message = require("./Message");
const NumberGenerator = require("./NumberGenerator");

class App {
  constructor() {
    this.numberGenerator = new NumberGenerator();
    this.lottoCount = null;
    this.lottoArr = [];
  }

  play() {
    this.requestPay();
    this.requestNumber();
    this.printWinning();
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
      lottoNumber = lottoNumber.split(",").map((number) => Number(number));
      new Lotto(lottoNumber);
      this.requestBonusNumber;
    });
  }

  requestBonusNumber() {
    Console.readLine(Message.SET_BONUSNUMBER, (bonusNumber) => {
      new Lotto(bonusNumber);
    });
  }

  printWinning() {
    Console.print(Message.WINNING);
  }
}

const app = new App();
app.play();

module.exports = App;
