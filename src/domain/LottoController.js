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
      const amount = money / CONSTANT.LOTTO_PRICE;
      this.lottoModel = new LottoModel(money);
      this.lottoModel.controller = this;
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
    this.prize.appliResult(result);

    this.lottoView.printLastResult();
    this.lottoView.printWinResult(this.prize);
    //print earn
  }
}

module.exports = LottoController;
