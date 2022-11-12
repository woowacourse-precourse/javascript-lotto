const { Console } = require('./utils/missionUtil');
const { OUTPUT_MESSAGES } = require('./common/messages');

class LottoView {
  getUserInput(query, callback) {
    Console.readLine(query, callback);
  }

  printLottoCount(count) {
    Console.print(`\n${OUTPUT_MESSAGES.BUY(count)}`);
  }
}

module.exports = LottoView;
