const MissionUtils = require("@woowacourse/mission-utils");
const { GAME_MESSAGES } = require("./constants/messages");
const LottoController = require("./LottoController");
const Validation = require("./Validation");

const mConsole = MissionUtils.Console;

class LottoGame {
  constructor() {
    this.validation = new Validation();
    this.lottoController = new LottoController();
  }

  getMoney() {
    mConsole.readLine(GAME_MESSAGES.PURCHASE_MONEY, (purchaseAmount) => {
      if (this.validation.isValidMoney(purchaseAmount))
        this.lottoController.countLottoAmount(purchaseAmount);
      this.lottoController.printLottoAmount();
      this.lottoController.printLottoList();
    });
  }
}

module.exports = LottoGame;
