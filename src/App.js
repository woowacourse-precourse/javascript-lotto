const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Message = require("./Message");

class App {
  #Lotto;

  constructor() {
    this.money = 0;
    this.myLotto = [];
    this.winningLotto = [];
    this.bonus = 0;
    this.rank = [{
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    }];
    this.reward = 0;
  }

  checkMoney(money) {
    if (isNaN(money)) {
      throw new Error(Message.INPUT_ERROR);
    }
    if (money % 1000 != 0) {
      throw new Error(Message.UNIT_ERROR);
    }
  }

  purchaseLotto() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.money = money;
      this.checkMoney(money);
      this.countLotto = Math.floor(money / 1000);
    });
  }

  makeLotto(countLotto) {
    MissionUtils.Console.print(`${this.countLotto}개를 구매했습니다.`);

    for (let i = 0; i < countLotto; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      if (numbers) {
        const lotto = numbers.sort((a, b) => a - b);
        this.myLotto.push(lotto);
      }
      MissionUtils.Console.print(this.myLotto[i]);
    }
  }

  winningNum() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (winning) => {
      this.winningLotto = winning.split(',').map(Number);
      this.#Lotto = new Lotto(this.winningLotto);
    });
  }

  bonusNum() {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n", (bonus) => {
      this.bonus = bonus;
    });
  }

  checkWinner() {
    let count = 0;
    let bonus = 0;
    for (let i = 0; i < this.countLotto; i++) {
      this.myLotto.map(n => {
        if (this.winningLotto.includes(n)) {
          count++;
        }
        if (n == this.bonus) {
          bonus++;
        }
      });
      this.divideWinner(count, bonus);
    }
  }

  divideWinner(count, bonus) {
    switch (count) {
      case 3:
        this.rank['fifth']++; this.reward += 5000;
        break;
      case 4:
        this.rank['fourth']++; this.reward += 50000;
        break;
      case 5:
        if (bonus == 0) this.rank['third']++; this.reward += 1500000;
        if (bonus == 1) this.rank['second']++; this.reward += 30000000;
        break;
      case 6:
        this.rank['first']++; this.reward += 2000000000;
    }
  }

  calYield() {
    const yield = (this.reward / this.money) * 100;
    MissionUtils.Console.print(`총 수익률은 ${yield}%입니다.\n`);
    MissionUtils.Console.close();
  }

  result() {
    MissionUtils.Console.print("당첨 통계\n");
    MissionUtils.Console.print("---\n");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.rank['fifth']}개\n`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.rank['fourth']}개\n`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.rank['third']}개\n`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.rank['second']}개\n`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.rank['first']}개\n`);
    this.calYield();
  }

  play() {
    this.purchaseLotto();
    this.makeLotto(this.countLotto);
    this.winningNum();
    this.checkWinner();
    this.result();
  }
}

module.exports = App;