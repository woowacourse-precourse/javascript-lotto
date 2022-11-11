const WConsole = require("./utils/WConsole");
const { INPUT_MSG, prizeMsg, PRIZE, yieldMsg } = require("./utils/string");
const Payment = require("./Payment");
const Lotto = require("./Lotto");

class Game {
  init() {
    const money = WConsole.readLine(INPUT_MSG.START_GAME);
    const lottos = this.buyLottos(money);
    const matchingNums = this.getMatchingNums();
    const prize = this.getLottoPrize(lottos, matchingNums);
    this.printYield(money, prize);
    WConsole.close();
  }
  getLottoPrize(lottos, matchingNums) {
    let lottoResults = { FIFTH: 0, FOURTH: 0, THIRD: 0, SECOND: 0, FIRST: 0 };
    let result;
    for (const lotto of lottos) {
      result = lotto.compareNums(matchingNums);
      lottoResults = this.isInRank(result, lottoResults);
    }
    this.printLottoResults(lottoResults);
    return this.calculatePrize(lottoResults);
  }
  calculatePrize(lottoResults) {
    let prize = 0;
    for (const [rank, count] of Object.entries(lottoResults)) {
      prize += PRIZE[rank] * count;
    }
    return prize;
  }
  printYield(money, prize) {
    WConsole.print(yieldMsg(money, prize));
  }
  printLottoResults(lottoResults) {
    for (const [rank, count] of Object.entries(lottoResults)) {
      WConsole.print(prizeMsg(rank, count));
    }
  }
  isInRank(result, lottoResults) {
    if (result.rank) {
      lottoResults[result.rank]++;
    }
    return lottoResults;
  }
  buyLottos(money) {
    const payment = new Payment(money);
    return payment.issueLottos();
  }
  getMatchingNums() {
    const matchingNums = {};
    matchingNums["winning"] = new Lotto(this.getWinningNums());
    matchingNums["bonus"] = parseInt(WConsole.readLine(INPUT_MSG.BONUS_NUMS));
    return matchingNums;
  }
  getWinningNums() {
    let winningNums = WConsole.readLine(INPUT_MSG.WINNING_NUMS);
    winningNums = winningNums.split(",");
    return winningNums.map((num) => parseInt(num));
  }
}

module.exports = Game;
