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

      LottoUtils.printLottoCount(lottoCount);
      LottoUtils.printLotto(lottoTickets);
    });
  }
}
