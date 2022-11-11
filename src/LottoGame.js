const MissionUtils = require("@woowacourse/mission-utils");
const { GAME_MESSAGES } = require("./constants/messages");
const Validation = require("./Validation");

const mConsole = MissionUtils.Console;

class LottoGame {
  constructor() {
    this.validation = new Validation();
  }

  getMoney() {
    mConsole.readLine(GAME_MESSAGES.PURCHASE_MONEY, (purchaseAmount) => {
      if (this.validation.isValidMoney(purchaseAmount)) return purchaseAmount;
    });
  }
}

module.exports = LottoGame;
