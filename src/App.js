const { Console } = require("@woowacourse/mission-utils");
const { MESSEGE, ERROR } = require("./constant/lotto");
const Utils = require("./utils/utils");

class App {
  constructor() {
    this.utils = new Utils();
  }

  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.readLine(MESSEGE.INPUT_PURCHASE_AMOUNT, (input) => {
      if (this.isNotDividedByThousand(input))
        this.utils.throwError(ERROR.NOT_DIVIDED_BY_THOUSAND);
    });
  }

  isNotDividedByThousand(input) {
    return input % 1000 !== 0;
  }
}

const app = new App();
app.play();

module.exports = App;
