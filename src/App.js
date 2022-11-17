const MissionUtils = require("@woowacourse/mission-utils");
const Recommender = require("./Recommender.js");
const Buyer = require("./Buyer.js");
const Judge = require("./Judge.js");
const LottoMachine = require("./LottoMachine.js");
const Clerk = require("./Clerk.js");
const Statistics = require("./Statistics.js");
const { SYS_MESSAGE } = require("./Constant.js");

class App {
  constructor() {
    this.buyer = new Buyer();
    this.recommender = new Recommender();
    this.judge = new Judge();
    this.lottoMachine = new LottoMachine();
    this.clerk = new Clerk();
    this.statistics = new Statistics();
  }

  play() {
    let money = this.getMoney();
    let lottoCnt = money / 1000;
    let lottoArr = this.lottoMachine.makeLotto(lottoCnt);
    this.lottoMachine.printLotto();
    let lottoNum = this.getAllLottoNum();
    this.clerk.setData(lottoArr, lottoNum);
    let revenue = this.clerk.countReward(this.clerk.countPlace());
    this.clerk.showPlace();
    this.statistics.getRateOfReturn(money, revenue);
    this.statistics.showRateOfReturn();
    MissionUtils.Console.close();
  }

  getMoney() {
    return this.judge.isBuyerInputValid(
      this.buyer.getInput(SYS_MESSAGE.INPUT_MONEY_MESSAGE)
    );
  }

  getAllLottoNum() {
    return [this.getLottoNum(), this.getBonusNum()];
  }

  getLottoNum() {
    return this.judge.lottoInputValid(
      this.recommender.getInput(SYS_MESSAGE.INPUT_LOTTO_NUM)
    );
  }

  getBonusNum() {
    return this.judge.bonusInputValid(
      this.recommender.getInput(SYS_MESSAGE.INPUT_BONUS_NUM)
    );
  }
}

module.exports = App;
