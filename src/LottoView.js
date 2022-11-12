const { Console } = require('./utils/missionUtil');
const { lottoCount } = require('./utils/calculator');
const { INPUT_MESSAGES, OUTPUT_MESSAGES } = require('./common/messages');
const Validator = require('./Validator');

class LottoView {
  getPurchaseAmount() {
    Console.readLine(`${INPUT_MESSAGES.AMOUNT}\n`, (money) => {
      Validator.checkValidMoney(money);
      this.printLottoCount(money);
    });
  }

  printLottoCount(money) {
    const count = lottoCount(money);
    Console.print(`\n${OUTPUT_MESSAGES.BUY(count)}`);
  }
}

module.exports = LottoView;
