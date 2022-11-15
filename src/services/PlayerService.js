const PlayerDataChecker = require('./PlayerPurchaseAmountChecker');
const Parser = require('../utils/Parser');
const Tickets = require('./Tickets');

class PlayerService {
  static purchaseLotto(rowDataOfPurchaseAmount) {
    PlayerDataChecker.checkRowDataOfPurchaseAmount(rowDataOfPurchaseAmount);
    const purchaseAmount = Parser.convertStringToDecimalNumber(rowDataOfPurchaseAmount);
    PlayerDataChecker.checkPurchaseAmount(purchaseAmount);
    const quantity = PlayerService.#calculateQuantityOfLotto(purchaseAmount);
    const lottos = Tickets.publish(quantity);

    return {
      purchaseAmount,
      lottos,
      quantity,
    };
  }

  static #calculateQuantityOfLotto(purchaseAmount) {
    return purchaseAmount / 1000;
  }
}

module.exports = PlayerService;
