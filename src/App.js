const { Player } = require("./Player");
const { Lotto } = require("./Lotto");
const { Statistic } = require("./Statistics");
const { Console } = require("@woowacourse/mission-utils");
class App {
  play() {
    processLottery();
  }
}
const processLottery = () => {
  Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
    const player = new Player(money);
    player.showLottoNumbers();
    inputWinningNumber(player);
  });
};
const inputWinningNumber = (player) => {
  Console.readLine("\n당첨 번호를 입력해 주세요\n", (winningNumbers) => {
    const winningLotto = new Lotto(winningNumbers.split(","));
    inputBonusNumber(player, winningLotto);
  });
};
const inputBonusNumber = (player, winningLotto) => {
  Console.readLine("\n보너스 번호를 입력해 주세요\n", (bonusNumber) => {
    winningLotto.setBonusNumber(bonusNumber);
    noticeStatistics(player, winningLotto);
  });
};
const noticeStatistics = (player, winningLotto) => {
  const statistic = new Statistic();
  statistic.countRank(player.getLottos(), winningLotto.getNumber());
  statistic.calculateLotteryReturn(player.getLottos().length * 1000);
  statistic.showStatistics();
  Console.close();
};
const app = new App();
app.play();
module.exports = App;
