const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.money = 0;
    this.count = 0;
    this.lottoList = [];
    this.winning = [];
    this.bonus = 0;
  }

  setMoney(input) {
    const money = Number(input);
    if (money % 1000 !== 0) throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
    this.money = money;
  }

  setCount() {
    this.count = this.money / 1000;
  }

  publishLottoList() {
    for (let i=0; i<this.count; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      const lotto = new Lotto(numbers);
      this.lottoList.push(lotto);
    }
  }

  printLottoList() {
    MissionUtils.Console.print("\n"+this.count+"개를 구매했습니다.");
    for (let i=0; i<this.count; i++) {
      MissionUtils.Console.print(this.lottoList[i].getNumbers());
    }
  }

  setWinning(winning) {
    this.winning = winning;
  }

  setBonus(bonus) {
    this.bonus = bonus;
  }

  play() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      this.setMoney(input);
      this.setCount();
      this.publishLottoList();
      this.printLottoList();
      
      MissionUtils.Console.readLine("\n당첨 번호를 입력해 주세요.\n", (winningInput) => {
        this.setWinning(winningInput);

        MissionUtils.Console.readLine("\n보너스 번호를 입력해 주세요.\n", (bonusInput) => {
          this.setBonus(bonusInput);
        });
      });
    });
  }
} 

/* 나중에 지울 코드 */
const app = new App();
app.play();
/*******************/

module.exports = App;
