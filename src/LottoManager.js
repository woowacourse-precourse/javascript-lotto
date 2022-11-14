const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./constant/message");
const Validation = require("./Validation");
const { stringToNumber } = require("./utils/common");
const LottoUtils = require("./utils/lottoUtils");

class LottoManager {
  constructor() {}

  calculateLottoCount(purchaseCost) {
    return Math.floor(purchaseCost / 1000);
  }

  receivePurchaseCost() {
    Console.readLine(MESSAGE.START, (purchaseString) => {
      Validation.validatePayment(purchaseString);

      const purchaseCost = stringToNumber(purchaseString);
      const lottoCount = this.calculateLottoCount(purchaseCost);
      const lottoTickets = LottoUtils.createLottos(lottoCount);

      LottoUtils.printLotto(lottoTickets);

      Console.readLine(MESSAGE.WINNING, (winningNumberString) => {
        const winningNumbers = winningNumberString
          .split(",")
          .map((number) => stringToNumber(number));
        Validation.validateNumbers(winningNumbers);
        Validation.validateWinningNumbers(winningNumbers);

        Console.readLine(MESSAGE.BONUS, (bonusNumberString) => {
          const bonusNumber = stringToNumber(bonusNumberString);
          Validation.validateNumbers([bonusNumber]);
          Validation.validateBonusNumbers(winningNumbers, [bonusNumber]);

          const result = LottoUtils.getLottoResult(
            lottoTickets,
            winningNumbers,
            bonusNumber
          );
          LottoUtils.printResult(lottoTickets, result);
        });
      });
    });
  }

  start() {
    this.receivePurchaseCost();
  }
}

module.exports = LottoManager;
