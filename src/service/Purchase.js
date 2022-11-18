const { ERROR_MESSAGES, NUMBERS } = require("../constants/constants");

class Purchase {
  static #price = 0;
  static #amount = 0;

  static refinePrice = (priceStr) => {
    return Number(priceStr);
  };

  static validatePrice = (cost) => {
    if (cost / NUMBERS.MIN_COST_NUM !== Math.floor(cost / NUMBERS.MIN_COST_NUM))
      throw new Error(ERROR_MESSAGES.INVALID_COST_UNIT);
    if (cost < NUMBERS.MIN_COST_NUM || cost > NUMBERS.MAX_COST_NUM)
      throw new Error(ERROR_MESSAGES.INVALID_COST_RANGE);

    return true;
  };

  static setPrice = (price) => {
    Purchase.#price = price;
  };

  static getAmountOfLotto = (cost) => {
    const amount = cost / NUMBERS.MIN_COST_NUM;
    return amount;
  };

  static setAmountOfLotto = (amount) => {
    Purchase.#amount = amount;
  };

  // static generatePurchaseTemplate = () => {
  //   const amountTemplate = GAME_MESSAGES.RETURN_PURCHASED_AMOUNT(
  //     Purchase.getAmountOfLotto
  //   );
  // };

  // static printPurchaseTemplate = () => {
  //   Console.print(
  //     GAME_MESSAGES.RETURN_PURCHASED_AMOUNT(Purchase.getAmountOfLotto)
  //   );
  //   this.lottoNumbers.forEach((number) =>
  //     Console.print(`[${number.join(", ")}]`)
  //   );
  // };
}

module.exports = Purchase;
