const MissionUtils = require("@woowacourse/mission-utils");
const { GAME_MESSAGES } = require("./constants/messages");
const LottoController = require("./LottoController");
const Validation = require("./validator/Validation");

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
      this.getWinNumbers();
    });
  }

  getWinNumbers() {
    mConsole.readLine(GAME_MESSAGES.WIN_NUMBERS, (inputNumbers) => {
      this.lottoController.setWinNumbers(inputNumbers);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    mConsole.readLine(GAME_MESSAGES.BONUS, (inputBonus) => {
      this.lottoController.setBonusNumber(inputBonus);
      this.printLottoResult();
    });
  }

  printLottoResult() {
    mConsole.print(GAME_MESSAGES.RESULT);
    this.lottoController.printCalculatedResult();
    mConsole.close();
  }
}

module.exports = LottoGame;
