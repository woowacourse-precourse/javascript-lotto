const MissionUtils = require("@woowacourse/mission-utils");
const MESSAGE = require("../assets/Message");
const CONSTANT = require("../assets/constant");
const LottoModel = require("../model/LottoModel");
const Prize = require("../model/Prize");
const LottoView = require("../view/LottoView");

class LottoController {
  lottoModel;
  lottoView;
  prize;

  constructor() {
    this.lottoView = new LottoView(this);
    this.prize = new Prize();
  }

  start() {
    MissionUtils.Console.readLine(MESSAGE.INSERT_MONEY, (money) => {
      this.lottoModel = new LottoModel(money);
      this.lottoModel.controller = this;

      const amount = money / CONSTANT.LOTTO_PRICE;
      this.lottoView.printStartInfo(amount, this.lottoModel.lottos);

      this.selectWinNumber();
    });
  }

  selectWinNumber() {
    MissionUtils.Console.readLine(MESSAGE.LOTTO_NUMBER_CHOICE, (choice) => {
      this.lottoModel.winNumber = choice;

      this.selectBonuse();
    });
  }

  selectBonuse() {
    MissionUtils.Console.readLine(MESSAGE.BONUSE, (number) => {
      this.lottoModel.bonuse = number;

      this.evaluateLotto();
    });
  }

  evaluateLotto() {
    const result = this.lottoModel.result;
    this.prize.applyResult(result);

    const buyPrice = this.lottoModel.lottos.length * CONSTANT.LOTTO_PRICE;
    this.lottoView.printResultInfo(this.prize, buyPrice);
    MissionUtils.Console.close();
  }
}

module.exports = LottoController;
