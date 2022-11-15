const LottoController = require("./LottoController");
const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGES } = require("./constants/messages");

class LottoGameView {
  constructor() {
    this.lottoController = new LottoController();
  }

  getMoney() {
    Console.readLine(GAME_MESSAGES.PURCHASE_MONEY, (purchaseAmount) => {
      this.lottoController.setMoney(purchaseAmount);
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

module.exports = LottoGameView;
