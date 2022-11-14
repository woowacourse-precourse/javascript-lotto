const { Random, Console } = require("@woowacourse/mission-utils");
const Setting = require("./Setting");
class View extends Setting {
  lottoStart() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      money = Number(money);
      this.money = money / 1000;
      this.buyLotto();
      this.getWinNumber();
    });
  }
  printLotto() {
    for (let idx = 0; idx < this.money; idx++) {
      this.lottoBox.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
  }
  handoverLotto() {
    this.lottoBox.map((oneLine) => {
      oneLine = this.sortList(oneLine);
      Console.print(oneLine);
    });
  }
  buyLotto() {
    Console.print(`${this.money}개를 구매했습니다.`);
    this.printLotto();
    this.handoverLotto();
  }
  getWinNumber() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (winNumber) => {
      winNumber = winNumber.split(",");
      this.winNumber = this.sortList(winNumber);
      console.log(this.winNumber);
      this.getBonusNumber();
    });
  }
  getBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      this.bonusNumber = Number(bonusNumber);
      console.log(this.bonusNumber);
      this.lottoClose();
    });
  }
  sortList(list) {
    list = list.sort(function (a, b) {
      return a - b;
    });
    return list;
  }
  lottoClose() {
    Console.close();
  }
}

module.exports = View;
