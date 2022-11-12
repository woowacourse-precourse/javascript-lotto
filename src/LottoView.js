const { Console } = require('./utils/missionUtil');
const { OUTPUT_MESSAGES } = require('./common/messages');

class LottoView {
  static getUserInput(query, callback) {
    Console.readLine(query, callback);
  }

  static printLottoCount(count) {
    Console.print(`\n${OUTPUT_MESSAGES.BUY(count)}`);
  }

  static printUserLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(lotto);
    });
  }

  static printStatsMessage() {
    Console.print(`\n${OUTPUT_MESSAGES.WIN_STATS}`);
  }
}

module.exports = LottoView;
