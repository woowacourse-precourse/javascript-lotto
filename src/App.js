const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {

  constructor() {
    this.pay = 0;
    this.lotto = [];
    this.winLottos = [];
    this.bonus = 0;
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
      this.getWinNumbers();
      this.getBonusNumber();
    });
  }

  printLottos() {
    this.lotto.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.numbers.join(",")}]`);
    });
  }

  getWinNumbers() {
    this.winLottos = [];

    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (input) => {
      
      this.winLottos = input.split(",");
      if(winLottos.length !== 6) {
        throw new Error("[Error] 당첨 번호는 6개를 입력해주세요.");
      }
      
    });
  }

  getBonusNumber() {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n", (input) => {
      this.bonus = input;
    })
  }


}

module.exports = App;
