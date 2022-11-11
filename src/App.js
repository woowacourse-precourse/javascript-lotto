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
      Console.close();
    });
  }
}

const app = new App();
app.play();
module.exports = App;
