const { Random, Console } = require("@woowacourse/mission-utils");
const Setting = require("./Setting");
class View extends Setting {
  payMoney() {
    console.log("ddd");
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      money = Number(money);
      this.money = money / 1000;
      this.buyLotto();
    });
  }
  printLotto() {
    for (let idx = 0; idx < this.money; idx++) {
      this.lottoBox.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
  }
  handoverLotto() {
    this.lottoBox.map((oneLine) => {
      oneLine.sort(function (a, b) {
        return a - b;
      });
      Console.print(oneLine);
    });
  }
  buyLotto() {
    Console.print(`${this.money}개를 구매했습니다.`);
    this.printLotto();
    this.handoverLotto();
  }
  lottoClose() {
    Console.close();
  }
}

module.exports = View;
