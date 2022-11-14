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
      winNumber = winNumber.map((i) => Number(i));
      this.winNumber = this.sortList(winNumber);
      this.getBonusNumber();
    });
  }
  getBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      this.bonusNumber = Number(bonusNumber);
      this.lottoBox.map((oneLine) => {
        this.checkMyNumber(oneLine);
      });
      console.log(this.score);
    });
  }
  checkMyNumber(list) {
    let correctCount = 0;
    if (JSON.stringify(list) === JSON.stringify(this.winNumber)) {
      return (this.score[2000000000] += 1);
    }
    list.map((number) => {
      if (this.winNumber.includes(number)) {
        return (correctCount += 1);
      }
    });
    if (correctCount === 0 || correctCount === 1 || correctCount === 2) {
      return (this.score[0] += 1);
    }
    if (correctCount === 3) {
      return (this.score[5000] += 1);
    }
    if (correctCount === 4) {
      return (this.score[50000] += 1);
    }
    if (correctCount === 5) {
      let difference = list.filter((x) => !this.winNumber.includes(x));
      return difference[difference.length - 1] !== this.bonusNumber
        ? (this.score[1500000] += 1)
        : (this.score[30000000] += 1);
    }
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
