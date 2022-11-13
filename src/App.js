const { Console } = require("@woowacourse/mission-utils");
const MyLotto = require("./MyLotto");
const Lotto = require("./Lotto");
const Calculator = require("./Calculator");

class App {
  play() {
    this.purchaseAmount();
  }

  purchaseAmount() {
    Console.readLine("구매금액을 입력해 주세요.\n", (amount) => {
      const lotteryTicket = new MyLotto(amount);
      const myLottos = lotteryTicket.getMyLottery();
      lotteryTicket.printMyLottery(myLottos);
      this.getWinningNumbers(myLottos);
    });
  }

  getWinningNumbers(myLottos) {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (numbers) => {
      const winningNumbers = numbers.split(",");
      const lotto = new Lotto(winningNumbers);
      this.getBonusNumber(lotto, myLottos, winningNumbers);
    });
  }

  getBonusNumber(lotto, myLottos, winningNumbers) {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (number) => {
      const bonus = lotto.validateBonus(Number(number));
      const calculator = new Calculator(myLottos, winningNumbers, bonus);
      Console.close();
    });
  }
}

const app = new App();
app.play();
module.exports = App;
