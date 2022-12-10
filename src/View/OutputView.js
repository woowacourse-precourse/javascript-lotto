const {Console} = require("@woowacourse/mission-utils");
const {OUTPUT_MESSAGE : {purchaseQuantityMessage}} = require('../Constant')

const OutputView = {
  purchaseQuantity(quantity) {
    Console.print(purchaseQuantityMessage(quantity))
  }
}

module.exports = OutputView