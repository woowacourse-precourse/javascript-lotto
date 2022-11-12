const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const BuyLottery = require("./BuyLottery");
const Generator = require("./Generator");
const Referee = require("./Referee");
class App {
  constructor() {
    this.buyLotto = new BuyLottery();
  }
  play() {
    this.inputOutputAmount();
    const { quentity, lottos } = this.buyLotto.buy(this.amount);
    this.outPurchaseSuccess(quentity, lottos);
    this.createWinningNumber();
    this.compare(this.lottos, this.winningNumbers, this.bonusNumber);
  }
  createWinningNumber() {
    const generator = new Generator();
    const winningNumbers = generator.createWinningNumber();
    const bonusNumber = generator.createBonusNumber(winningNumbers);
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }
  compare(lottos, winningNumber, bonusNumber) {
    const referee = new Referee();
    const rank = referee.compare(lottos, winningNumber, bonusNumber);
    this.rank = rank;
  }
  inputOutputAmount() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (amount) => {
      MissionUtils.Console.print("구입금액을 입력해 주세요.");
      MissionUtils.Console.print(amount);
      this.amount = amount;
    });
  }

  outPurchaseSuccess(quantity, lottos) {
    MissionUtils.Console.print(`${quantity}개를 구매했습니다.`);
    let idx = 0;
    while (idx !== quantity) {
      MissionUtils.Console.print(`${lottos[idx]}`);
      idx++;
    }
  }
}

module.exports = App;
