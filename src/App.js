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

  async getMoney() {
    return this.judge.isBuyerInputValid(
      await this.buyer.getInput(SYS_MESSAGE.INPUT_MONEY_MESSAGE)
    );
  }

  async getLottoNum() {
    return this.judge.lottoInputValid(
      await this.recommender.getInput(SYS_MESSAGE.INPUT_LOTTO_NUM)
    );
  }

  async getBonusNum() {
    return this.judge.bonusInputValid(
      await this.recommender.getInput(SYS_MESSAGE.INPUT_BONUS_NUM)
    );
  }
}

module.exports = App;
