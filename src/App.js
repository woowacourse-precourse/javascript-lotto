const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
class App {
  constructor() {
    this.money = null;
    this.lotto = []; 
    this.winNum = [];
    this.bonusNum = null;
  }

  setMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n",(num) => {
      if (!/^\d+$/.test(num))
        throw new Error("[ERROR] 구입금액에 문자가 포함되어 있습니다.");
      const money = parseInt(num);
      if(money % 1000 !== 0)
        throw new Error("[ERROR] 구입금액 오류");
        this.money = money;
        this.buy();
        this.Lottos();
    });
  }
  buy() {
    let getMoney = this.money
    let count = parseInt(this.money / 1000);
    while (getMoney > 0) {
      getMoney -= 1000;
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      this.lotto.push(new Lotto(numbers));
    }
    Console.print("\n"+ count + "개를 구매했습니다.");
  }
  Lottos() {
    this.lotto.forEach((lottoArr) => {
      Console.print(lottoArr.toString());
    });
  }
 
  play() {
    this.setMoney();
  }
}
const app = new App();
app.play();
module.exports = App;