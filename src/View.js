const { Random, Console } = require("@woowacourse/mission-utils");
const Setting = require("./Setting");
const Exception = require("./Exception");
const Lotto = require("./Lotto");
const { checkMyNumber, getRevenue } = require("./utils");
const exception = new Exception();
class View {
  constructor() {
    this.lottoBox = [];
    this.money;
    this.reword = 0;
    this.revenue;
    this.winNumber;
    this.bonusNumber;
    this.score = {
      0: 0,
      5000: 0,
      50000: 0,
      1500000: 0,
      30000000: 0,
      2000000000: 0,
    };
  }
  lottoStart() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.isEmpty(money);
      money = Number(money);
      this.isNumber(money);
      this.isMultipleOfThousand(money);
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
      // new Lotto(this.winNumber);
      this.getBonusNumber();
    });
  }
  getBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      this.bonusNumber = Number(bonusNumber);
      this.isInWinNumber(this.bonusNumber, this.winNumber);
      this.lottoBox.map((oneLine) => {
        this.checkMyNumber(
          oneLine,
          this.winNumber,
          this.score,
          this.bonusNumber
        );
      });
      for (const [key, value] of Object.entries(this.score)) {
        this.reword += key * value;
      }
      this.revenue = this.getRevenue(this.reword, this.money);
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
  isEmpty(money) {
    if (money === "0" || money === "" || money === null) {
      throw new Error("[ERROR] : 1000원 이상의 금액을 입력하세요.");
    }
  }
  isMultipleOfThousand(money) {
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] : 금액은 1000의 배수여야 합니다.");
    }
    return true;
  }
  isNumber(text) {
    if (isNaN(text)) {
      throw new Error("[ERROR] : 숫자만 입력 가능합니다.");
    }
    return true;
  }
  checkMyNumber = (list, winNumber, score, bonusNumber) => {
    let correctCount = 0;
    if (JSON.stringify(list) === JSON.stringify(winNumber)) {
      return (score[2000000000] += 1);
    }
    list.map((number) => {
      if (winNumber.includes(number)) {
        return (correctCount += 1);
      }
    });
    if (correctCount === 0 || correctCount === 1 || correctCount === 2) {
      return (score[0] += 1);
    }
    if (correctCount === 3) {
      return (score[5000] += 1);
    }
    if (correctCount === 4) {
      return (score[50000] += 1);
    }
    if (correctCount === 5) {
      const difference = list.filter((x) => !winNumber.includes(x));
      return difference[difference.length - 1] !== bonusNumber
        ? (score[1500000] += 1)
        : (score[30000000] += 1);
    }
  };
  getRevenue = (reword, money) => {
    const revenue = (reword / (money * 1000)) * 100;
    return +(Math.round(revenue + "e+2") + "e-2");
  };
  isInWinNumber(bonusNumber, winNumber) {
    if (winNumber.includes(bonusNumber)) {
      throw new Error("[ERROR] : 당첨 번호 리스트에 이미 존재하는 번호입니다.");
    }
    return true;
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
