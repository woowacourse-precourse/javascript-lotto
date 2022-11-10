const { Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    this.buyLotteryTicket();
  }

  buyLotteryTicket() {
    Console.readLine("구입금액을 입력해 주세요.", (money) => {
      Console.print(money);
      Console.close();
    });
  }
}

module.exports = App;
