const WConsole = require("./utils/WConsole");
const { INPUT_MSG, yieldMsg, MATCHING_LOTTO } = require("./utils/string");
const Payment = require("./Payment");
const Lotto = require("./Lotto");
const LottoPrize = require("./LottoPrize");

class Game {
  init() {
    const money = WConsole.readLine(INPUT_MSG.START_GAME);
    const lottos = this.buyLottos(money);
    const matchingLotto = this.getMatchingLotto();
    const lottoMatcher = new LottoPrize();
    const prize = lottoMatcher.getLottoPrize(lottos, matchingLotto);
    this.printYield(money, prize);
    WConsole.close();
  }
  printYield(money, prize) {
    WConsole.print(yieldMsg(money, prize));
  }
  buyLottos(money) {
    const payment = new Payment(money);
    return payment.issueLottos();
  }
  getMatchingLotto() {
    const matchingLotto = {};
    matchingLotto[MATCHING_LOTTO.WINNING] = new Lotto(this.getWinningNums());
    matchingLotto[MATCHING_LOTTO.BONUS] = parseInt(
      WConsole.readLine(INPUT_MSG.BONUS_NUMS),
      10
    );
    return matchingLotto;
  }
  getWinningNums() {
    let winningNums = WConsole.readLine(INPUT_MSG.WINNING_NUMS);
    winningNums = winningNums.split(",");
    return winningNums.map((num) => parseInt(num, 10));
  }
}

module.exports = Game;
