const { Console, Random } = require("@woowacourse/mission-utils");
const MyLotto = require("./MyLotto");

class App {
  play() {
    this.purchaseAmount();
  }

  purchaseAmount() {
    Console.readLine("구매금액을 입력해 주세요.\n", (amount) => {
      const lottos = new MyLotto(amount);
      let myLottos = lottos.getMyLottery(amount);
      lottos.printMyLottery(myLottos);
      this.getWinningNumbers();
    });
  }

  getWinningNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.", (numbers) => {
      const winningNumbers = numbers.split(",");
      Console.print(winningNumbers);
      Console.close();
    });
  }
}

const app = new App();
app.play();
module.exports = App;
