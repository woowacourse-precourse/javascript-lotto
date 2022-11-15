const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {

  constructor() {
    this.pay = 0;
    this.lotto = [];
    this.matchingNumbers = [];
  }
  
  play() {
    this.getUserInput();
  }

  getUserInput() {
    MissionUtils.Console.readLine("구매금액을 입력해 주세요.\n", (input) => {
      this.pay = input;
      this.lotto = Lotto.purchase(input);
      MissionUtils.Console.print(input);
      MissionUtils.Console.print(`${this.lotto.length}개를 구매했습니다.`);
      this.printLottos();
      // this.getWinNumbers()
    });
  }

  printLottos() {
    this.lotto.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.numbers.join(",")}]`);
    });
  }



}

module.exports = App;
