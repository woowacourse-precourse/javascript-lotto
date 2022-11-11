const { Console } = require('./utils/missionUtil');
const { INPUT_MESSAGES } = require('./common/messages');

class LottoView {
  static getPurchaseAmount() {
    Console.readLine(`${INPUT_MESSAGES.AMOUNT}\n`, (answer) => {
      console.log(answer);
    });
  }
}

module.exports = LottoView;
