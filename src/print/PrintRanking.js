const { Console } = require("@woowacourse/mission-utils");
const { RESULT } = require('../utils/Constants');

class PrintRanking {
  showRanking(ranking) {
    Console.print(RESULT.RESULT_START);
    
    for (let i = 0; i < 5; i++) {
      Console.print(`${RESULT.RANKING_LIST[i]}${ranking[i]}`);
    };
  };

  showPriz(prizePercent) {
    Console.print(`${RESULT.BENEFIT} ${prizePercent}%입니다.`);
    Console.close();
  };

};

module.exports = PrintRanking;