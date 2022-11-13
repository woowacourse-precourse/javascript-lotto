const MESSAGE = require("./constant/message");
const Validation = require("./Validation");

class LottoManager {
  constructor() {}

  receivePurchaseCost() {
    Console.readLine(MESSAGE.START, (purchaseString) => {
      Validation.validatePayment(purchaseString);
    });
  }
}
