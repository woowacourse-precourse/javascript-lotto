const { Console } = require("@woowacourse/mission-utils");
const CheckValue = require("./CheckValue");
const Message = require("./Message");

class App {
  play() {
    this.requestPay();
  }

  requestPay() {
    Console.readLine(Message.GAME_START, (pay) => {
      this.CheckValue.isValidPay(pay);
      this.countLotto(pay);
    });
  }

  countLotto(pay) {
    this.lottoCount = pay / 1000;
    Console.print(`${this.lottoCount}개를 구매했습니다.`);
  }
}

const app = new App();
app.play();

module.exports = App;
