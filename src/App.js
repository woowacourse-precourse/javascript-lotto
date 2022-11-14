const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Message = require("./Message");

class App {
  #Lotto;

  constructor() {
    this.myLotto = [];
    this.winningLotto = [];
    this.bonus = 0;
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

  play() {
    this.purchaseLotto();
    this.makeLotto(this.countLotto);
    this.winningNum();
  }
}

module.exports = App;