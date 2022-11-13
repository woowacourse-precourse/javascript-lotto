const { Console } = require("@woowacourse/mission-utils");
const CheckValue = require("./CheckValue");
const Lotto = require("./Lotto");
const Message = require("./Message");
const NumberGenerator = require("./NumberGenerator");

class App {
  constructor() {
    this.checkValue = new CheckValue();
    this.numberGenerator = new NumberGenerator();
    this.lottoCount = 0;
  }

  play() {
    this.requestPay();
    this.requestNumber();
  }

  requestPay() {
    Console.readLine(Message.GAME_START, (pay) => {
      this.checkValue.isValidPay(pay);
      this.countLotto(pay);
      this.printLotto(this.lottoCount);
    });
  }

  countLotto(pay) {
    this.lottoCount = pay / 1000;
    Console.print(`${this.lottoCount}개를 구매했습니다.`);
  }

  printLotto() {
    const lottoArr = this.numberGenerator.drawLottery(this.lottoCount);
    lottoArr.map((lotto) => {
      new Lotto(lotto);
      Console.print(lotto);
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
    Console.readLine(Message.SET_BONUSNUMBER, () => {});
  }
}

const app = new App();
app.play();

module.exports = App;
