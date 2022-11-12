const MissionUtils = require("@woowacourse/mission-utils");
const MESSAGE = require("../assets/Message");
const LottoModel = require("../model/LottoModel");
const CONSTANT = require("../assets/constant");
const LottoView = require("../view/LottoView");

class LottoController {
  lottoModel;
  lottoView;

  constructor() {
    this.lottoView = new LottoView(this);
  }

  start() {
    MissionUtils.Console.readLine(MESSAGE.INSERT_MONEY, (money) => {
      this.lottoModel = new LottoModel(money);
      this.lottoView.printAmount(money / CONSTANT.LOTTO_PRICE);
      this.lottoView.printAllLottery(this.lottoModel.lottos);

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
      this.lottoModel.evaluateResult();
    });
  }
}

module.exports = LottoController;
