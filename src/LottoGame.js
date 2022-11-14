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
      this.getWinNumbers();
    });
  }

  getWinNumbers() {
    mConsole.readLine("\n당첨 번호를 입력해 주세요.\n", (inputNumbers) => {
      this.lottoController.setWinNumbers(inputNumbers);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    mConsole.readLine("\n보너스 번호를 입력해 주세요.\n", (inputBonus) => {
      this.lottoController.setBonusNumber(inputBonus);
      this.printLottoResult();
    });
  }

  printLottoResult() {
    mConsole.print("\n당첨 통계\n---");
    this.lottoController.printRank();
    this.lottoController.printProfitRate();
  }
}

module.exports = LottoGame;
