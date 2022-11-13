const { Console, Random } = require("@woowacourse/mission-utils");
const MyLotto = require("./MyLotto");
const Lotto = require("./Lotto");

class App {
  play() {
    this.purchaseAmount();
  }

  purchaseAmount() {
    Console.readLine("구매금액을 입력해 주세요.\n", (amount) => {
      const lotteryTicket = new MyLotto(amount);
      const myLottos = lotteryTicket.getMyLottery();
      lotteryTicket.printMyLottery(myLottos);
      this.getWinningNumbers();
    });
  }

  getWinningNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (numbers) => {
      const winningNumbers = numbers.split(",");
      const lotto = new Lotto(winningNumbers);
      this.getBonusNumber(lotto);
      // Console.print(winningNumbers);
    });
  }

  getBonusNumber(lotto, winningNumbers) {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (number) => {
      const bonus = lotto.validateBonus(Number(number));
      Console.close();
    });
  }
}

const app = new App();
app.play();
module.exports = App;
