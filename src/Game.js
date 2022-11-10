const WConsole = require("./utils/WConsole");
const STRING = require("./utils/string");
const Payment = require("./Payment");
const Lotto = require("./Lotto");

class Game {
  init() {
    const money = WConsole.readLine(STRING.INPUT_MSG.START_GAME);
    const lottos = this.buyLottos(money);
    const matchingNums = this.getMatchingNums();
  }
  buyLottos(money) {
    const payment = new Payment(money);
    return payment.issueLottos();
  }
  getMatchingNums() {
    const matchingNums = {};
    matchingNums["winning"] = new Lotto(this.getWinningNums());
    matchingNums["bonus"] = parseInt(
      WConsole.readLine(STRING.INPUT_MSG.BONUS_NUMS)
    );
    console.log(matchingNums);
    return matchingNums;
  }
  getWinningNums() {
    let winningNums = WConsole.readLine(STRING.INPUT_MSG.WINNING_NUMS);
    winningNums = winningNums.split(",");
    return winningNums.map((num) => parseInt(num));
  }
}

module.exports = Game;
