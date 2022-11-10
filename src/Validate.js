const MESSAGE = require("./View/Message");
const CONSTANT = require("./constant");

class Validate {
  static money(money) {
    if (!money.endsWith(CONSTANT.TRIPLE_ZERO)) {
      throw new Error(`[ERROR] ${MESSAGE.ERROR.VALID_MONEY}`);
    }
    if (+money < CONSTANT.LOTTO_PRICE) {
      throw new Error(`[ERROR] ${MESSAGE.ERROR.VALID_MONEY}`);
    }
    if (Number.isNaN(+money)) {
      throw new Error(`[ERROR] ${MESSAGE.ERROR.VALID_MONEY}`);
    }
  }
  static userChioce(choice) {
   // if(choice )
  }
} 

module.exports = Validate;
