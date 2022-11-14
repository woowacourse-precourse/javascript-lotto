const { Console } = require("@woowacourse/mission-utils");
const LottoController = require("./LottoController");
const Validation = require("./validator/Validation");
const { GAME_MESSAGES } = require("./constants/messages");

class LottoGame {
  constructor() {
    this.validation = new Validation();
    this.lottoController = new LottoController();
  }

  getMoney() {
    Console.readLine(GAME_MESSAGES.PURCHASE_MONEY, (purchaseAmount) => {
      if (this.validation.isValidMoney(purchaseAmount))
        this.lottoController.countLottoAmount(purchaseAmount);
      this.lottoController.printLottoAmount();
      this.lottoController.printLottoList();
      this.getWinNumbers();
    });
  }

  getWinNumbers() {
    Console.readLine(GAME_MESSAGES.WIN_NUMBERS, (inputNumbers) => {
      this.lottoController.setWinNumbers(inputNumbers);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(GAME_MESSAGES.BONUS, (inputBonus) => {
      this.lottoController.setBonusNumber(inputBonus);
      this.printLottoResult();
    });
  }

  printLottoResult() {
    Console.print(GAME_MESSAGES.RESULT);
    this.lottoController.printCalculatedResult();
    Console.close();
  }
}

module.exports = LottoGame;
