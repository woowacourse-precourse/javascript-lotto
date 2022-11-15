const { Random, Console } = require("@woowacourse/mission-utils");
const Setting = require("./Setting");
const Exception = require("./Exception");
const Lotto = require("./Lotto");
const { checkMyNumber, getRevenue } = require("./utils");
const exception = new Exception();
class View extends Setting {
  lottoStart() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      exception.isEmpty(money);
      money = Number(money);
      exception.isNumber(money);
      exception.isMultipleOfThousand(money);
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
      Console.print(`[${oneLine.join(", ")}]`);
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
      new Lotto(this.winNumber);
      this.getBonusNumber();
    });
  }
  getBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      this.bonusNumber = Number(bonusNumber);
      exception.isInWinNumber(this.bonusNumber, this.winNumber);
      this.lottoBox.map((oneLine) => {
        checkMyNumber(oneLine, this.winNumber, this.score, this.bonusNumber);
      });
      for (const [key, value] of Object.entries(this.score)) {
        this.reword += key * value;
      }
      this.revenue = getRevenue(this.reword, this.money);
      Console.print("당첨 통계");
      Console.print("---");
      Object.keys(this.score).map((ranking, index) => {
        if (index === 4) {
          return Console.print(
            `${index + 1}개 일치, 보너스 볼 일치 (${Number(
              ranking
            ).toLocaleString()}원) - ${this.score[ranking]}개`
          );
        }
        if (index === 5) {
          return Console.print(
            `${index + 1}개 일치 (${Number(ranking).toLocaleString()}원) - ${
              this.score[ranking]
            }개`
          );
        }
        if (index !== 0) {
          return Console.print(
            `${index + 2}개 일치 (${Number(ranking).toLocaleString()}원) - ${
              this.score[ranking]
            }개`
          );
        }
      });
      Console.print(`총 수익률은 ${this.revenue}%입니다.`);
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
