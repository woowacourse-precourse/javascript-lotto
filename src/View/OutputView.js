const {Console} = require("@woowacourse/mission-utils");
const {RESULT_MESSAGE, OUTPUT_MESSAGE : {purchaseQuantityMessage,resultCommentMessage, rateOfReturnMessage }} = require('../Constant')

const OutputView = {
  purchaseQuantity(quantity) {
    Console.print(purchaseQuantityMessage(quantity))
  },

  resultMap(resultObj) {
    Console.print(resultCommentMessage)
    Console.print(
    RESULT_MESSAGE.fifth(resultObj.fifty) +
    RESULT_MESSAGE.fourth(resultObj.fourth) +
    RESULT_MESSAGE.third(resultObj.third) +
    RESULT_MESSAGE.second(resultObj.second) +
    RESULT_MESSAGE.first(resultObj.first)
    )
  },

  rateOfreturn(rate) {
    Console.print(rateOfReturnMessage(rate))
  }
}

module.exports = OutputView