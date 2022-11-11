const { Console } = require('./utils/missionUtil');
const { INPUT_MESSAGES, OUTPUT_MESSAGES } = require('./common/messages');
const { LOTTO_INFO } = require('./common/constants');
const Validator = require('./Validator');

class LottoView {
  static getPurchaseAmount() {
    Console.readLine(`${INPUT_MESSAGES.AMOUNT}\n`, (money) => {
      Validator.checkValidInput(money);
      this.printLottoCount(money);
    });
  }

  static printLottoCount(money) {
    const lottoCount = money / LOTTO_INFO.PRICE;
    Console.print(`\n${OUTPUT_MESSAGES.BUY(lottoCount)}`);
  }
}

module.exports = LottoView;
